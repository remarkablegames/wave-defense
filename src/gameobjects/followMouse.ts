import { Sprite, Z } from '../constants'
import { addGunner } from '.'

export function addFollowMouse(data: { sprite: Sprite; scale: number }) {
  const followMouse = add([
    sprite(data.sprite),
    scale(data.scale),
    anchor('center'),
    pos(mousePos()),
    opacity(0.5),
    fakeMouse(),
    z(Z.UI),
  ])

  followMouse.onMouseRelease(() => {
    followMouse.destroy()
    setCursor('default')
    addGunner(followMouse.pos)
  })

  return followMouse
}
