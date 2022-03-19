const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: {
    //tailwindcss: { config: './src/block1/tailwind.config.js' },
    //tailwindcss: { config: './src/block2/tailwind.config.js' },
    'postcss-multiple-tailwind': {
      mode: 'auto',
    },
    // autoprefixer: { grid: true },
    // ...(process.env.NODE_ENV === 'production' ? {
    //   cssnano: {
    //     preset: [
    //       'default',
    //       {
    //         discardComments: {
    //           removeAll: true,
    //         },
    //       },
    //     ],
    //   },
    // } : {})
  }
};