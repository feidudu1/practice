const modal = new Modal({
  title: '提示',
  template: `<div>提示内容</div>`,
  buttons: [{
    text: '提交',
    click() {
      console.log('自定义确定操作')
      this.close()
    }
  }, {
    text: '取消',
    click() {
      console.log('自定义取消操作')
      this.close()
    }
  }]
})
modal.on('open', () => {
  console.log('打开弹出框')
})
modal.on('open', () => {
  console.log('打开弹出框无效')
})
modal.on('close', () => {
  console.log('关闭弹出框')
})

setTimeout(() => {
  modal.off()
}, 5000)

document.addEventListener('dblclick', () => {
  modal.open()
})
