const Router = require('express').Router();

const HomeRoutes = require('./home.routes')

Router.use('/home', HomeRoutes);

Router.get('/', (req,res)=>{
    res.send("App main!")
})

module.exports = Router;