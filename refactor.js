const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');

try {
    const code = fs.readFileSync('assets/index-dsDsELIW.js', 'utf8');
    const ast = parser.parse(code, {
        sourceType: "module",
        plugins: ["optionalCatchBinding", "objectRestSpread", "dynamicImport", "topLevelAwait"]
    });

    traverse(ast, {
        // 1. UNROLL COMMA SEPARATED LINES (a(), b(), c() -> separate lines)
        ExpressionStatement(path) {
            if (t.isSequenceExpression(path.node.expression)) {
                const expressions = path.node.expression.expressions.map(expr => t.expressionStatement(expr));
                path.replaceWithMultiple(expressions);
            }
        },

        // 2. TERNARY TO IF/ELSE (cond ? a() : b() -> if (cond) { a() } else { b() })
        ConditionalExpression(path) {
            if (path.parentPath.isExpressionStatement()) {
                const { test, consequent, alternate } = path.node;
                path.parentPath.replaceWith(
                    t.ifStatement(test, t.blockStatement([t.expressionStatement(consequent)]), t.blockStatement([t.expressionStatement(alternate)]))
                );
            }
        },

        // 3. BOOLEANS (!0 -> true) - Fixed the crash here
        UnaryExpression(path) {
            if (path.node.operator === "!" && t.isNumericLiteral(path.node.argument)) {
                const val = path.node.argument.value;
                if (val === 0) path.replaceWith(t.booleanLiteral(true));
                if (val === 1) path.replaceWith(t.booleanLiteral(false));
            }
        },

        // 4. SHORT-CIRCUIT TO IF (a && b() -> if (a) b())
        LogicalExpression(path) {
            if (path.parentPath.isExpressionStatement() && path.node.operator === "&&") {
                path.parentPath.replaceWith(t.ifStatement(path.node.left, t.expressionStatement(path.node.right)));
            }
        }
    });

    const output = generate(ast, {
        retainLines: false,
        compact: false,
        minified: false
    }).code;

    fs.writeFileSync('assets/index-readable.js', output);
    console.log('Success! The code should now be expanded vertically.');

} catch (err) {
    console.error('Error:', err.message);
}