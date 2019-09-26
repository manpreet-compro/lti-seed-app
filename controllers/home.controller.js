const {renderHomePageValidator} = require('../validators/home.validator');

exports.renderHomePage = (req, res) => {
    
    let param = {
        "foo": "value",
        "bar": 11
    };
    let isValid = renderHomePageValidator(param);

    if(!isValid){
        return res.status(400).send("Bad Request")
    }
    return res.render('home');
};