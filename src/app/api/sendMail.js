import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { companyName, INN, projectName, producer, email, phone, comment } = req.body;

    // Create a transporter object using Yandex's SMTP server
    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465, // Secure port for SMTP
      secure: true, // true for port 465
      auth: {
        user: 'gorshenev2@yandex.ru', // your Yandex email address
        pass: '2014229152002Test',  // your Yandex email password
      },
    });

    // Setup email data
    const mailOptions = {
      from: 'gorshenev2@yandex.ru',
      to: 'gorschnyov.ilya2014@yandex.ru', // replace with the recipient's email
      subject: 'New Support Request',
      html: `
        <p>Company Name: ${companyName}</p>
        <p>INN: ${INN}</p>
        <p>Project Name: ${projectName}</p>
        <p>Producer: ${producer}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Comment: ${comment}</p>
      `,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Email not sent', error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
