import './index.css'
import ScratchCanvas from '../../src'

window.onload = function () {
  const pureMaskScratchCanvas = new ScratchCanvas(document.querySelector('.pure-mask-scratch-canvas-container'), {
    mask: '#999',
    onScratch (percent) {
      document.querySelector('.pure-mask-scratch-canvas-container .percent-tips').textContent = `已经刮开了${percent}%`
    }
  })
  pureMaskScratchCanvas.init()

  const imageMaskScratchCanvas = new ScratchCanvas(document.querySelector('.image-mask-scratch-canvas-container'), {
    mask: require('./bg.png'),
    pureMask: false,
    onScratch (percent) {
      document.querySelector('.image-mask-scratch-canvas-container .percent-tips').textContent = `已经刮开了${percent}%`
    },
    throttleWait: 0
  })
  imageMaskScratchCanvas.init()

  const bgScratchCanvas = new ScratchCanvas(document.querySelector('.bg-scratch-canvas-container'), {
    mask: require('./mask.png'),
    pureMask: false,
    bg: require('./bg.png'),
    brushSize: 80,
    brushPress: 0.025,
    throttleWait: 0
  })
  bgScratchCanvas.init()

  document.querySelectorAll('.btn-toggle-code').forEach(btn => {
    btn.addEventListener('click', function () {
      const demoCode = this.parentNode.querySelector('.demo-code')
      if (demoCode.style.height === '0px' || !demoCode.style.height) {
        demoCode.style.height = `${demoCode.querySelector('.code-wrapper').getBoundingClientRect().height + 40}px`
        this.textContent = '隐藏代码'
      } else {
        demoCode.style.height = 0
        this.textContent = '显示代码'
      }
    })
  })
}
