//const { createProxyMiddleware } = require('http-proxy-middleware');
import axios from "axios";
axios.defaults.baseURL = 'https://localhost:8282/';
axios.defaults.proxy.port ='8282';
/*module.exports = function(app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'http://localhost:8282', // Remplacez l'URL par votre URL de backend
      changeOrigin: true,
      pathRewrite: {
        '^/api/v1': ''
      }
      
    })
  );
};*/
