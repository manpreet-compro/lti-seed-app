const Router = require('express').Router();
const HomeController = require('../controllers/home.controller');

Router.get('/', HomeController.renderHomePage);

module.exports = Router;
