const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'
sgMail.setApiKey(sendgridAPIKey)
// sgMail.send({
//     to: 'narenkumarvr2021@srishakthi.ac.in',
//     from: 'narenkumarvr2021@srishakthi.ac.in',
//     subject: 'Hey! You have logged in',
//     text: 'Congratulations.'
// })

const SignIn = (email,name) => {
    sgMail.send({
        to: email,  
        from: 'narenkumarvr2021@srishakthi.ac.in',
        subject: 'Hey! You have Signed In',
        text: 'Thanks for Signing In, '+name+'. Regards from NK.',
        
    })
}

const SignUp = (email,name) => {
    sgMail.send({
        to: email,
        from: 'narenkumarvr2021@srishakthi.ac.in',
        subject: 'Hey! You have Signed Up',
        text: 'Welcome to the family '+name+ '! Thanks for Signing Up. \nRegards from NK.',
    })
}

const Tasks = (email,name) => {
    sgMail.send({
        to: email,
        from: 'narenkumarvr2021@srishakthi.ac.in',
        subject: 'Hey! You have Signed In',
        text: 'Thanks for Signing In, '+name+'. Regards from NK.',
        
    })
}

module.exports = {
    SignIn,
    SignUp,
    Tasks
}