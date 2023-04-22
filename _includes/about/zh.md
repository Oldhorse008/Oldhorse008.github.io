## 你是一个很棒的人哦，祝你天天开心！

# LemonWhale
你好，我是一个科研小学生，我在这里记录和分享我的学习，加油鸭！

如果你看到了这个页面，希望我的学习经验会对你有所帮助。祝你身体健康，学业有成，工作顺利！

![起风了](img/../../../img/inabout.png)

# 支持
该博客主题来自：[HUX](<https://github.com/Huxpro/huxpro.github.io">)

# 修改
1. 添加了头文件，使网站可以支持LaTeX公式的渲染

    ```
    <!-- 引入MathJax的脚本 -->
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-chtml.js"></script>
    ```

2. 添加了头文件，引入了highlight.js

    ```
    <!-- 引入highlight.js库 -->
    <link rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@highlightjs/cdn-assets@11.7.0/styles/atom-one-dark.min.css">
    <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
    <script>hljs.highlightAll();</script>
    ```
    详细使用方法可以参见highlight.js文档：

    http://highlight.cndoc.wiki/doc（中文）

    https://github.com/highlightjs/highlight.js（github源文件）
<br/>
3. 修改了_config.yml中的高亮（highlighter）为none，将高亮器由rouge改为highlight.js

    此更改将自带的高亮无法高亮C语言代码，且会将'$''$'包括的LaTeX公式高亮使其无法正常渲染。
<br/>
4. 修改了头文件，使font-awesome由4.3.0改为6.0.0-beta2
    ```
    <!-- Custom Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" rel="stylesheet"
            type="text/css">
    ```
    原先的awesome4.3.0不支持哔哩哔哩、知乎等网站的图标引用。

5. 修改了sns-links.html

    增加了哔哩哔哩的link，更改知乎图标，由原来的“知”更改为官方图标。

6. 在_config.yml中增加了bilibili_username

    使网站可以显示哔哩哔哩的link。

7. 修改了_config.yml中kramdown

    增加了gfm_emojis: true，使其可以渲染emoji表情，但是只可以粘贴使用

8. 修改了_config.yml中kramdown的 syntax_highlighter_opts

    block:line_numbers: false   
    否则与highlight.js冲突，行号混乱