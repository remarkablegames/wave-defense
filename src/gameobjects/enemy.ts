import { Tag } from '../constants'
import type { Enemy as Data } from '../data'
import { addHealth, getBase } from '.'

export type Enemy = ReturnType<typeof addEnemy>

export function addEnemy(data: Data & { x: number; y: number }) {
  const damage = randi(1, 10)
  const speed = randi(50, 100)

  const enemy = add([
    sprite(data.sprite, { width: data.width, height: data.height }),
    pos(data.x, data.y),
    anchor('center'),
    area({ shape: data.shape }),
    body(),
    health(10, 10),
    Tag.Enemy,
    { damage, speed },
  ])

  addHealth(enemy)

  enemy.onUpdate(() => {
    const base = getBase()

    if (!base) {
      return
    }

    const direction = base.pos.sub(enemy.pos).unit()
    enemy.move(direction.scale(enemy.speed))
  })

  enemy.onDeath(() => {
    enemy.destroy()
    addKaboom(enemy.pos)
  })

  return enemy
}
