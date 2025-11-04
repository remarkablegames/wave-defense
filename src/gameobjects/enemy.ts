import { Sprite, Tag } from '../constants'
import { addHealth } from '.'

export function addEnemy(x: number, y: number) {
  const enemy = add([
    sprite(Sprite.Ghosty),
    pos(x, y),
    anchor('center'),
    health(10, 10),
    Tag.Enemy,
  ])

  addHealth(enemy)

  return enemy
}
