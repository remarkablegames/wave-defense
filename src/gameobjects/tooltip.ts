import type { AreaComp, GameObj } from 'kaplay'

export function addTooltip(options: {
  text: string
  width: number
  height: number
  parent: GameObj<AreaComp>
  padding?: number
}) {
  const padding = options.padding || 10

  let tooltip: GameObj | undefined

  options.parent.onHover(() => {
    tooltip = add([
      rect(options.width, options.height),
      color(BLACK),
      pos(mousePos()),
      opacity(0.5),
    ])

    tooltip.add([
      text(options.text, {
        size: 20,
        width: options.width - padding * 2,
      }),
      color(WHITE),
      pos(padding),
    ])
  })

  options.parent.onHoverUpdate(() => {
    if (tooltip?.exists()) {
      tooltip.pos = mousePos()
    }
  })

  options.parent.onHoverEnd(() => {
    if (tooltip?.exists()) {
      tooltip.destroy()
    }
  })

  return tooltip
}
