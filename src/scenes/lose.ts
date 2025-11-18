import { Scene } from '../constants'
import { state } from '../data'

scene(Scene.Lose, () => {
  const box = add([pos(center()), anchor('center')])

  const heading = box.add([
    text('You lost', { size: 72 }),
    anchor('center'),
    pos(0, -100),
  ])

  const actions = [
    {
      text: 'Continue',
      callback: () => go(Scene.Game),
    },
    {
      text: 'Restart',
      callback: () => {
        state.level = 0
        go(Scene.Game)
      },
    },
  ]

  actions.forEach((action, index) => {
    const button = heading.add([
      rect(200, 60, { radius: 8 }),
      area(),
      color(BLACK),
      anchor('center'),
      pos(0, 40 + 80 * (index + 1)),
    ])

    button.add([text(action.text, { size: 36 }), anchor('center')])

    button.onHover(() => {
      button.color = BLUE
      setCursor('pointer')
    })

    button.onHoverEnd(() => {
      button.color = BLACK
      setCursor('default')
    })

    button.onClick(action.callback)
  })
})
