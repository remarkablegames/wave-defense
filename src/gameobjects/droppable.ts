import type { GameObj, Vec2 } from 'kaplay'

import { Tag } from '../constants'
import { getBases } from '.'

export type Droppable = ReturnType<typeof addDroppable>

export function addDroppable(base: GameObj, position: Vec2) {
  const droppable = base.add([
    rect(50, 50),
    outline(3),
    color(WHITE),
    opacity(0.5),
    pos(position),
    anchor('center'),
    area(),
    Tag.Droppable,
  ])

  return droppable
}

export function getDroppables() {
  const bases = getBases()
  const droppables = bases.map(
    (base) => base.get(Tag.Droppable)[0] as Droppable,
  )
  return droppables.filter((droppable) => droppable.exists())
}
