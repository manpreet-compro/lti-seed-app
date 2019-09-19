'use strict';
const appConfig = require('../config/app.config');

exports.index = (req, res) => {
    res.render('home', {
        title: appConfig.title
    });
};