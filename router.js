
var express=require("express");
// const {session} =require('express-session');
var router=express.Router();
const userControl= require('./controller/usercontreoll')

//login user
router.post('/login',userControl.loginpost); 

//route for dashbord

router.get("/dashbord",(req,res)=>{
    if(req.session.user){
        res.render('dashbord',{user : req.session.user})
    }else{
        res.render('/');
    }
})

// route for logout

router.get('/logout',(req,res)=>{
    console.log("here");
    req.session.destroy(function(err){
        if(err){
            console.log(err.message);
            res.send("Error")          
        }else{
            res.render('base',{title:"Express", logout:"logout Successfully...!"})
        }
    })
})

module.exports=router;


