import type { Comp } from 'kaplay'

export type Hint = ReturnType<typeof addHint>

export function addHint({
  comps = [],
  height,
  radius,
  size,
  txt,
  width,
}: {
  comps?: Comp[]
  height: number
  onClick?: () => void
  radius?: number
  size?: number
  txt: string
  width: number
}) {
  const hint = add([
    rect(width, height, { radius }),
    anchor('center'),
    color(BLACK),
    opacity(0.3),
    ...comps,
  ])

  hint.add([
    text(txt, { align: 'center', size, width }),
    anchor('center'),
    color(WHITE),
  ])

  return hint
}
