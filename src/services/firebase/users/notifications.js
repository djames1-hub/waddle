import { createTransport } from 'nodemailer';

export const sendNotification = ({ email, credentials, notificationMessage }) => {
    const waddleEmail = '';
    let transporter = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });

    const message = {
        from: waddleEmail,
        to: email,
        subject: notificationMessage.subject,
        text: notificationMessage.message,
        html: notificationMessage.html
    }

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log(err);
        }
    });
}