const Ajv = require('ajv');
const logger = require('./logger');

const ajv = new Ajv();

const getValidator = (schema) => {
  const validate = ajv.compile(schema);
  return (data) => {
    const valid = validate(data);
    if (valid) {
      logger.info('Valid!');
    }
    else {
      logger.error(`Invalid: ${ajv.errorsText(validate.errors)}`);
    }
    return valid;
  };
};

module.exports = {
  getValidator
};
