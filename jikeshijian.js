
  var getjikeshijian = function () {
    var content = []
    var contentNode = document.getElementsByClassName('_2c4hPkl9')[0].firstChild.childNodes
    contentNode.forEach(t => {
      const text = t.innerText
      const type = t.getAttribute('data-slate-type')
      if (type === 'heading') { // 标题
        content.push('')
        content.push('#' + text)
        content.push('---')
      } else if (type === 'pre') { // 是代码
        content.push('```')
        content.push(text)
        content.push('```')
      } else if (type === 'image') { // 图片
        content.push('![](' + t.childNodes[0].getAttribute('src') + ')');
      } else if (type === 'list') {
        content.push('')
        const list = t.childNodes
        list.forEach((tt, ii) => {
          content.push('- ' + tt.innerText);
        })
        content.push('')
      } else if (type === 'paragraph') {
        content.push(t.innerText);
      }
    })
    var markdown = content.join('\n')
    console.log(markdown);
  }
