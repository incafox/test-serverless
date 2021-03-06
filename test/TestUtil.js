const assert = require("assert");
const axios = require("axios");

module.exports = {
  assertError(res, errorRegex) {
    assert.equal(res.response.status, 422);
    const actualError = res.response.data.errors.body[0];
    assert(
      errorRegex.test(actualError),
      `Expected: [${errorRegex}], Actual: [${actualError}]`
    );
  },
  randomString() {
    return ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
  },
  delay,
};

function delay(time) {
  return new Promise((fulfill) => setTimeout(fulfill, time));
}
