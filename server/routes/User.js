const router = require('express').Router();
const response = require('express');
const User = require('../models/User');

router.post('/add',async(req,res,next)=>
{
let users=new User(
    {
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email
    }
)



users.save().then((response)=>
{
    res.json({message:"user add successfully"})
})
.catch((error)=>
{
    res.json({message:"An error occured "})
})

})

router.get('/get',async(req,res)=>
{
    User.find({},(err,result)=>
    {
        if(err){
            res.json(err)
        }
        else
        {
            res.json(result)
        }
    })
})

module.exports = router;


