import { Scene, Tag } from '../constants'
import { type Base, state } from '../data'
import { addDroppable, addHealth, addTooltip, getRoot } from '.'

export type Bases = ReturnType<typeof addBases>

export function addBases(bases: Base[]) {
  const root = getRoot()

  return bases.map((data) => {
    const { multiplier } = data

    const base = root.add([
      sprite(data.sprite, {
        width: data.width,
        height: data.height,
      }),
      pos(data.pos),
      anchor('center'),
      area({ shape: data.shape }),
      body({ isStatic: true }),
      health(data.health),
      Tag.Base,
      {
        multiplier,
      },
    ])

    addHealth(base)
    addDroppable(base, data.droppable)
    addTooltip({
      text: `Cooldown: ×${multiplier.cooldown.toFixed(1)}
Damage: ×${multiplier.damage.toFixed(1)}
Health: ×${multiplier.health.toFixed(1)}
Lifespan: ×${multiplier.lifespan.toFixed(1)}
Scale: ×${multiplier.scale.toFixed(1)}
Speed: ×${multiplier.speed.toFixed(1)}`,
      width: 195,
      height: 140,
      parent: base,
    })

    base.onDeath(() => {
      base.destroy()
      addKaboom(base.pos)
      state.temp.basesTotal -= 1

      if (!state.temp.basesTotal) {
        wait(1, () => go(Scene.Lose))
      }
    })

    return base
  })
}

export function getBases() {
  const root = getRoot()
  const bases = root.get(Tag.Base) as Bases

  return bases.filter((base) => !base.dead)
}

export function getRandomBase() {
  const bases = getBases()

  if (!bases.length) {
    return
  }

  return bases[randi(bases.length)]
}
