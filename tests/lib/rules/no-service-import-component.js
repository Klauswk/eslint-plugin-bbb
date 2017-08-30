/**
 * @fileoverview Don&#39;t import service inside component, inject from container
 * @author Klaus Klein
 */
'use strict';

const RuleTester = require('eslint').RuleTester;
const rule = require('../../../lib/rules/no-service-import-component');


const parserOptions = {
  ecmaVersion: 8,
  sourceType: 'module',
  ecmaFeatures: {
    experimentalObjectRestSpread: true,
    jsx: true
  }
};

// ------------------------------------------------------------------------------
// Code Snippets
// ------------------------------------------------------------------------------
const withJSX = [`import Service from './../service';`,
  'const Test = createReactClass({',
  '  render() {',
  '    return (',
  '      <button>hey</button>',
  '    )',
  '  }',
  '});',
  'export default Test;'].join('\n');
const withJSX1 = [`import Service from './../service.js'`,
  'const Test = createReactClass({',
  '  render() {',
  '    return (',
  '      <button>hey</button>',
  '    )',
  '  }',
  '});',
  'export default Test;'].join('\n');


// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------

const ruleTester = new RuleTester({ parserOptions });
ruleTester.run('no-service-import-component', rule, {

  valid: [
    {
      filename: 'container.jsx',
      code: withJSX
    },
    {
      filename: 'container.jsx',
      code: withJSX1
    }
  ],

  invalid: [
    {
      filename: 'component.jsx',
      code: withJSX,
      errors: [{ message: 'Dont import service inside component, inject from container' }]
    },
    {
      filename: 'component.jsx',
      code: withJSX1,
      errors: [{ message: 'Dont import service inside component, inject from container' }]
    }
  ]
});
