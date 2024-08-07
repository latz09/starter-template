// /pages/api/submitContactForm.js
import { sanityClient } from '@/utils/cms/sanityConnection';
import transporter from '@/utils/nodemailer/transporter';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
		return;
	}

	try {
		const { name, email, phoneNumber, description } = req.body; // Include description

		// Store in Sanity
		const result = await sanityClient.create({
			_type: 'contactForm',
			name,
			email,
			phoneNumber,
			description, // Add description to the Sanity document
			sentAt: new Date().toISOString(),
		});

		// Send email using Nodemailer
		const mailOptions = {
			from: `Contact Form Submission <${email}>`,
			to: process.env.CLIENT_EMAIL,
			subject: `${name} Submitted a Contact Form`,
			text: `A new form has been submitted with the following details:
        Name: ${name}
        Email: ${email}
        Phone Number: ${phoneNumber}
        Description: ${description} // Add description to email
        Sent At: ${new Date().toISOString()}`,
			html: `
        <p>A new form has been submitted with the following details:</p>
        <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone Number:</strong> <a href="tel:${phoneNumber}">${phoneNumber}</a></li>
            <li><strong>Description:</strong> ${description}</li> // Add description to email
            <li><strong>Sent At:</strong> ${new Date().toISOString()}</li>
        </ul>
        `,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).json({
			success: true,
			message: 'Form submitted successfully',
			data: result,
		});
	} catch (error) {
		res.status(500).json({ success: false, message: error.message });
	}
}
