import { Sound, Sprite, Z } from '../constants'
import type { Hero } from '../data'
import { addDraggable } from '.'

const SHORE_OFFSET_Y = 150
const HERO_OFFSET_X = 35
const HERO_OFFSET_Y = 15

export function addCards(heroes: Hero[]) {
  const shore = add([
    sprite(Sprite.Shore, { width: width() }),
    pos(0, height() - SHORE_OFFSET_Y),
    z(Z.UI),
  ])

  heroes.forEach((data, index) => {
    const hero = shore.add([
      sprite(data.sprite, {
        width: 115,
      }),
      pos(index * (data.width + HERO_OFFSET_X) + HERO_OFFSET_X, HERO_OFFSET_Y),
      area(),
      scale(),
      color(),
      z(Z.UI),
    ])

    hero.onHover(() => {
      setCursor('pointer')
      hero.color = YELLOW
      hero.scaleTo(1.03)
      play(Sound.Hover, { volume: 0.5 })
    })

    hero.onHoverEnd(() => {
      setCursor('default')
      hero.color = WHITE
      hero.scaleTo(1)
    })

    hero.onClick(() => {
      setCursor('grab')
      play(Sound.Drag)
      addDraggable(data)
    })
  })
}
