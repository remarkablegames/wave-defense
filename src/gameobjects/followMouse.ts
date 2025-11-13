import { Sprite } from '../constants'

export function addFollowMouse() {
  const followMouse = add([
    sprite(Sprite.Gunner),
    anchor('center'),
    pos(),
    opacity(0.5),
    fakeMouse({ followMouse: true }),
  ])

  return followMouse
}
