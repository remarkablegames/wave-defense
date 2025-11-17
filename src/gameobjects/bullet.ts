import { Tag } from '../constants'
import { getClosestEnemy } from '../helpers'
import type { Hero } from '.'

const DAMAGE = 2
const SIZE = 5
const SPEED = 300

export type Bullet = ReturnType<typeof addBullet>

export function addBullet(hero: Hero) {
  const enemy = getClosestEnemy(hero)

  if (!enemy) {
    return
  }

  const direction = enemy.pos.sub(hero.pos).unit()

  const bullet = add([
    pos(hero.pos),
    move(direction, SPEED),
    circle(SIZE),
    area(),
    offscreen({ destroy: true }),
    anchor('center'),
    color(BLACK),
    Tag.Bullet,
    {
      damage: DAMAGE,
      direction,
    },
  ])

  return bullet
}
