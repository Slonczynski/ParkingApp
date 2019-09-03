module.exports = {
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    server_path: '/usr/local/bin/chromedriver',
    cli_args: ['--verbose'],
    port: 8000
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome'
      }
    }
  }
};
