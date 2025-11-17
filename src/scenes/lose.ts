import { Scene } from '../constants'

scene(Scene.Lose, () => {
  add([text('You lost...', { size: 36 }), pos(center()), anchor('center')])
})
