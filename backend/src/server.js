import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conversionRoutes from './routes/conversion.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'LipiFlow Backend API', time: new Date() });
});

app.use('/api', conversionRoutes);

app.listen(PORT, () => {
  console.log(`🚀 LipiFlow server running on http://localhost:${PORT}`);
});
