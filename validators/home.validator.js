const { getValidator } = require('../helpers/validator');

const renderHomePageSchema = {
  properties: {
    foo: {
      type: 'string'
    },
    bar: {
      type: 'number',
      minimum: 2
    }
  }
};

module.exports = {
  renderHomePageValidator: getValidator(renderHomePageSchema)
};
