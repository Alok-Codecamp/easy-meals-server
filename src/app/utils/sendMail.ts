import nodemailer from 'nodemailer'
import config from '../config/config';


export const sendMail = async (to: string, html: string) => {
    // created transporter here 
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: config.app_mode === 'production' ? true : false,
        auth: {
            user: 'alok61.bd@gmail.com',
            pass: `${config.google_app_pass}`, // Use the app password generated in Step 1          
        },
    });


    // send mail 
    const responseEmail = await transporter.sendMail({
        from: 'Easy meals authentication service',
        to,
        subject: 'Easy meals reset password link ✅✅',
        text: 'This link expires in 10 minute!',
        html,

    })

    return responseEmail;
}