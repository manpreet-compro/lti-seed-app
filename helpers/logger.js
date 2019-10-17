const info = (msg) => {
  if (msg) {
    // eslint-disable-next-line no-console
    console.log(`Info: ${msg}`);
  }
};

const error = (msg) => {
  if (msg) {
    // eslint-disable-next-line no-console
    console.log(`Error: ${msg}`);
  }
};

module.exports = {
  info,
  error
};
