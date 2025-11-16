import { Scene } from '../constants'
import { enemies } from '../data'
import { addCollision } from '../events'
import { addBackground, addBase, addCharacters, addEnemy } from '../gameobjects'
import { generateEnemyPos } from '../helpers'

scene(Scene.Game, () => {
  addBackground()
  addBase()

  add([text('Wave: 1', { width: width() / 2 }), pos(12, 12)])

  const time = 5
  const maxLoops = 5

  loop(
    time,
    () => addEnemy({ ...enemies[0], ...generateEnemyPos() }),
    maxLoops,
    true,
  )

  addCollision()

  addCharacters()
})
