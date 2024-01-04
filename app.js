const express = require('express');
const path = require('path');
const app = express();
const body= require("body-parser");//to get the html file data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/",(req,res)=>{
    const fnme= req.body.fname;
    const lnme= req.body.lname;
    const cntct=req.body.contact;
    const mail= req.body.mail;
    console.log(fnme);
    console.log(lnme);
    console.log(cntct);
    console.log(mail);
    console.log("done");
    
})

app.get("/",(req,res)=>{
    const x= (__dirname)+"/form.html"
    res.sendFile(x);
   })

module.exports = app;
