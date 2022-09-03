import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

/**
 * **Suggestions**
 *
 * These rules suggest alternate ways of doing things
 */
const config: Linter.Config<ESLintRules> = {
  rules: {
    // Enforce getter and setter pairs in objects and classes
    'accessor-pairs': 'off',

    // Require braces around arrow function bodies
    'arrow-body-style': 'off',

    // Enforce the use of variables within the scope they are defined
    'block-scoped-var': 'off',

    // Enforce camelcase naming convention
    camelcase: 'off',

    // Enforce or disallow capitalization of the first letter of a comment
    'capitalized-comments': 'off',

    // Enforce that class methods utilize `this`
    'class-methods-use-this': 'off',

    // Enforce a maximum cyclomatic complexity allowed in a program
    complexity: 'off',

    // Require `return` statements to either always or never specify values
    'consistent-return': 'off',

    // Enforce consistent naming when capturing the current execution context
    'consistent-this': 'off',

    // Enforce consistent brace style for all control statements
    curly: 'off',

    // Require `default` cases in `switch` statements
    'default-case': 'off',

    // Enforce default clauses in switch statements to be last
    'default-case-last': 'off',

    // Enforce default parameters to be last
    'default-param-last': 'off',

    // Enforce dot notation whenever possible
    'dot-notation': 'off',

    // Require the use of `===` and `!==`
    eqeqeq: 'off',

    // Require function names to match the name of the variable or property to which they are assigned
    'func-name-matching': 'off',

    // Require or disallow named `function` expressions
    'func-names': 'off',

    // Enforce the consistent use of either `function` declarations or expressions
    'func-style': 'off',

    // Require grouped accessor pairs in object literals and classes
    'grouped-accessor-pairs': 'off',

    // Require `for-in` loops to include an `if` statement
    'guard-for-in': 'off',

    // Disallow specified identifiers
    'id-denylist': 'off',

    // Enforce minimum and maximum identifier lengths
    'id-length': 'off',

    // Require identifiers to match a specified regular expression
    'id-match': 'off',

    // Require or disallow initialization in variable declarations
    'init-declarations': 'off',

    // Enforce a maximum number of classes per file
    'max-classes-per-file': 'off',

    // Enforce a maximum depth that blocks can be nested
    'max-depth': 'off',

    // Enforce a maximum number of lines per file
    'max-lines': 'off',

    // Enforce a maximum number of lines of code in a function
    'max-lines-per-function': 'off',

    // Enforce a maximum depth that callbacks can be nested
    'max-nested-callbacks': 'off',

    // Enforce a maximum number of parameters in function definitions
    'max-params': 'off',

    // Enforce a maximum number of statements allowed in function blocks
    'max-statements': 'off',

    // Enforce a particular style for multiline comments
    'multiline-comment-style': 'off',

    // Require constructor names to begin with a capital letter
    'new-cap': 'off',

    // Disallow the use of `alert`, `confirm`, and `prompt`
    'no-alert': 'off',

    // Disallow `Array` constructors
    'no-array-constructor': 'off',

    // Disallow bitwise operators
    'no-bitwise': 'off',

    // Disallow the use of `arguments.caller` or `arguments.callee`
    'no-caller': 'off',

    // Disallow lexical declarations in case clauses
    'no-case-declarations': 'error',

    // Disallow arrow functions where they could be confused with comparisons
    'no-confusing-arrow': 'off',

    // Disallow the use of `console`
    'no-console': 'off',

    // Disallow `continue` statements
    'no-continue': 'off',

    // Disallow deleting variables
    'no-delete-var': 'error',

    // Disallow division operators explicitly at the beginning of regular expressions
    'no-div-regex': 'off',

    // Disallow `else` blocks after `return` statements in `if` statements
    'no-else-return': 'off',

    // Disallow empty block statements
    'no-empty': 'error',

    // Disallow empty functions
    'no-empty-function': 'off',

    // Disallow `null` comparisons without type-checking operators
    'no-eq-null': 'off',

    // Disallow the use of `eval()`
    'no-eval': 'off',

    // Disallow extending native types
    'no-extend-native': 'off',

    // Disallow unnecessary calls to `.bind()`
    'no-extra-bind': 'off',

    // Disallow unnecessary boolean casts
    'no-extra-boolean-cast': 'error',

    // Disallow unnecessary labels
    'no-extra-label': 'off',

    // Disallow unnecessary semicolons
    'no-extra-semi': 'error',

    // Disallow leading or trailing decimal points in numeric literals
    'no-floating-decimal': 'off',

    // Disallow assignments to native objects or read-only global variables
    'no-global-assign': 'error',

    // Disallow shorthand type conversions
    'no-implicit-coercion': 'off',

    // Disallow declarations in the global scope
    'no-implicit-globals': 'off',

    // Disallow the use of `eval()`-like methods
    'no-implied-eval': 'off',

    // Disallow inline comments after code
    'no-inline-comments': 'off',

    // Disallow use of `this` in contexts where the value of `this` is `undefined`
    'no-invalid-this': 'off',

    // Disallow the use of the `__iterator__` property
    'no-iterator': 'off',

    // Disallow labels that share a name with a variable
    'no-label-var': 'off',

    // Disallow labeled statements
    'no-labels': 'off',

    // Disallow unnecessary nested blocks
    'no-lone-blocks': 'off',

    // Disallow `if` statements as the only statement in `else` blocks
    'no-lonely-if': 'off',

    // Disallow function declarations that contain unsafe references inside loop statements
    'no-loop-func': 'off',

    // Disallow magic numbers
    'no-magic-numbers': 'off',

    // Disallow mixed binary operators
    'no-mixed-operators': 'off',

    // Disallow use of chained assignment expressions
    'no-multi-assign': 'off',

    // Disallow multiline strings
    'no-multi-str': 'off',

    // Disallow negated conditions
    'no-negated-condition': 'off',

    // Disallow nested ternary expressions
    'no-nested-ternary': 'off',

    // Disallow `new` operators outside of assignments or comparisons
    'no-new': 'off',

    // Disallow `new` operators with the `Function` object
    'no-new-func': 'off',

    // Disallow `Object` constructors
    'no-new-object': 'off',

    // Disallow `new` operators with the `String`, `Number`, and `Boolean` objects
    'no-new-wrappers': 'off',

    // Disallow `\8` and `\9` escape sequences in string literals
    'no-nonoctal-decimal-escape': 'error',

    // Disallow octal literals
    'no-octal': 'error',

    // Disallow octal escape sequences in string literals
    'no-octal-escape': 'off',

    // Disallow reassigning `function` parameters
    'no-param-reassign': 'off',

    // Disallow the unary operators `++` and `--`
    'no-plusplus': 'off',

    // Disallow the use of the `__proto__` property
    'no-proto': 'off',

    // Disallow variable redeclaration
    'no-redeclare': 'error',

    // Disallow multiple spaces in regular expressions
    'no-regex-spaces': 'error',

    // Disallow specified names in exports
    'no-restricted-exports': 'off',

    // Disallow specified global variables
    'no-restricted-globals': 'off',

    // Disallow specified modules when loaded by `import`
    'no-restricted-imports': 'off',

    // Disallow certain properties on certain objects
    'no-restricted-properties': 'off',

    // Disallow specified syntax
    'no-restricted-syntax': 'off',

    // Disallow assignment operators in `return` statements
    'no-return-assign': 'off',

    // Disallow unnecessary `return await`
    'no-return-await': 'off',

    // Disallow `javascript:` urls
    'no-script-url': 'off',

    // Disallow comma operators
    'no-sequences': 'off',

    // Disallow variable declarations from shadowing variables declared in the outer scope
    'no-shadow': 'off',

    // Disallow identifiers from shadowing restricted names
    'no-shadow-restricted-names': 'error',

    // Disallow ternary operators
    'no-ternary': 'off',

    // Disallow throwing literals as exceptions
    'no-throw-literal': 'off',

    // Disallow initializing variables to `undefined`
    'no-undef-init': 'off',

    // Disallow the use of `undefined` as an identifier
    'no-undefined': 'off',

    // Disallow dangling underscores in identifiers
    'no-underscore-dangle': 'off',

    // Disallow ternary operators when simpler alternatives exist
    'no-unneeded-ternary': 'off',

    // Disallow unused expressions
    'no-unused-expressions': 'off',

    // Disallow unused labels
    'no-unused-labels': 'error',

    // Disallow unnecessary calls to `.call()` and `.apply()`
    'no-useless-call': 'off',

    // Disallow unnecessary `catch` clauses
    'no-useless-catch': 'error',

    // Disallow unnecessary computed property keys in objects and classes
    'no-useless-computed-key': 'off',

    // Disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 'off',

    // Disallow unnecessary constructors
    'no-useless-constructor': 'off',

    // Disallow unnecessary escape characters
    'no-useless-escape': 'error',

    // Disallow renaming import, export, and destructured assignments to the same name
    'no-useless-rename': 'off',

    // Disallow redundant return statements
    'no-useless-return': 'off',

    // Require `let` or `const` instead of `var`
    'no-var': 'off',

    // Disallow `void` operators
    'no-void': 'off',

    // Disallow specified warning terms in comments
    'no-warning-comments': 'off',

    // Disallow `with` statements
    'no-with': 'error',

    // Require or disallow method and property shorthand syntax for object literals
    'object-shorthand': 'off',

    // Enforce variables to be declared either together or separately in functions
    'one-var': 'off',

    // Require or disallow newlines around variable declarations
    'one-var-declaration-per-line': 'off',

    // Require or disallow assignment operator shorthand where possible
    'operator-assignment': 'off',

    // Require using arrow functions for callbacks
    'prefer-arrow-callback': 'off',

    // Require `const` declarations for variables that are never reassigned after declared
    'prefer-const': 'off',

    // Require destructuring from arrays and/or objects
    'prefer-destructuring': 'off',

    // Disallow the use of `Math.pow` in favor of the `**` operator
    'prefer-exponentiation-operator': 'off',

    // Enforce using named capture group in regular expression
    'prefer-named-capture-group': 'off',

    // Disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal, and hexadecimal literals
    'prefer-numeric-literals': 'off',

    // Disallow use of `Object.prototype.hasOwnProperty.call()` and prefer use of `Object.hasOwn()`
    'prefer-object-has-own': 'off',

    // Disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.
    'prefer-object-spread': 'off',

    // Require using Error objects as Promise rejection reasons
    'prefer-promise-reject-errors': 'off',

    // Disallow use of the `RegExp` constructor in favor of regular expression literals
    'prefer-regex-literals': 'off',

    // Require rest parameters instead of `arguments`
    'prefer-rest-params': 'off',

    // Require spread operators instead of `.apply()`
    'prefer-spread': 'off',

    // Require template literals instead of string concatenation
    'prefer-template': 'off',

    // Require quotes around object literal property names
    'quote-props': 'off',

    // Enforce the consistent use of the radix argument when using `parseInt()`
    radix: 'off',

    // Disallow async functions which have no `await` expression
    'require-await': 'off',

    // Enforce the use of `u` flag on RegExp
    'require-unicode-regexp': 'off',

    // Require generator functions to contain `yield`
    'require-yield': 'error',

    // Enforce sorted import declarations within modules
    'sort-imports': 'off',

    // Require object keys to be sorted
    'sort-keys': 'off',

    // Require variables within the same declaration block to be sorted
    'sort-vars': 'off',

    // Enforce consistent spacing after the `//` or `/*` in a comment
    'spaced-comment': 'off',

    // Require or disallow strict mode directives
    strict: 'off',

    // Require symbol descriptions
    'symbol-description': 'off',

    // Require `var` declarations be placed at the top of their containing scope
    'vars-on-top': 'off',

    // Require or disallow "Yoda" conditions
    yoda: 'off',
  },
};

export = config;
