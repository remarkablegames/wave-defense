import { Music, Scene, Sound, Sprite } from '../constants'

scene(Scene.Preload, () => {
  Object.values(Sprite).forEach((sprite) => {
    loadSprite(sprite, `sprites/${sprite}.png`)
  })

  Object.values(Sound).forEach((sound) => {
    loadSound(sound, `sounds/${sound}.mp3`)
  })

  Object.values(Music).forEach((music) => {
    loadMusic(music, `music/${music}.mp3`)
  })

  go(Scene.Menu)
})
