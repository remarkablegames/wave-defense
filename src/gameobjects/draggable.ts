import { Tag, Z } from '../constants'
import type { Hero } from '../data'
import { addHero, getDroppable } from '.'

export function addDraggable(hero: Hero) {
  const draggable = add([
    sprite(hero.sprite, {
      width: hero.width,
      height: hero.height,
    }),
    color(RED),
    opacity(0.5),
    anchor('center'),
    pos(mousePos()),
    area(),
    fakeMouse(),
    z(Z.UI),
    Tag.Draggable,
  ])

  draggable.onCollide(Tag.Droppable, () => {
    draggable.color = GREEN
  })

  draggable.onCollideEnd(Tag.Droppable, () => {
    draggable.color = RED
  })

  draggable.onMouseRelease(() => {
    draggable.destroy()
    setCursor('default')
    const droppable = getDroppable()

    if (droppable && draggable.isColliding(droppable)) {
      addHero(hero, droppable)
    }
  })

  return draggable
}
