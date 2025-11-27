import { Sound, Sprite, Tag } from '../constants'
import { addSplash, type Attack, type Bases, type Enemy } from '../gameobjects'

export function addCollision() {
  onCollide(
    Tag.Base,
    Tag.Enemy,
    // @ts-expect-error Types of parameters are incompatible.
    (base: Bases[0], enemy: Enemy) => {
      if (base.dead || enemy.dead) {
        return
      }

      play(Sound.Hit)
      base.hp -= enemy.damage
      enemy.hp = 0
    },
  )

  onCollide(
    Tag.Attack,
    Tag.Enemy,
    // @ts-expect-error Types of parameters are incompatible.
    (attack: Attack, enemy: Enemy) => {
      if (!attack || enemy.dead) {
        return
      }

      addSplash(attack.pos, attack.direction)
      enemy.hp -= attack.damage
      attack.hp -= 1

      switch (attack.sprite) {
        case Sprite.Arrow:
          play(Sound.Arrow, { volume: 0.5 })
          break

        case Sprite.Beachball:
          play(Sound.Bounce, { detune: randi(0, 12) * 100 })
          attack.direction = Vec2.fromAngle(attack.pos.angle(enemy.pos))
          attack.use(move(attack.direction, attack.speed))
          break

        default:
          play(Sound.Hit)
          break
      }
    },
  )

  onCollide(
    Tag.Bounce,
    Tag.Bounce,
    // @ts-expect-error Types of parameters are incompatible.
    (attack1: Attack, attack2: Attack) => {
      if (!attack1 || !attack2) {
        return
      }

      play(Sound.Bounce, { detune: randi(0, 12) * 100 })

      attack1.direction = Vec2.fromAngle(attack1.pos.angle(attack2.pos))
      attack2.direction = Vec2.fromAngle(attack2.pos.angle(attack1.pos))

      attack1.use(move(attack1.direction, attack1.speed))
      attack2.use(move(attack2.direction, attack2.speed))
    },
  )
}
