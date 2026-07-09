import * as PIXI from 'pixi.js'

class Cell {
  constructor(col, row, cellW, cellH) {
    this.col = col
    this.row = row
    this.width = cellW
    this.height = cellH
    this.frameX = col * cellW
    this.frameY = row * cellH
    this.displayX = col * cellW
    this.displayY = row * cellH
  }
}

class MovingCells {
  constructor(container) {
    this.container = container
    this.cells = []
    this.counter = 0
    this.mouseX = null
    this.mouseY = null
    this._lastW = 0
    this._lastH = 0
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
    window.addEventListener('mousemove', (e) => this.onMouseMove(e))
    await this.loadImage()
  }

  async loadImage() {
    const src = this.container.dataset.src
    if (!src) throw new Error("Kein data-src an #wobble gefunden")
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
        const cell = new Cell(c, r, this.cw, this.ch)
        const frame = new PIXI.Rectangle(
          cell.frameX, cell.frameY,
          cell.width, cell.height,
        )
        const tex = new PIXI.Texture({
          source: this.texture.source,
          frame,
        })
        const sprite = new PIXI.Sprite(tex)
        sprite.x = cell.displayX
        sprite.y = cell.displayY
        cell.phase = Math.random() * Math.PI * 2
        cell.lookX = 0
        cell.lookY = 0
        cell.sprite = sprite
        this.cells.push(cell)
        this.grid.addChild(sprite)
      }
    }

    const gridW = this.cols * this.cw
    const gridH = this.rows * this.ch
    const vpW = this.container.clientWidth
    const vpH = this.container.clientHeight
    const scale = Math.min(vpW / gridW, vpH / gridH)

    this.app.renderer.resize(Math.round(gridW * scale), Math.round(gridH * scale))
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
    const mx = e.clientX - rect.left
    const my = e.clientY - rect.top
    const s = this.grid.scale.x
    this.mouseX = mx / s
    this.mouseY = my / s
  }

  resize() {
    this._lastW = this.container.clientWidth
    this._lastH = this.container.clientHeight
    const gridW = this.cols * this.cw
    const gridH = this.rows * this.ch
    const scale = Math.min(this._lastW / gridW, this._lastH / gridH)
    this.app.renderer.resize(Math.round(gridW * scale), Math.round(gridH * scale))
    this.grid.scale.set(scale)
  }

  animate() {
    const w = this.container.clientWidth
    const h = this.container.clientHeight
    if (w !== this._lastW || h !== this._lastH) this.resize()
    this.counter++
    for (const cell of this.cells) {
      const wobbleX = Math.sin(this.counter * 0.03 + cell.phase) * this.cw * 0.1
      const wobbleY = Math.cos(this.counter * 0.03 + cell.phase) * this.ch * 0.1

      if (this.mouseX !== null) {
        const cx = cell.displayX + cell.width / 2
        const cy = cell.displayY + cell.height / 2
        const ox = (this.mouseX - cx) / this.cw * 0.15
        const oy = (this.mouseY - cy) / this.ch * 0.15
        const tx = Math.max(-1, Math.min(1, ox)) * this.cw * 0.15
        const ty = Math.max(-1, Math.min(1, oy)) * this.ch * 0.15
        cell.lookX += (tx - cell.lookX) * 0.08
        cell.lookY += (ty - cell.lookY) * 0.08
      } else {
        cell.lookX *= 0.92
        cell.lookY *= 0.92
      }

      const dx = wobbleX + cell.lookX
      const dy = wobbleY + cell.lookY
      cell.sprite.texture = new PIXI.Texture({
        source: this.texture.source,
        frame: new PIXI.Rectangle(
          cell.frameX + dx,
          cell.frameY + dy,
          cell.width,
          cell.height,
        ),
      })
    }
  }
}

export function initMovingCells(container) {
  return new MovingCells(container)
}
