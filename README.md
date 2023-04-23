# 欢迎来到柠檬鲸的QQ空间

# 支持
该博客主题来自：[HUX](<https://github.com/Huxpro/huxpro.github.io">)

# 修改

1. 引入[MathJax]((https://www.mathjax.org/))，使网站可以支持LaTeX公式的渲染
    ```
    <!-- 引入MathJax的脚本 -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js"></script>
    ```
2. 更改`highlighter`由`rouge`为`highlight.js`

    (自带的高亮无法高亮C语言代码，且会将'$''$'包括的LaTeX公式高亮使其无法正常渲染。)

    (1) 引入[highlight.js]((https://github.com/highlightjs/highlight.js))
    ```
    <!-- 引入highlight.js库 -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.7.0/styles/atom-one-dark.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    ```

    (2) 修改了`_config.yml`中的高亮（highlighter）为none，将高亮器由`rouge`改为`highlight.js`<br/>
    详细使用方法可以参见[highlight.js文档]((http://highlight.cndoc.wiki/doc))<br/>
    
3. 修改了头文件，使[font-awesome](https://fontawesome.com)由`4.3.0`改为`6.0.0-beta2`
    ```
    <!-- Custom Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" rel="stylesheet"
            type="text/css">
    ```
    原先的awesome4.3.0不支持哔哩哔哩、知乎等网站的图标引用。<br/>

4. 修改了`sns-links.html`

    (1) 在`sns-links.html`中添加了哔哩哔的图标，更改知乎图标，由原来的“知”更改为官方图标。
    (2) 在_config.yml中增加了`bilibili_username`
    使网站可以显示哔哩哔哩的link。<br/>

5. 修改了`_config.yml`中`kramdown`

    增加了`gfm_emojis: true`，使其可以渲染`emoji`表情，但是只可以粘贴使用<br/>

6. 修改了`_config.yml`中kramdown的`syntax_highlighter_opts`
    ```
    block:
        line_numbers: false
    ```
    否则与`highlight.js`冲突，行号混乱<br/>

7. 在代码块旁边增加了`copy`按钮

    (1) 增加了[copy-button.js](https://github.com/arronhunt/highlightjs-copy);
    (2) 在`head.html`中引入了：
    ```
    <!-- 添加code复制按钮 -->
    <link rel="stylesheet" href="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.css" />
    <script src="https://unpkg.com/highlightjs-copy/dist/highlightjs-copy.min.js"></script>
    ```
    (3) 在`post.html`中引入了：
    ```    
    <!-- 加入复制按钮 -->
    <script src="/js/copy-button.js"></script>
    ```