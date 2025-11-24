import { Scene, Tag } from '../constants'
import { type Base, state } from '../data'
import { addDroppable, addHealth } from '.'

export type Bases = ReturnType<typeof addBases>

export function addBases(bases: Base[]) {
  return bases.map((data) => {
    const base = add([
      sprite(data.sprite, {
        width: data.width,
        height: data.height,
      }),
      pos(data.pos),
      anchor('center'),
      area({ shape: data.shape }),
      body({ isStatic: true }),
      health(data.health, data.health),
      Tag.Base,
    ])

    addHealth(base)
    addDroppable(base, vec2(0, -10))

    base.onDeath(() => {
      base.destroy()
      addKaboom(base.pos)
      state.tempData.basesTotal -= 1

      if (!state.tempData.basesTotal) {
        wait(1, () => go(Scene.Lose))
      }
    })

    return base
  })
}

export function getBases() {
  const bases = get(Tag.Base) as Bases
  return bases.filter((base) => !base.dead)
}
