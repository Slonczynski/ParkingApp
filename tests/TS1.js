const { DateTime } = require('luxon');

module.exports = {
  TC1: function(browser) {
    function getCurrentDate() {
      const dt = DateTime.local().setZone('Europe/Warsaw');
      const today = dt.fromISO().toFormat('dd-MM-yyyy');
      return today;
    }

    browser
      .url('http://172.23.64.248:3000/')
      .waitForElementVisible('.weekday-container')
      .assert.containsText(getCurrentDate());
  }
};
