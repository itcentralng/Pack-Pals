const express = require('express');
const sendSMS = require('./sendSMS');

const app = express();
app.use(express.json());

app.post('/api/send-sms', async (req, res) => {
  const { to, message } = req.body;

  try {
    const result = await sendSMS(to, message);
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
