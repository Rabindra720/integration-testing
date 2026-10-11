const express = require('express');
const { hexToRgb } = require('./hexToRgb');
const app = express();
app.use(express.json());

/** GET /api/hex-to-rgb?hex=%23FF8800 returns the RGB channels as JSON. */
app.get('/api/hex-to-rgb', (req, res) => {
  try {
    const rgb = hexToRgb(req.query.hex);
    return res.status(200).json({ hex: req.query.hex, rgb });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
module.exports = app;
