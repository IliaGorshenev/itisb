const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
  origin: 'http://localhost:3000', // Replace with your frontend's URL
  methods: ['POST', 'GET', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true,
};
app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
  host: 'mail.proitsolutions.ru',
  port: 25, // Secure SMTP port
  secure: false, // Use TLS
  auth: {
    user: 'info@proitsolutions.ru',
    pass: 'InfoTest2024',
  },
  tls: {
    rejectUnauthorized: false, // Allow self-signed certificates
  },
});

app.post('/send-email', (req, res) => {
  console.log('POST /send-email called');
  console.log('Request body:', req.body);

  const mailOptions = {
    from: 'info@proitsolutions.ru',
    to: 'support@proitsolutions.ru',
    bcc: 'gorschenyov.ilya2014@yandex.ru',
    subject: 'Заявка',
    text: `Поступила новая заявка с сайта proitsolutions.ru:
           Компания: ${req.body.companyName}
           ИНН: ${req.body.INN}
           Название проекта: ${req.body.projectName}
           Производитель: ${req.body.producer}
           Почта: ${req.body.email}
           Телефон: ${req.body.phone}
           Комментарий: ${req.body.comment}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending mail:', error);
      return res.status(500).send(error.toString());
    }
    console.log('Email sent:', info.response);
    res.status(200).send('Email sent successfully');
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
