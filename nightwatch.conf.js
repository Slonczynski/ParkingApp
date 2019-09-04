module.exports = {
  src_folders: ['tests'],

  webdriver: {
    start_process: true,
    server_path: 'C:\\Users\\Konrad\\chromedriver.exe',
    cli_args: ['--verbose'],
    port: 9515
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        chromeOptions: {
          //args: ['--headless']
        }
      }
    }
  }
};
