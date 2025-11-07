import { Scene } from '../constants'
import { addBase, addEnemy } from '../gameobjects'

scene(Scene.Game, () => {
  addBase()

  add([text('Wave: 1', { width: width() / 2 }), pos(12, 12)])

  for (let i = 0; i < 3; i++) {
    const x = rand(0, width())
    const y = rand(0, height())
    addEnemy(x, y)
  }
})
