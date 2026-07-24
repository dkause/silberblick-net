import * as PIXI from 'pixi.js'

class MovingCells {
  constructor(container) {
    this.container = container
    this.cells = []
    this.counter = 0
    this.mouseX = null
    this.mouseY = null
    this._lastW = 0
    this._lastH = 0

    this._lastMoveTime = 0
    this._idleTimeout = 500
    this._onMouseMove = (e) => this.onMouseMove(e)
    this.init().catch((err) => console.error('MovingCells init failed:', err))
  }

  async init() {
    this.app = new PIXI.Application()
    await this.app.init({
      width: this.container.clientWidth,
      height: this.container.clientHeight,
      backgroundColor: 0x000000,
    })
    this.container.appendChild(this.app.canvas)
    window.addEventListener('mousemove', this._onMouseMove)
    await this.loadImage()
  }
  destroy() {
    window.removeEventListener('mousemove', this._onMouseMove)
    this.app?.ticker.stop()
    this.app?.destroy(true, { children: true, texture: true })
  }

  async loadImage() {
    const src = this.container.dataset.src
    if (!src) throw new Error('Kein data-src an #wobble gefunden')
    this.texture = await PIXI.Assets.load(src)
    this.makeGrid()
  }

  makeGrid() {
    this.cols = 14
    this.rows = 14
    this.cw = this.texture.width / this.cols
    this.ch = this.texture.height / this.rows
    this.grid = new PIXI.Container()

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const frameX = c * this.cw
        const frameY = r * this.ch

        const tex = new PIXI.Texture({
          source: this.texture.source,
          frame: new PIXI.Rectangle(frameX, frameY, this.cw, this.ch),
        })
        tex.dynamic = true
        const sprite = new PIXI.Sprite(tex)
        sprite.x = frameX
        sprite.y = frameY

        this.cells.push({
          frameX,
          frameY,
          width: this.cw,
          height: this.ch,
          phase: Math.random() * Math.PI * 2,
          lookX: 0,
          lookY: 0,
          frameRect: tex.frame,
          tex,
        })
        this.grid.addChild(sprite)
      }
    }

    const gridW = this.cols * this.cw
    const gridH = this.rows * this.ch
    const vpW = this.container.clientWidth
    const vpH = this.container.clientHeight
    const scale = Math.min(vpW / gridW, vpH / gridH)

    this.app.renderer.resize(
      Math.round(gridW * scale),
      Math.round(gridH * scale),
    )
    this.grid.scale.set(scale)
    this._lastW = this.container.clientWidth
    this._lastH = this.container.clientHeight
    this.app.canvas.style.display = 'block'

    this.stage = this.app.stage
    this.stage.addChild(this.grid)
    this.app.ticker.add(() => this.animate(), this)
  }

  onMouseMove(e) {
    const rect = this.app.canvas.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * this.app.renderer.width
    const my = ((e.clientY - rect.top) / rect.height) * this.app.renderer.height
    const s = this.grid.scale.x
    this.mouseX = mx / s
    this.mouseY = my / s
    this._lastMoveTime = performance.now()
  }

  resize() {
    this._lastW = this.container.clientWidth
    this._lastH = this.container.clientHeight
    const gridW = this.cols * this.cw
    const gridH = this.rows * this.ch
    const scale = Math.min(this._lastW / gridW, this._lastH / gridH)
    this.app.renderer.resize(
      Math.round(gridW * scale),
      Math.round(gridH * scale),
    )
    this.grid.scale.set(scale)
  }

  animate() {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    if (w !== this._lastW || h !== this._lastH) this.resize()
    if (
      this.mouseX !== null &&
      performance.now() - this._lastMoveTime > this._idleTimeout
    ) {
      this.mouseX = null
      this.mouseY = null
    }
    this.counter++
    for (const cell of this.cells) {
      const wobbleX = Math.sin(this.counter * 0.03 + cell.phase) * this.cw * 0.2
      const wobbleY = Math.sin(this.counter * 0.03 + cell.phase) * this.ch * 0.2

      if (this.mouseX !== null) {
        const cx = cell.frameX + cell.width / 2
        const cy = cell.frameY + cell.height / 2
        const ox = ((this.mouseX - cx) / (this.cols * this.cw)) * 2
        const oy = ((this.mouseY - cy) / (this.rows * this.ch)) * 2
        const tx = Math.max(-1, Math.min(1, ox)) * this.cw * 0.15
        const ty = Math.max(-1, Math.min(1, oy)) * this.ch * 0.15
        cell.lookX += (tx - cell.lookX) * 0.08
        cell.lookY += (ty - cell.lookY) * 0.08
      } else {
        cell.lookX *= 0.92
        cell.lookY *= 0.92
      }

      cell.frameRect.x = cell.frameX + wobbleX + cell.lookX
      cell.frameRect.y = cell.frameY + wobbleY + cell.lookY
      cell.tex.updateUvs()
      cell.tex.emit('update', cell.tex)
    }
  }
}

export function initMovingCells(container) {
  return new MovingCells(container)
}
