import { Scene } from '../constants'
import { state } from '../data'

scene(Scene.Win, () => {
  const box = add([pos(center()), anchor('center')])

  const heading = box.add([
    text('You won!', { size: 72 }),
    anchor('center'),
    pos(0, -100),
  ])

  const button = heading.add([
    rect(200, 60, { radius: 8 }),
    area(),
    color(BLACK),
    anchor('center'),
    pos(0, 120),
  ])

  button.add([text('Restart', { size: 36 }), anchor('center')])

  button.onHover(() => {
    button.color = BLUE
    setCursor('pointer')
  })

  button.onHoverEnd(() => {
    button.color = BLACK
    setCursor('default')
  })

  button.onClick(() => {
    state.level = 0
    go(Scene.Game)
  })
})
