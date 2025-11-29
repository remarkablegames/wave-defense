import { Tag } from '../constants'
import { state } from '../data'

const hints = [
  // 0
  {
    text: 'Drag and drop the hero (bottom) to the island (center) and press "Start"',
    height: 80,
  },

  // 1
  {
    text: 'Every hero has a unique attack',
    height: 50,
  },

  // 2
  {
    text: 'Look for good strategies to defeat the enemies',
    height: 60,
  },
]

const width = 400

export function addHint() {
  const hint = hints[state.level]

  if (!hint) {
    return
  }

  const box = add([
    rect(width, hint.height),
    anchor('center'),
    color(BLACK),
    opacity(0.3),
    pos(215, 175),
    Tag.Hint,
  ])

  box.add([
    text(hint.text, {
      align: 'center',
      size: 20,
      width,
    }),
    anchor('center'),
    color(WHITE),
  ])
}

export function getHint() {
  return get(Tag.Hint)[0]
}
