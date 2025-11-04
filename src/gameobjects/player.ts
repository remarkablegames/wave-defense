import { Sprite, Tag } from '../constants'

export function addPlayer(x = center().x, y = center().y) {
  const player = add([
    sprite(Sprite.Bean),
    pos(x, y),
    rotate(0),
    anchor('center'),
    Tag.Player,
  ])

  player.onUpdate(() => {
    player.angle += 120 * dt()
  })

  return player
}
