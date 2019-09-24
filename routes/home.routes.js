const Router = require('express').Router();

Router.get('/', (req,res)=>{
    res.send("home main!")
})

module.exports = Router;