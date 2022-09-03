import type { Linter } from 'eslint';
import type { ESLintRules } from 'eslint/rules';

/**
 * **Possible Problems**
 *
 * These rules relate to possible logic errors in code
 */
const config: Linter.Config<ESLintRules> = {
  rules: {
    // Enforce `return` statements in callbacks of array methods
    'array-callback-return': 'off',

    // Require `super()` calls in constructors
    'constructor-super': 'error',

    // Enforce \"for\" loop update clause moving the counter in the right direction.
    'for-direction': 'error',

    // Enforce `return` statements in getters
    'getter-return': 'error',

    // Disallow using an async function as a Promise executor
    'no-async-promise-executor': 'error',

    // Disallow `await` inside of loops
    'no-await-in-loop': 'off',

    // Disallow reassigning class members
    'no-class-assign': 'error',

    // Disallow comparing against -0
    'no-compare-neg-zero': 'error',

    // Disallow assignment operators in conditional expressions
    'no-cond-assign': 'error',

    // Disallow reassigning `const` variables
    'no-const-assign': 'error',

    // Disallow expressions where the operation doesn't affect the value
    'no-constant-binary-expression': 'off',

    // Disallow constant expressions in conditions
    'no-constant-condition': 'error',

    // Disallow returning value from constructor
    'no-constructor-return': 'off',

    // Disallow control characters in regular expressions
    'no-control-regex': 'error',

    // Disallow the use of `debugger`
    'no-debugger': 'error',

    // Disallow duplicate arguments in `function` definitions
    'no-dupe-args': 'error',

    // Disallow duplicate class members
    'no-dupe-class-members': 'error',

    // Disallow duplicate conditions in if-else-if chains
    'no-dupe-else-if': 'error',

    // Disallow duplicate keys in object literals
    'no-dupe-keys': 'error',

    // Disallow duplicate case labels
    'no-duplicate-case': 'error',

    // Disallow duplicate module imports
    'no-duplicate-imports': 'off',

    // Disallow empty character classes in regular expressions
    'no-empty-character-class': 'error',

    // Disallow empty destructuring patterns
    'no-empty-pattern': 'error',

    // Disallow reassigning exceptions in `catch` clauses
    'no-ex-assign': 'error',

    // Disallow fallthrough of `case` statements
    'no-fallthrough': 'error',

    // Disallow reassigning `function` declarations
    'no-func-assign': 'error',

    // Disallow assigning to imported bindings
    'no-import-assign': 'error',

    // Disallow variable or `function` declarations in nested blocks
    'no-inner-declarations': 'error',

    // Disallow invalid regular expression strings in `RegExp` constructors
    'no-invalid-regexp': 'error',

    // Disallow irregular whitespace
    'no-irregular-whitespace': 'error',

    // Disallow literal numbers that lose precision
    'no-loss-of-precision': 'error',

    // Disallow characters which are made with multiple code points in character class syntax
    'no-misleading-character-class': 'error',

    // Disallow `new` operators with the `Symbol` object
    'no-new-symbol': 'error',

    // Disallow calling global object properties as functions
    'no-obj-calls': 'error',

    // Disallow returning values from Promise executor functions
    'no-promise-executor-return': 'off',

    // Disallow calling some `Object.prototype` methods directly on objects
    'no-prototype-builtins': 'error',

    // Disallow assignments where both sides are exactly the same
    'no-self-assign': 'error',

    // Disallow comparisons where both sides are exactly the same
    'no-self-compare': 'off',

    // Disallow returning values from setters
    'no-setter-return': 'error',

    // Disallow sparse arrays
    'no-sparse-arrays': 'error',

    // Disallow template literal placeholder syntax in regular strings
    'no-template-curly-in-string': 'off',

    // Disallow `this`/`super` before calling `super()` in constructors
    'no-this-before-super': 'error',

    // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
    'no-undef': 'error',

    // Disallow confusing multiline expressions
    'no-unexpected-multiline': 'error',

    // Disallow unmodified loop conditions
    'no-unmodified-loop-condition': 'off',

    // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
    'no-unreachable': 'error',

    // Disallow loops with a body that allows only one iteration
    'no-unreachable-loop': 'off',

    // Disallow control flow statements in `finally` blocks
    'no-unsafe-finally': 'error',

    // Disallow negating the left operand of relational operators
    'no-unsafe-negation': 'error',

    // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
    'no-unsafe-optional-chaining': 'error',

    // Disallow unused private class members
    'no-unused-private-class-members': 'off',

    // Disallow unused variables
    'no-unused-vars': 'error',

    // Disallow the use of variables before they are defined
    'no-use-before-define': 'off',

    // Disallow useless backreferences in regular expressions
    'no-useless-backreference': 'error',

    // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
    'require-atomic-updates': 'off',

    // Require calls to `isNaN()` when checking for `NaN`
    'use-isnan': 'error',

    // Enforce comparing `typeof` expressions against valid strings
    'valid-typeof': 'error',
  },
};

export = config;
