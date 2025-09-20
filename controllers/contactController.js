const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const nodemailer = require('nodemailer');

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_PORT == '465', // true for 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.createContact = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ success: false, errors: errors.array() });

  try {
    const { firstName, lastName, email, phone, service, message } = req.body;
    const name = `${firstName} ${lastName}`;

    // Save contact in MongoDB
    const contact = new Contact({ name, email, phone, service, message });
    await contact.save();

    // Send email if TARGET_EMAIL is set
    const target = process.env.TARGET_EMAIL;
    if (target) {
      const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        to: target,
        replyTo: email,
        subject: `New Contact from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'N/A'}\nService: ${service || 'N/A'}\nMessage:\n${message}`,
        html: `<h3>New contact submission</h3>
               <p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
               <p><strong>Service:</strong> ${service || 'N/A'}</p>
               <p><strong>Message:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`
      };
      try {
        await transporter.sendMail(mailOptions);
        console.log('Contact email sent');
      } catch (err) {
        console.error("❌ Email send failed:", err);
      }
    }

    return res.status(201).json({ success: true, message: 'Contact saved and email sent' });
  } catch (err) {
    console.error('createContact error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
