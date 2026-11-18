import express from 'express';

const router = express.Router();

const FORMATS = [
  { id: 'unicode', name: 'Unicode Hindi', desc: 'मानक यूनिकोड (Standard)' },
  { id: 'krutidev', name: 'Kruti Dev 010', desc: 'DTP फॉन्ट (Legacy)' },
  { id: 'devlys', name: 'DevLys 010', desc: 'DTP & टाइपिंग फॉन्ट (Legacy)' }
];

// In-memory conversion history buffer (last 50 items)
let historyStore = [];

router.get('/formats', (req, res) => {
  res.json({ success: true, formats: FORMATS });
});

router.get('/history', (req, res) => {
  res.json({ success: true, history: historyStore });
});

router.post('/history', (req, res) => {
  const { from, to, inputPreview } = req.body;
  if (!from || !to) {
    return res.status(400).json({ success: false, message: 'Missing parameters' });
  }

  const record = {
    id: Date.now().toString(),
    from,
    to,
    inputPreview: inputPreview || '',
    timestamp: new Date().toISOString()
  };

  historyStore = [record, ...historyStore].slice(0, 50);
  res.json({ success: true, record });
});

router.delete('/history', (req, res) => {
  historyStore = [];
  res.json({ success: true, message: 'History cleared' });
});

export default router;
