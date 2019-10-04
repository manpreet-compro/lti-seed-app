const Router = require('express').Router();

const HomeRoutes = require('./home.routes')

Router.use('/home', HomeRoutes);

Router.get('/', (req,res)=>{
    return res.render('index');
})

module.exports = Router;