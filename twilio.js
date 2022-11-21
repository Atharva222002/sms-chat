const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

app.get('/send-sms', (req, res) => {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
         body: 'Hello there!',
         from: process.env.FROM,
         to: '+919307387132'
       })
      .then(message => console.log(message.sid));
  });
const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log('Express server listening on port 3080');
});
