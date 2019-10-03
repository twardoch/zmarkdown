/* Dependencies. */
const all = require('rebber/dist/all')
const one = require('rebber/dist/one')
const has = require('has')


/* Expose. */
module.exports = figure

const defaultMacros = {
  blockquote: (innerText, caption = 'Anonymous') =>
    `\\begin{Quotation}[${caption}]\n${innerText}\n\\end{Quotation}\n\n`,
  code: (code, caption, extra) => {
    let params = ''
    if (extra.lines) {
      params += `[][${extra.lines}]`
    }
    return `\\begin{CodeBlock}${params}{${extra.language}}\n` +
            `${code}\n` +
            `\\end{CodeBlock}\n` +
            `\\captionof{listing}{${caption}}\n\n`
  },
  image: (_, caption, extra) =>
    `\\begin{center}\n` +
    `\\includegraphics${extra.width ? `[${extra.width}]` : ''}{${extra.url}}\n` +
    `\\captionof{figure}{${caption}}\n` +
    `\\end{center}\n`,
}

const makeExtra = {
  blockquote: node => {},
  code: (node) => {
    const language = node.lang || 'text'
    const extra = {language: language.split(' ')[0]}

    if (node.meta && node.meta.includes('hl_lines')) {
      let lines = node.meta.split('hl_lines=')[1]
      if (
        (lines.startsWith('"') && lines.endsWith('"')) ||
        (lines.startsWith("'") && lines.endsWith("'"))
      ) {
        lines = lines.slice(1, -1).trim()
      }
      extra.lines = lines
    }
    return extra
  },
  image: node => ({url: node.url, width: '\\linewidth'}),
}

/* Stringify a Figure `node`. */
function figure (ctx, node, index, parent) {
  const type = node.children[0].type
  const macro = (has(ctx, 'figure') && has(ctx.figure, type) && ctx.figure[type]) ||
    (has(defaultMacros, type) && defaultMacros[type])

  let caption = ''
  if (node.children.length) {
    caption = node.children
      .filter(captionNode => captionNode.type === 'figcaption')
      .map(captionNode => all(ctx, captionNode))
      .join('')
  }

  node.caption = caption // allows to add caption to the default processing
  if (!macro) {
    node.children[0].caption = caption
    return one(ctx, node.children[0], 0, node)
  }

  const wrappedNode = node.children[0]
  wrappedNode.caption = node.caption

  node.children = node.children.filter(node => node.type !== 'figcaption')
  if (node.children.length === 1) {
    node.children = node.children[0].children
  }

  const extra = has(makeExtra, type) ? makeExtra[type](wrappedNode) : undefined
  const innerText = all(ctx, node) || node.value || ''

  return macro(innerText.trim(), caption, extra)
}
