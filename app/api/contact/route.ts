import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us at (918) 922-1019.' },
        { status: 500 }
      );
    }

    // Initialize Resend inside the handler to ensure env vars are loaded
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const businessEmail = process.env.BUSINESS_EMAIL || 'Matt.Klingeman@klingemancpas.com';

    console.log('Attempting to send emails via Resend...');

    // Email to business owner
    const businessEmailResult = await resend.emails.send({
      from: 'Klingeman CPAs <onboarding@resend.dev>', // Resend's default sending domain
      to: businessEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Contact Information:</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="mailto:${email}" style="color: #1e40af;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">
                  <a href="tel:${phone}" style="color: #1e40af;">${phone}</a>
                </td>
              </tr>
              ${service ? `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Service Needed:</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${service}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          ${message ? `
          <div style="margin: 20px 0;">
            <h3 style="color: #374151;">Message:</h3>
            <div style="padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          ` : ''}

          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
            <p>This email was sent from the contact form at klingemancpas.com</p>
            <p>Submitted on: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
          </div>
        </div>
      `,
    });

    console.log('Business email sent:', businessEmailResult);

    // Confirmation email to the user
    const confirmationEmailResult = await resend.emails.send({
      from: 'Klingeman CPAs <onboarding@resend.dev>',
      to: email,
      replyTo: businessEmail,
      subject: 'Thank you for contacting Klingeman CPAs & Advisors',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; padding: 20px; background-color: #1e40af;">
            <h1 style="color: white; margin: 0;">Klingeman CPAs & Advisors</h1>
          </div>

          <div style="padding: 30px;">
            <h2 style="color: #1e40af;">Thank You for Contacting Us!</h2>

            <p style="color: #374151; line-height: 1.6;">
              Dear ${name},
            </p>

            <p style="color: #374151; line-height: 1.6;">
              We have received your inquiry and appreciate your interest in our services.
              Our team will review your message and contact you within 24 hours to discuss
              how we can assist with your tax and accounting needs.
            </p>

            <div style="margin: 30px 0; padding: 20px; background-color: #f3f4f6; border-radius: 5px;">
              <h3 style="color: #1e40af; margin-top: 0;">Your Submission Details:</h3>
              <p style="color: #374151;"><strong>Name:</strong> ${name}</p>
              <p style="color: #374151;"><strong>Email:</strong> ${email}</p>
              <p style="color: #374151;"><strong>Phone:</strong> ${phone}</p>
              ${service ? `<p style="color: #374151;"><strong>Service:</strong> ${service}</p>` : ''}
              ${message ? `<p style="color: #374151;"><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
            </div>

            <div style="margin: 30px 0;">
              <h3 style="color: #1e40af;">What Happens Next?</h3>
              <ul style="color: #374151; line-height: 1.8;">
                <li>A member of our team will review your inquiry</li>
                <li>We'll contact you within 24 hours to schedule your free consultation</li>
                <li>We'll discuss your specific needs and how we can help</li>
                <li>You'll receive a customized proposal with no obligation</li>
              </ul>
            </div>

            <div style="margin: 30px 0;">
              <p style="color: #374151; line-height: 1.6;">
                If you need immediate assistance, please don't hesitate to call us at:
              </p>
              <p style="text-align: center;">
                <a href="tel:9189221019" style="display: inline-block; padding: 12px 30px; background-color: #1e40af; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                  (918) 922-1019
                </a>
              </p>
            </div>

            <p style="color: #374151; line-height: 1.6;">
              We look forward to working with you!
            </p>

            <p style="color: #374151; line-height: 1.6;">
              Best regards,<br>
              <strong>The Klingeman CPAs Team</strong>
            </p>
          </div>

          <div style="padding: 20px; background-color: #f3f4f6; text-align: center; color: #6b7280; font-size: 12px;">
            <p style="margin: 5px 0;">Klingeman CPAs & Advisors</p>
            <p style="margin: 5px 0;">Former IRS Management • 40+ Years Combined Experience</p>
            <p style="margin: 5px 0;">
              <a href="https://klingemancpas.com" style="color: #1e40af;">klingemancpas.com</a>
            </p>
          </div>
        </div>
      `,
    });

    console.log('Confirmation email sent:', confirmationEmailResult);
    console.log('All emails sent successfully via Resend');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    // Extract detailed error information
    let errorMessage = 'Unknown error';
    let errorDetails = '';

    if (error instanceof Error) {
      errorMessage = error.message;
      errorDetails = error.stack || '';
    } else if (typeof error === 'object' && error !== null) {
      errorMessage = JSON.stringify(error);
    }

    console.error('Error details:', errorMessage);
    console.error('Error stack:', errorDetails);

    return NextResponse.json(
      {
        error: 'Failed to send email',
        details: errorMessage,
        debug: process.env.NODE_ENV === 'development' ? errorDetails : undefined
      },
      { status: 500 }
    );
  }
}
