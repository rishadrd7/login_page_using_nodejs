
const express=require('express');
const path=require('path');
const bodyparser=require("body-parser");
const session=require("express-session");
const{v4:uuidv4}=require("uuid");

const nocache = require("nocache");
const router=require('./router');


const app = express();

const port = process.env.PORT ||7070;
app.use(nocache());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine','ejs');

// load static assets
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,'public/assets')));
app.use(session({
    secret: uuidv4(),
    resave:false,
    saveUninitialized:true,
}));

app.use('/route',router);

//home route  
app.get('/',(req,res)=>{
    if(!req.session.user){

        res.render('base',{title:"login /system"});
    }
    else{
        res.redirect('/route/dashbord');
    }
})

app.listen(port,()=>{console.log("Listening on the server on http://localhost:7070")});