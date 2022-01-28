const PROXY_CONFIG = [
  {
    context: ['/api'],
    target: 'http://application-crud-api.herokuapp.com/',
    changeOrigin: true,
    secure: false,
    logLevel: 'debug'
  }
];

module.exports = PROXY_CONFIG;
