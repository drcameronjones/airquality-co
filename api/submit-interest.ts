import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, organization, areaOfInterest, message } = req.body;

    // Validate required fields
    if (!name || !email || !areaOfInterest) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend (free tier: 100 emails/day)
    const emailContent = `
New Lead Submission from AirQuality.co

Name: ${name}
Email: ${email}
Organization: ${organization || 'Not provided'}
Area of Interest: ${areaOfInterest}
Message: ${message || 'No message provided'}

Submitted at: ${new Date().toISOString()}
    `.trim();

    // Use Resend API to send email
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      // Fallback: Just log the submission and return success
      console.log('Lead submission:', { name, email, organization, areaOfInterest, message });
      return res.status(200).json({ 
        success: true, 
        message: 'Your interest has been recorded. We will contact you soon!' 
      });
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'AirQuality.co <onboarding@resend.dev>',
        to: ['cameron@drcameronjones.com'],
        subject: `New Lead: ${name} - ${areaOfInterest}`,
        text: emailContent,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      // Still return success to user even if email fails
      return res.status(200).json({ 
        success: true, 
        message: 'Your interest has been recorded. We will contact you soon!' 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Thank you for your interest! We will get back to you within 48 hours.' 
    });

  } catch (error) {
    console.error('Error processing submission:', error);
    return res.status(500).json({ 
      error: 'Something went wrong. Please try again or email us directly at cameron@drcameronjones.com' 
    });
  }
}
