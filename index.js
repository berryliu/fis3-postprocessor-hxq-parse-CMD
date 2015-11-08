module.exports = function (content, file, settings) {
    var cmdReg = /"(?:[^\\"\r\n\f]|\\[\s\S])*"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|(\/\/[^\r\n\f]+|\/\*[\s\S]+?(?:\*\/|$))|\b(seajs\.use|require)\s*\(\s*("(?:[^\\"\r\n\f]|\\[\s\S])*"|'(?:[^\\'\n\r\f]|\\[\s\S])*'|\[[\s\S]*?\])\s*/g,
        deps = [],
        result;

    while ((result = cmdReg.exec(content))) {
        var comment = result[1],
            requireType = result[2],
            requires = result[3];
        if (requireType) {
            requires = requires.trim().replace(/(^\[|'|"|]$)/g, '');
            requires = requires.split(/\s*,\s*/);
            deps = deps.concat(requires);
        }
    }
    deps.forEach(function (v) {
        file.addRequire(v + '.js'); // 默认是 .js 结尾
    });
};