# Krishna Backend (Email + MongoDB)

This backend accepts contact form submissions, saves them to MongoDB, and sends an email notification via SMTP (Nodemailer).

## Quick Start

1. Install dependencies:
   ```
   npm install
   ```

2. Copy `.env.example` to `.env` and fill values:
   - MONGO_URI
   - EMAIL_HOST (e.g. smtp.gmail.com)
   - EMAIL_PORT (e.g. 587)
   - EMAIL_USER (your smtp user)
   - EMAIL_PASS (smtp password or app password)
   - TARGET_EMAIL (where notifications will be sent)

3. Run development server:
   ```
   npm run dev
   ```

4. API:
   POST /api/contact
   Body (JSON): { name, email, phone, message }

Response:
   { success: true, message: "Contact saved and email sent" }

## Notes
- For Gmail, create an App Password if you have 2FA enabled and use that as EMAIL_PASS.
- Use MongoDB Atlas for remote DB.
- Deploy the server to Render/Heroku/Railway and set environment vars there.

