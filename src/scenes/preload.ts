import { Scene, Sprite } from '../constants'

scene(Scene.Preload, () => {
  Object.values(Sprite).forEach((value) => {
    loadSprite(value, `sprites/${value}.png`)
  })

  go(Scene.Game)
})
