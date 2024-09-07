module.exports = {
    content: ['./src/*.{html, js}'],
    theme: {
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
    daisyui: {
      themes: ["nord"],
    },
  }