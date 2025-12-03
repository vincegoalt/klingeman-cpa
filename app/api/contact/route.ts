import { NextRequest, NextResponse } from 'next/server';

// Test endpoint - GET request
export async function GET() {
  return NextResponse.json({
    status: 'API is working',
    timestamp: new Date().toISOString(),
    env: {
      hasResendKey: !!process.env.RESEND_API_KEY,
      hasBusinessEmail: !!process.env.BUSINESS_EMAIL,
      nodeEnv: process.env.NODE_ENV
    }
  });
}

export async function POST(request: NextRequest) {
  console.log('=== CONTACT FORM API CALLED ===');
  console.log('Timestamp:', new Date().toISOString());

  try {
    // Step 1: Parse request body
    console.log('Step 1: Parsing request body...');
    let body;
    try {
      body = await request.json();
      console.log('Request body parsed successfully');
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request body', details: 'Could not parse JSON' },
        { status: 400 }
      );
    }

    const { name, email, phone, service, message } = body;
    console.log('Form data:', { name, email, phone, service: service || 'none', hasMessage: !!message });

    // Step 2: Validate required fields
    console.log('Step 2: Validating required fields...');
    if (!name || !email || !phone) {
      console.error('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields', details: 'Name, email, and phone are required' },
        { status: 400 }
      );
    }
    console.log('Validation passed');

    // Step 3: Check environment variables
    console.log('Step 3: Checking environment variables...');
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          error: 'Email service not configured',
          details: 'RESEND_API_KEY environment variable is missing'
        },
        { status: 500 }
      );
    }
    console.log('RESEND_API_KEY is present (length:', process.env.RESEND_API_KEY.length, ')');

    const businessEmail = process.env.BUSINESS_EMAIL || 'Matt.Klingeman@klingemancpas.com';
    console.log('Business email:', businessEmail);

    // Step 4: Import Resend
    console.log('Step 4: Importing Resend package...');
    let Resend;
    try {
      const resendModule = await import('resend');
      Resend = resendModule.Resend;
      console.log('Resend imported successfully');
    } catch (importError) {
      console.error('Failed to import Resend:', importError);
      return NextResponse.json(
        {
          error: 'Email service initialization failed',
          details: `Failed to import Resend: ${importError instanceof Error ? importError.message : 'Unknown error'}`
        },
        { status: 500 }
      );
    }

    // Step 5: Initialize Resend
    console.log('Step 5: Initializing Resend client...');
    let resend;
    try {
      resend = new Resend(process.env.RESEND_API_KEY);
      console.log('Resend client initialized');
    } catch (initError) {
      console.error('Failed to initialize Resend:', initError);
      return NextResponse.json(
        {
          error: 'Email service initialization failed',
          details: `Failed to create Resend client: ${initError instanceof Error ? initError.message : 'Unknown error'}`
        },
        { status: 500 }
      );
    }

    // Step 6: Send business notification email
    console.log('Step 6: Sending business notification email...');
    let businessEmailResult;
    try {
      businessEmailResult = await resend.emails.send({
        from: 'Klingeman CPAs <onboarding@resend.dev>',
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
      console.log('Business email sent successfully. ID:', businessEmailResult.data?.id);
    } catch (emailError) {
      console.error('Failed to send business email:', emailError);
      const errorMsg = emailError instanceof Error ? emailError.message : JSON.stringify(emailError);
      return NextResponse.json(
        {
          error: 'Failed to send notification email',
          details: `Error sending to business: ${errorMsg}`
        },
        { status: 500 }
      );
    }

    // Step 7: Send confirmation email to user
    console.log('Step 7: Sending confirmation email to user...');
    let confirmationEmailResult;
    try {
      confirmationEmailResult = await resend.emails.send({
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
              <p style="margin: 5px 0;">Former IRS Management • 225+ Years Combined Experience</p>
              <p style="margin: 5px 0;">
                <a href="https://klingemancpas.com" style="color: #1e40af;">klingemancpas.com</a>
              </p>
            </div>
          </div>
        `,
      });
      console.log('Confirmation email sent successfully. ID:', confirmationEmailResult.data?.id);
    } catch (emailError) {
      console.error('Failed to send confirmation email:', emailError);
      // Don't fail the request if confirmation email fails, business email already sent
      console.log('Business email was sent successfully, but confirmation email failed');
    }

    console.log('=== ALL EMAILS SENT SUCCESSFULLY ===');

    return NextResponse.json(
      {
        success: true,
        message: 'Email sent successfully',
        businessEmailId: businessEmailResult.data?.id,
        confirmationEmailId: confirmationEmailResult?.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== UNEXPECTED ERROR IN CONTACT API ===');
    console.error('Error type:', typeof error);
    console.error('Error:', error);

    let errorMessage = 'Unknown error occurred';
    let errorStack = '';

    if (error instanceof Error) {
      errorMessage = error.message;
      errorStack = error.stack || '';
      console.error('Error message:', errorMessage);
      console.error('Error stack:', errorStack);
    } else if (typeof error === 'object' && error !== null) {
      try {
        errorMessage = JSON.stringify(error);
        console.error('Error object:', errorMessage);
      } catch {
        errorMessage = 'Could not serialize error object';
      }
    }

    return NextResponse.json(
      {
        error: 'Unexpected error occurred',
        details: errorMessage,
        stack: process.env.NODE_ENV === 'development' ? errorStack : undefined,
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
