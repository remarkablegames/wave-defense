import { Sprite } from '../constants'

export function addFollowMouse() {
  const followMouse = add([
    sprite(Sprite.Gunner),
    scale(0.5),
    anchor('center'),
    pos(),
    opacity(0.5),
    fakeMouse({ followMouse: true }),
  ])

  return followMouse
}
