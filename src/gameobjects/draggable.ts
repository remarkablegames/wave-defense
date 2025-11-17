import { Z } from '../constants'
import type { Hero as Data } from '../data'
import { addHero } from '.'

export function addDraggable(data: Data) {
  const draggable = add([
    sprite(data.sprite, { width: data.width, height: data.height }),
    anchor('center'),
    pos(mousePos()),
    opacity(0.5),
    fakeMouse(),
    z(Z.UI),
  ])

  draggable.onMouseRelease(() => {
    draggable.destroy()
    setCursor('default')
    addHero(data, draggable.pos)
  })

  return draggable
}
