import type { Vec2 } from 'kaplay'

import type { Hero as Data } from '../data'

export type Hero = ReturnType<typeof addHero>

export function addHero(data: Data, position: Vec2) {
  const hero = add([
    sprite(data.sprite, { width: data.width, height: data.height }),
    pos(position),
    anchor('center'),
    timer(),
  ])

  hero.loop(data.loop.time, () => data.loop.action(hero))

  return hero
}
