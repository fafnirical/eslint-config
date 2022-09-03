import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

/**
 * **Layout & Formatting**
 *
 * These rules care about how the code looks rather than how it executes
 */
const config: Linter.Config<ESLintRules> = {
  rules: {
    // Enforce linebreaks after opening and before closing array brackets
    'array-bracket-newline': 'off',

    // Enforce consistent spacing inside array brackets
    'array-bracket-spacing': 'off',

    // Enforce line breaks after each array element
    'array-element-newline': 'off',

    // Require parentheses around arrow function arguments
    'arrow-parens': 'off',

    // Enforce consistent spacing before and after the arrow in arrow functions
    'arrow-spacing': 'off',

    // Disallow or enforce spaces inside of blocks after opening block and before closing block
    'block-spacing': 'off',

    // Enforce consistent brace style for blocks
    'brace-style': 'off',

    // Require or disallow trailing commas
    'comma-dangle': 'off',

    // Enforce consistent spacing before and after commas
    'comma-spacing': 'off',

    // Enforce consistent comma style
    'comma-style': 'off',

    // Enforce consistent spacing inside computed property brackets
    'computed-property-spacing': 'off',

    // Enforce consistent newlines before and after dots
    'dot-location': 'off',

    // Require or disallow newline at the end of files
    'eol-last': 'off',

    // Require or disallow spacing between function identifiers and their invocations
    'func-call-spacing': 'off',

    // Enforce line breaks between arguments of a function call
    'function-call-argument-newline': 'off',

    // Enforce consistent line breaks inside function parentheses
    'function-paren-newline': 'off',

    // Enforce consistent spacing around `*` operators in generator functions
    'generator-star-spacing': 'off',

    // Enforce the location of arrow function bodies
    'implicit-arrow-linebreak': 'off',

    // Enforce consistent indentation
    indent: 'off',

    // Enforce the consistent use of either double or single quotes in JSX attributes
    'jsx-quotes': 'off',

    // Enforce consistent spacing between keys and values in object literal properties
    'key-spacing': 'off',

    // Enforce consistent spacing before and after keywords
    'keyword-spacing': 'off',

    // Enforce position of line comments
    'line-comment-position': 'off',

    // Enforce consistent linebreak style
    'linebreak-style': 'off',

    // Require empty lines around comments
    'lines-around-comment': 'off',

    // Require or disallow an empty line between class members
    'lines-between-class-members': 'off',

    // Enforce a maximum line length
    'max-len': 'off',

    // Enforce a maximum number of statements allowed per line
    'max-statements-per-line': 'off',

    // Enforce newlines between operands of ternary expressions
    'multiline-ternary': 'off',

    // Enforce or disallow parentheses when invoking a constructor with no arguments
    'new-parens': 'off',

    // Require a newline after each call in a method chain
    'newline-per-chained-call': 'off',

    // Disallow unnecessary parentheses
    'no-extra-parens': 'off',

    // Disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 'error',

    // Disallow multiple spaces
    'no-multi-spaces': 'off',

    // Disallow multiple empty lines
    'no-multiple-empty-lines': 'off',

    // Disallow all tabs
    'no-tabs': 'off',

    // Disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 'off',

    // Disallow whitespace before properties
    'no-whitespace-before-property': 'off',

    // Enforce the location of single-line statements
    'nonblock-statement-body-position': 'off',

    // Enforce consistent line breaks after opening and before closing braces
    'object-curly-newline': 'off',

    // Enforce consistent spacing inside braces
    'object-curly-spacing': 'off',

    // Enforce placing object properties on separate lines
    'object-property-newline': 'off',

    // Enforce consistent linebreak style for operators
    'operator-linebreak': 'off',

    // Require or disallow padding within blocks
    'padded-blocks': 'off',

    // Require or disallow padding lines between statements
    'padding-line-between-statements': 'off',

    // Enforce the consistent use of either backticks, double, or single quotes
    quotes: 'off',

    // Enforce spacing between rest and spread operators and their expressions
    'rest-spread-spacing': 'off',

    // Require or disallow semicolons instead of ASI
    semi: 'off',

    // Enforce consistent spacing before and after semicolons
    'semi-spacing': 'off',

    // Enforce location of semicolons
    'semi-style': 'off',

    // Enforce consistent spacing before blocks
    'space-before-blocks': 'off',

    // Enforce consistent spacing before `function` definition opening parenthesis
    'space-before-function-paren': 'off',

    // Enforce consistent spacing inside parentheses
    'space-in-parens': 'off',

    // Require spacing around infix operators
    'space-infix-ops': 'off',

    // Enforce consistent spacing before or after unary operators
    'space-unary-ops': 'off',

    // Enforce spacing around colons of switch statements
    'switch-colon-spacing': 'off',

    // Require or disallow spacing around embedded expressions of template strings
    'template-curly-spacing': 'off',

    // Require or disallow spacing between template tags and their literals
    'template-tag-spacing': 'off',

    // Require or disallow Unicode byte order mark (BOM)
    'unicode-bom': 'off',

    // Require parentheses around immediate `function` invocations
    'wrap-iife': 'off',

    // Require parenthesis around regex literals
    'wrap-regex': 'off',

    // Require or disallow spacing around the `*` in `yield*` expressions
    'yield-star-spacing': 'off',
  },
};

export = config;
