// next.config.js
module.exports = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
          port: '',
          pathname: '/img/**',
        },
      ],
    },
  }

//   (https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg)