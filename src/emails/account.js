const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'andrew@mead.io',
//         subject: 'Thanks for joining in!',
//         text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
//     })
// }

const sendWelcomeEmail = (email, name) => {
    msg = {
        to: email,
        from: 'andrew@mead.io',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    }

    sgMail
    .send(msg, (error, result) => {
        if (error) {
            console.log(error.message)
        }
        else {
        // Celebrate
        }
    });
}

module.exports = {
    sendWelcomeEmail
}