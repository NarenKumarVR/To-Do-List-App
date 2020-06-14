const fs = require("fs");
const path = require("path");
const rootDir = require("../go/go");
const UserData = require("../models/userdata");
// const AdminData = require("../models/admindata");
const { SignIn } = require('../controller/emails/accounts');
const { SignUp } = require('../controller/emails/accounts');
// require('./db')
let lg;
let emailss;
importScripts = (req,res,next) => res.receiveFile(path.join(rootDir ,lg+".txt"))
exports.loginSuccess = (req,res,next) => {

    const tempuserdata = UserData.fetchAll();

    let tempuser = req.body.uname;
    let temppass = req.body.pass;
    let tempemail = req.body.email;
    
    for( let val of tempuserdata ){

        if( val.user === tempuser && val.pass === temppass ){

            console.log(val.user+" Logged");
            lg = val.user;
            SignIn(emailss, tempuser)
            return res.render('userdashboard' , {user: val , docTitle: val.user});
        }
    }
    // SignUp(tempemail, tempuser)
    res.status(301).redirect(301,'/login');  
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.api_key);
    // const msg = {
    //     to: tempemail,
    //     from: 'narenkumarvr2021@srishakthi.ac.in',
    //     subject: 'User has logged in successfully!',
    //     html: '<h1>Welcome to our family!</h1>',
    // };
    // sgMail.send(msg);

    // return  
}

exports.signupSuccess = (req,res,next) => {

    let tempuser = req.body.uname;
    let temppass = req.body.pass;
    let pass = req.body.pass;
    let tempemail = req.body.email;
    let repass = req.body.re_pass;
    emailss = tempemail;
    if( pass !== repass ){
        return res.status(301).redirect(301,'/signup');
    }
    
    const tempuserdata = UserData.fetchAll();
    for( let val of tempuserdata ){

        if( val.user === tempuser ){
            // SignIn(tempemail, tempuser)
            return res.status(301).redirect(301,'/signup');
        }
    }

    const userdata = new UserData(tempuser,temppass,req.body.email);
    userdata.save();
    let fname = tempuser+".txt";
    let fdata = "name : "+ tempuser + "\npassword : " + temppass + " \nemail : " + req.body.email;
    fs.writeFileSync(fname,fdata);
    // SignIn(tempemail, tempuser)
    SignUp(tempemail, tempuser)
    return res.status(301).redirect(301,'/login');
}

exports.download = (req,res,next) => res.sendFile(path.join(rootDir ,lg+".txt"))


exports.logout = (req,res,next) => {
    res.status(301).redirect(301,'/login');  
}