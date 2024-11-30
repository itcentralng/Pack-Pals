
const express = require('express');
const AfricasTalking = require('africastalking');


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const africastalking = AfricasTalking({
  apiKey: 'atsk_74418ee45f5fbbe3c4ac4a7a896ccd5504449accbca08099b217d6d23f8a725b580c35fa', 
  username: 'sandbox', 
});


const sms = africastalking.SMS;


let userData = {};


async function sendSMS(to, message) {
  try {
    const response = await sms.send({
      to,
      message,
      from: '21525', 
    });
    console.log('SMS Response:', response);
    return { success: true, response };
  } catch (error) {
    console.error('Error sending SMS:', error);
    return { success: false, error };
  }
}


app.post('/ussd', async (req, res) => {
  const { phoneNumber, text } = req.body;

  let response = '';
  const userInputs = text.split('*');

  switch (userInputs.length) {
    case 1:
      response = `CON Welcome to PeerConnect!\nPlease enter your name:`;
      break;

    case 2:
      userData[phoneNumber] = { name: userInputs[1] };
      response = `CON Hi ${userInputs[1]}, please enter your email address:`;
      break;

    case 3:
      userData[phoneNumber].email = userInputs[2];
      response = `CON Please confirm your details:\nName: ${userData[phoneNumber].name}\nEmail: ${userInputs[2]}\n1. Confirm\n2. Edit`;
      break;

    case 4:
      if (userInputs[3] === '1') {
        const { name, email } = userData[phoneNumber];
        response = `END Thank you for registering, ${name}!\nYou will receive an SMS confirmation shortly.`;

        
        const smsMessage = `Welcome to PeerConnect, ${name}! Your registration is complete.`;
        await sendSMS(phoneNumber, smsMessage);
      } else {
        response = `CON Let's start over. Please enter your name:`;
        delete userData[phoneNumber]; 
      }
      break;

    default:
      response = `END Invalid input. Please try again.`;
      break;
  }

  res.set('Content-Type', 'text/plain');
  res.send(response);
});


app.post('/api/send-sms', async (req, res) => {
  const { to, message } = req.body;

  const result = await sendSMS(to, message);
  if (result.success) {
    res.status(200).json({ success: true, message: 'SMS sent successfully', data: result.response });
  } else {
    res.status(500).json({ success: false, message: 'Failed to send SMS', error: result.error });
  }
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
