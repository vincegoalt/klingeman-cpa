# Email Configuration Setup

## Overview
The contact form on klingemancpas.com now has email functionality implemented using Nodemailer and Next.js API routes.

## Setup Instructions

### 1. Create Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

### 2. Configure Email Credentials

Edit `.env.local` and add your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-specific-password
BUSINESS_EMAIL=info@klingemancpas.com
```

### For Gmail Users:

1. **Enable 2-Step Verification:**
   - Go to your [Google Account Security Settings](https://myaccount.google.com/security)
   - Enable 2-Step Verification

2. **Create an App Password:**
   - After enabling 2-Step Verification, go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and your device
   - Generate a 16-character password
   - Use this password as `EMAIL_APP_PASSWORD` (not your regular Gmail password)

### For Other Email Providers:

You may need to modify the transporter configuration in `/app/api/contact/route.ts`:

```typescript
// Example for Outlook/Hotmail
const transporter = nodemailer.createTransporter({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});

// Example for custom SMTP
const transporter = nodemailer.createTransporter({
  host: 'smtp.yourdomain.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD,
  },
});
```

## Features Implemented

✅ **Contact Form Submission:** Sends emails when users submit the contact form
✅ **Dual Email System:**
   - Business notification email with formatted submission details
   - Auto-response confirmation email to the user
✅ **Loading States:** Visual feedback during form submission
✅ **Error Handling:** User-friendly error messages with fallback phone number
✅ **Success Confirmation:** Clear success message after submission
✅ **Form Validation:** Required field validation before submission

## Email Templates

### Business Email:
- Contains all form submission details
- Formatted in an easy-to-read table
- Includes clickable email and phone links
- Shows submission timestamp in CST

### User Confirmation Email:
- Professional branded header
- Confirms receipt of inquiry
- Shows submission details
- Explains next steps
- Includes direct phone number CTA

## Testing

1. **Local Testing:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000/contact and submit a test form

2. **Check Email Delivery:**
   - Verify business email receives notification
   - Verify user receives confirmation email
   - Check spam/junk folders if emails don't appear

## Troubleshooting

### Common Issues:

1. **"Failed to send email" error:**
   - Verify `.env.local` file exists and contains correct credentials
   - Check email/password are correct
   - For Gmail, ensure you're using App Password, not regular password

2. **Gmail "Less secure apps" error:**
   - Use App Password instead of regular password
   - Enable 2-Step Verification first

3. **Emails going to spam:**
   - Add sender email to safe senders list
   - Consider using a professional email service (SendGrid, Mailgun, etc.)

## Production Deployment

When deploying to production (e.g., Vercel, Netlify):

1. Add environment variables to your hosting platform:
   - `EMAIL_USER`
   - `EMAIL_APP_PASSWORD`
   - `BUSINESS_EMAIL`

2. Consider using a professional email service for better deliverability:
   - SendGrid
   - Mailgun
   - Amazon SES
   - Postmark

## Security Notes

⚠️ **NEVER commit `.env.local` to version control**
⚠️ **Keep email credentials secure**
⚠️ **Use environment variables for all sensitive data**
⚠️ **Regularly rotate app passwords**

## Support

If you encounter issues with email setup, consider:
1. Checking server logs for detailed error messages
2. Verifying SMTP settings with your email provider
3. Testing with a different email service
4. Implementing a backup notification system (SMS, webhook, etc.)