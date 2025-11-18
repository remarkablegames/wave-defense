import type { Hero as Data } from '../data'
import { addAttack, type Droppable } from '.'

export type Hero = ReturnType<typeof addHero>

export function addHero(data: Data, droppable: Droppable) {
  droppable.removeAll('*')

  const hero = droppable.add([
    sprite(data.hero.sprite, {
      width: data.hero.width,
      height: data.hero.height,
    }),
    pos(droppable.pos),
    anchor('center'),
    timer(),
  ])

  hero.wait(data.timer.wait, () => {
    hero.loop(data.timer.interval, () => addAttack(hero))
  })

  return hero
}
