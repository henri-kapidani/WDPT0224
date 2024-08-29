import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

// export default transport.sendMail.bind(transport); // questa sintassi risolve il problema dell'undefined (reading 'getSocket')
export default transport;
