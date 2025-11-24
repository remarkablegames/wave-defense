import type { Hero as Data } from '../data'
import { addAttack, type Droppable } from '.'

export type Hero = ReturnType<typeof addHero>

export function addHero(data: Data, droppable: Droppable) {
  droppable.removeAll('*')

  const hero = droppable.add([
    sprite(data.sprite, {
      width: data.width,
      height: data.height,
    }),
    pos(),
    anchor('center'),
    timer(),
  ])

  hero.wait(data.attack.timer.wait, () => {
    hero.loop(data.attack.timer.interval, () => addAttack(hero))
  })

  return hero
}
