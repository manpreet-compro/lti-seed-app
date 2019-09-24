const Router = require('express').Router();

Router.get('/', (req,res)=>{
    res.render('home')
})

module.exports = Router;