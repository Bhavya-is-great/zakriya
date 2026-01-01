import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { contactSchema } from "@/validation/contact";

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_LOGIN,
        pass: process.env.BREVO_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

function getEmailHTML(name, email, phone, coName, message) {
    return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;background:#fafafa;font-family:Arial, Helvetica, sans-serif;color:#181818;">
    
    <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          
          <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;box-shadow:0 6px 20px rgba(0,0,0,0.2);padding:24px;">
            
            <tr>
              <td align="center" style="padding-bottom:12px;">
                <h2 style="margin:0;font-size:22px;color:#181818;">
                  New Contact Request
                </h2>
                <p style="margin:6px 0 0;font-size:14px;color:#555;">
                  Someone submitted the form on your website
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:16px;background:#f0f0f0;border-radius:12px;">
                
                <p style="margin:6px 0;"><strong>Name:</strong> ${name}</p>
                <p style="margin:6px 0;"><strong>Email:</strong> ${email}</p>
                <p style="margin:6px 0;"><strong>Phone:</strong> ${phone}</p>
                <p style="margin:6px 0;"><strong>Company:</strong> ${coName}</p>

                <p style="margin:10px 0 0;"><strong>Message:</strong></p>
                <p style="margin:6px 0;line-height:1.5;">
                  ${message}
                </p>

              </td>
            </tr>

            <tr>
              <td align="center" style="padding:18px 0 6px;">
                
                <!-- Call Button -->
                <a href="tel:${phone}"
                   style="text-decoration:none;display:inline-block;margin:6px;padding:12px 18px;border-radius:30px;background:rgb(0,186,172);color:#ffffff;font-weight:bold;box-shadow:0 4px 10px rgba(0,0,0,0.2);">
                   Call
                </a>

                <!-- Email Button -->
                <a href="mailto:${email}?subject=Reply to ${name}"
                   style="text-decoration:none;display:inline-block;margin:6px;padding:12px 18px;border-radius:30px;background:#181818;color:#ffffff;font-weight:bold;box-shadow:0 4px 10px rgba(0,0,0,0.5);">
                   Email
                </a>

              </td>
            </tr>

            <tr>
              <td align="center" style="padding-top:10px;">
                <p style="margin:0;font-size:12px;color:#777;">
                  Designed with your theme — clean, simple & modern
                </p>
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </body>
</html>
`;
}


export async function POST(req) {
    try {
        let body;

        try {
            body = await req.json();
        } catch (error) {
            return NextResponse.json(
                { message: "Missing required fields." },
                { status: 400 }
            );
        }

        const result = contactSchema.safeParse(body);
        if (!result.success) {
            const message = result.error.issues
                .map((issue) => issue.message)
                .join(", ");

            return NextResponse.json({ message }, { status: 400 });
        }

        const { name, email, phone, coName, message } = body;

        const mailOptions = {
            from: `"Zakriya & Sons" <${process.env.TRANSACTIONAL_DOMAIN}>`,
            to: process.env.OWNER_EMAIL,
            replyTo: email,
            subject: `${name} Contacted you`,
            html: getEmailHTML(name, email, phone, coName, message),
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Contact message sent successfully!" },
            { status: 200 }
        );
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { message: "Failed to send contact email." },
            { status: 500 }
        );
    }
}
