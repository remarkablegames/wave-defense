import { Scene } from '../constants'
import { state } from '../data'
import { addButton } from '../gameobjects'

const OFFSET_Y = 70

scene(Scene.Win, () => {
  const { x, y } = center()

  add([text('You won!', { size: 72 }), anchor('center'), pos(x, y - OFFSET_Y)])

  const restartButton = addButton({
    label: 'Restart',
    size: 36,
    width: 200,
    height: 60,
    comps: [pos(x, y + OFFSET_Y)],
  })

  restartButton.onClick(() => {
    setCursor('default')
    state.level = 0
    go(Scene.Game)
  })
})
