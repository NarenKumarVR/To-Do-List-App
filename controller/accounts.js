const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)
// sgMail.send({
//     to: 'narenkumarvr2021@srishakthi.ac.in',
//     from: 'narenkumarvr2021@srishakthi.ac.in',
//     subject: 'Hey! You have logged in',
//     text: 'Congratulations.'
// })

const sendWelcomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from: 'narenkumarvr2021@srishakthi.ac.in',
        subject: 'Hey! You have logged in',
        text: 'Thanks for logging in, ${name}.'
    })
}

module.exports = {
    sendWelcomeEmail
}