var remapAsyncToGenerator = require('babel-core/lib/transformation/helpers/remap-async-to-generator');

module.exports = function (babel) {
    var types  = babel.types;

    return new babel.Plugin('creed-async-await', {
        metadata: {
            optional: true,
            dependencies: ['es7.asyncFunctions', 'es6.classes']
        },

        visitor: {
            Function: function(node, parent, scope, file) {
                if (!node.async || node.generator) return;

                return remapAsyncToGenerator(this,
                    types.memberExpression(file.addImport('creed', null, 'absolute'), types.identifier('coroutine'))
                );
            }
        }
    });
};
