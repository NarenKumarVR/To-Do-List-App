const exp = require("express");
const path = require("path");
const router = exp.Router();
const rootDir = require("../go/go");
const data = require("../controller/data");

router.get('/signup' , (req,res,next) => res.sendFile(path.join(rootDir ,"views" , "signupform.html")));
router.get('/login' , (req,res,next) => res.sendFile(path.join(rootDir ,"views" , "loginform.html")));
router.get('/down', data.download);
router.post('/loginsuccess', data.loginSuccess);
router.post('/signupsuccess' , data.signupSuccess);

router.use('/' , (req,res,next) => res.send("<h1 style='text-align: center; padding-top: 21%;'>404 Page not found</h1>"));

module.exports = router;