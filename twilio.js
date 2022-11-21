const express = require('express');
const { MessagingResponse } = require('twilio').twiml;

const app = express();

app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  res.type('text/xml').send(twiml.toString());
});

app.get('/send-sms', (req, res) => {
    const accountSid = 'AC7031bd2a90dd96b1ae4ad5541c0010a5'//'AC5cdde1fa27b1bc6c625b261a82e42abf'//process.env.TWILIO_ACCOUNT_SID||'AC7031bd2a90dd96b1ae4ad5541c0010a5';
    const authToken = '072f793418d670fbb934b8110c943431'//'c671709e4b24272d5b6b93adbc2efabe'//process.env.TWILIO_AUTH_TOKEN||'072f793418d670fbb934b8110c943431';
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
         body: 'Hello there!',
         from: '+13862515314',//'+14254752143',//'+13862515314',
         to: '+919307387132'
       })
      .then(message => console.log(message.sid));
  });
const port = process.env.PORT || 3080;
app.listen(port, () => {
  console.log('Express server listening on port 3080');
});
