const { DateTime } = require('luxon');

module.exports = {
  'TC1 - Check dates': function(browser) {
    const currentDay = DateTime.fromISO(new Date().toISOString());
    const today = DateTime.fromISO(new Date().toISOString()).toFormat(
      'dd-MM-yyyy'
    );
    const tomorrow = currentDay.plus({ days: 1 }).toFormat('dd-MM-yyyy');
    const yesterday = currentDay.minus({ days: 1 }).toFormat('dd-MM-yyyy');

    browser
      .url('localhost:3000')
      .waitForElementVisible('.weekday-container')
      .assert.containsText('.weekday-container', today)
      .assert.containsText('#next', tomorrow)
      .assert.containsText('#previous', yesterday)
      .end();
  },

  'TC2 - Check menu bar': function(browser) {
    browser
      .url('localhost:3000')
      .waitForElementVisible('.weekday-container')
      .click('#next');
  }
};
