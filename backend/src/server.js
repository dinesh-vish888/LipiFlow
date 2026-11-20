import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conversionRoutes from './routes/conversion.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// Middlewares
app.use(cors());
app.use(express.json());

// Root endpoint for Render health check
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'LipiFlow Backend API is running',
    version: '1.0.0'
  });
});

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'LipiFlow Backend API', time: new Date() });
});

app.use('/api', conversionRoutes);

// Bind to 0.0.0.0 so Render can detect and route traffic to the port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 LipiFlow server running on http://0.0.0.0:${PORT}`);
});
