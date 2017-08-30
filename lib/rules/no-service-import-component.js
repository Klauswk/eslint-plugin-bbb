/**
 * @fileoverview Don't import service inside component, inject from container
 * @author Klaus Klein
 */
'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: 'Dont import service inside component, inject from container',
      category: 'Best Practices',
      recommended: true
    },
    schema: []
  },

  create: function (context) {
    const SERVICE_IN_COMPONENT = 'Dont import service inside component, inject from container';
    const sourceCode = context.getSourceCode();
    const fileName = context.getFilename();
    const REGEX = /('?\/service)|("?\/service)/;

    return {
      JSXOpeningElement: function (node) {
        if (fileName.indexOf('component.jsx') > -1) {
          if (REGEX.test(sourceCode.text)) {
            context.report({
              node: node,
              message: SERVICE_IN_COMPONENT
            });
          }
        }
        return;
      }
    };
  }
};
