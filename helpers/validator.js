var Ajv = require('ajv');
var ajv = new Ajv();

const getValidator = (schema)=>{
    let validate =  ajv.compile(schema);
    return (data)=>{
        var valid = validate(data);
        if (valid) {
            console.log('Valid!');
        }
        else {
            console.log('Invalid: ' + ajv.errorsText(validate.errors))
        }
        return valid;
    }
}

module.exports = {
    getValidator
}