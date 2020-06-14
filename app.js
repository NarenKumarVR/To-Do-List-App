// const http = require("http");
// const rout = require("./router");
// const server = http.createServer(rout);

// server.listen(3000);

const exp = require("express");
const body = require("body-parser");
const userRout = require("./router/router");
const adminRout = require("./router/admin");
const app = exp();
const path = require("path");

app.set("view engine" , "pug");
app.set("views" , "views");
app.use(exp.static(path.join(__dirname,"public")));
//  app.use(exp.static("JS"));

app.use(body.urlencoded({extended: true}));
app.use('/admin',adminRout);
app.use(userRout);
// app.use("/admin",rout);
app.listen(3000);