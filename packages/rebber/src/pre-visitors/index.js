const xtend = require('xtend')
const visit = require('unist-util-visit')
const referencePlugin = require('./referenceVisitor')
const codePlugin = require('./codeVisitor')

module.exports = preVisit

function preVisit (ctx, root) {
  const defaultVisitors = {
    'tableCell': [codePlugin(ctx, root).codeInTableVisitor],
    'definition': [referencePlugin(ctx).definitionVisitor],
    'imageReference': [referencePlugin(ctx).imageReferenceVisitor],
  }
  const visitors = xtend(defaultVisitors, ctx.preprocessors || {})
  Object.keys(visitors).forEach((key) => {

    if (Array.isArray(visitors[key])) {
      visitors[key].forEach(visitor => visit(root, key, visitor))
    }
  })
}