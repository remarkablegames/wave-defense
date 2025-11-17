import { Tag } from '../constants'
import { addSplash, type Base, type Enemy } from '../gameobjects'

export function addCollision() {
  onCollide(
    Tag.Base,
    Tag.Enemy,
    // @ts-expect-error Types of parameters are incompatible.
    (base: Base, enemy: Enemy) => {
      if (base.dead || enemy.dead) {
        return
      }

      base.hp -= enemy.damage
      enemy.hp = 0
    },
  )

  onCollide(
    Tag.Bullet,
    Tag.Enemy,
    // @ts-expect-error Types of parameters are incompatible.
    (bullet: Bullet, enemy: Enemy) => {
      if (enemy.dead) {
        return
      }

      addSplash(bullet.pos, bullet.direction)
      bullet.destroy()
      enemy.hp -= bullet.damage
    },
  )
}
