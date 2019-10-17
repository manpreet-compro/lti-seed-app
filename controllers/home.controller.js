/*
    Sample Controller
*/

const { renderHomePageValidator } = require('../validators/home.validator');

exports.renderHomePage = (req, res) => {
  /*
        Setup some default request params
        Eventually these should be overriden by the incoming request
    */
  const param = {
    foo: 'value',
    bar: 11
  };

  /*
        Validate the params
    */
  const isValid = renderHomePageValidator(param);

  if (!isValid) {
    return res.status(400).send('Bad Request');
  }

  return res.json({ home: 'valid' });
};
