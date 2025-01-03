import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';

dotenv.config();

sgMail.setApiKey(process.env.GRID_API_KEY);

const sendEmailController = async (req, res) => {
  const { name, email, msg } = req.body;

  if (!name || !email || !msg) {
    return res.status(400).json({
      message: 'All fields are required',
    });
  }

  const message = {
    to: process.env.RECIEVEREMAIL,
    from: process.env.SENDEREMAIL,
    subject: 'Portfolio Contact',
    html: `
  <div style="font-family: 'Helvetica Neue', Arial, sans-serif; color: #333; line-height: 1.6; background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: 20px auto; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);">
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #4CAF50;">
      <h1 style="color: #4CAF50; font-size: 24px; margin: 0;">New Contact Message</h1>
      <p style="color: #777; font-size: 14px; margin: 5px 0 0;">You've received a new message via your portfolio contact form</p>
    </div>
    
    <div style="padding: 20px;">
      <h3 style="color: #333; font-size: 18px; margin-bottom: 10px;">Message Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tbody>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #555;"><strong>Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #000;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #555;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #000;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #555;"><strong>Message:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd; color: #000;">${msg}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div style="text-align: center; padding: 20px 0; border-top: 2px solid #4CAF50;">
      <p style="color: #777; font-size: 14px; margin: 5px 0 0;">You can reply to this email to respond to the user</p>
      </div>

  </div>
`,
  };

  try {
    await sgMail.send(message);
    return res.status(200).json({
      message: 'Your message was sent successfully',
    });
  } catch (error) {
    console.error('Error sending email:', error.response?.body || error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

export default sendEmailController;
