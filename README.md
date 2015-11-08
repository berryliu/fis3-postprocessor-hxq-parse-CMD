# fis3-postprocessor-hxq-parse-CMD

好学区编译解析 CMD 并加入静态依赖，fis3 组件

# 使用方式

在 `fis-config.js` 文件里配置

```
fis.match('/**/*.js', {
    postprocessor: [
        fis.plugin('hxq-parse-cmd')
    ]
});
```