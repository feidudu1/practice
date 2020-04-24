function getjuejin () {
  var content = []
  var contentNode = document.getElementsByClassName('article-content')[0].childNodes
//   var contentNode = document.getElementsByClassName('article-content')[0].childNodes[0].childNodes
  contentNode.forEach(t => {
    const text = t.innerText
    const tagName = t.nodeName
    // const type = t.getAttribute('data-slate-type')
    if (tagName === 'H2') { // 标题1
      content.push('')
      content.push('#' + text)
      content.push('---')
    } else if (tagName === 'H4') { // 标题2
      content.push('')
      content.push('##' + text)
    } else if (tagName === 'PRE') { // 是代码
      t.removeChild(t.lastChild)
      content.push('```')
      content.push(text)
      content.push('```')
    } else if (tagName === 'DIV' || tagName === 'FIGURE') { // 图片
      const child = t.firstChild
      if (child && child.nodeName === 'IMG') {
        content.push('![](' + child.getAttribute('src') + ')');
      } else {
        content.push(t.innerText);
      }
    } else if (tagName === 'OL') {
      content.push('')
      const list = t.childNodes
      list.forEach((tt, ii) => {
        content.push('- ' + tt.innerText);
      })
      content.push('')
    } else {
      content.push(t.innerText);
    }
  })
  var markdown = content.join('\n')
  console.log(markdown);
}
