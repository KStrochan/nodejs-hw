import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(pino());

// Routes
app.get('/notes', (req, res) => {
  res.status(200).json({
    message: 'Retrieved all notes',
  });
});

app.get('/notes/:noteId', (req, res) => {
  const { noteId } = req.params;

  res.status(200).json({
    message: `Retrieved note with ID: ${noteId}`,
  });
});

app.get('/test-error', () => {
  throw new Error('Simulated server error');
});

// 404 handler — must be after all defined routes
app.use((req, res) => {
  res.status(404).json({
    message: 'Route not found',
  });
});

// Error handler — must have 4 arguments to be recognized by Express
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
