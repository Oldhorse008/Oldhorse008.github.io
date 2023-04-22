// 遍历全文的pre标签，将其设置为相对定位relative
[...document.getElementsByTagName("pre")].forEach(item => {
  item.style.position = "relative";
  // 创建一个复制按钮 document.createElement("button")，样式为绝对定位absolute到右上角【使用了子绝父相的定位】，点击按钮时将pre标签内code标签的innerText复制到剪贴板，同时按钮的innerHTML变为“复制成功”，1秒后恢复为“复制”
  let copyButton = document.createElement("button")
  copyButton.style.cssText = 'border-radius: 4px;position:absolute;right:10px;top:10px;cursor: pointer'
  copyButton.innerHTML = "复制";
  copyButton.onclick = function () {
    let copyData = item.firstChild.innerText
    copyToClipboard(copyData)
    copyButton.innerHTML = "复制成功";
    setTimeout(function () {
      copyButton.innerHTML = "复制";
    }, 1000);
  }
  // 将复制按钮添加到pre标签中 appendChild(copyButton)
  item.appendChild(copyButton)
});

// js 复制到剪贴板
function copyToClipboard(content) {
  if (window.clipboardData) {
    window.clipboardData.setData('text', content);
  } else {
    (function (content) {
      document.oncopy = function (e) {
        e.clipboardData.setData('text', content);
        e.preventDefault();
        document.oncopy = null;
      }
    })(content);
    document.execCommand('Copy');
  }
}