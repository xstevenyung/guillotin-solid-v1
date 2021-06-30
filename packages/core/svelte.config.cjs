const autoPreprocess = require('svelte-preprocess');

module.exports = {
  customElement: true,
  preprocess: autoPreprocess({
    defaults: {
      script: 'typescript',
    },
  }),
};
