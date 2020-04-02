module.exports = {
  parse: {
    gfm: true,
    commonmark: false,
    footnotes: true,
    pedantic: false,
    /* sets list of known blocks to nothing, otherwise <h3>hey</h3> would become
    &#x3C;h3>hey&#x3C;/h3> instead of <p>&#x3C;h3>hey&#x3C;/h3></p> */
    blocks: [],
  },

  alignBlocks: {
    center: 'align-center',
    right: 'align-right',
  },

  captions: {
    external: {
      table: 'Table:',
      gridTable: 'Table:',
      code: 'Code:',
      math: 'Equation:',
      iframe: 'Video:',
    },
    internal: {
      math: 'Equation:',
      inlineMath: 'Equation:',
      image: 'Figure:',
    },
  },

  customBlocks: require('./custom-blocks'),

  emoticons: require('./emoticons'),

  escapeEscaped: ['&'],

  headingShifter: 0,

  iframes: require('./iframes'),

  math: {
    inlineMathDouble: true,
  },

  ping: {
    pingUsername: (_username) => true,
    userURL: (username) => `/membres/voir/${username}/`,
    usernameRegex: /\B@(?:\*\*([^*]+)\*\*|(\w+))/,
  },

  postProcessors: {
    getStats: true,
    limitDepth: 100,
    listLanguages: true,
  },

  textr: require('./textr'),
}