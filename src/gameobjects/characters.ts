import { Z } from '../constants'
import { characters } from '../data'
import { addFollowMouse } from '.'

const HEIGHT = 150

export function addCharacters() {
  const background = add([
    rect(width(), HEIGHT),
    pos(0, height() - HEIGHT),
    color(0, 0, 0),
    opacity(0.7),
    z(Z.UI),
  ])

  characters.forEach((data, index) => {
    const character = background.add([
      sprite(data.sprite),
      scale(data.scale),
      pos(index * 10, 10),
      area(),
      z(Z.UI),
    ])

    character.onClick(() => {
      setCursor('grab')
      addFollowMouse(data)
    })
  })
}
