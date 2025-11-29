import type { AreaComp, GameObj } from 'kaplay'

export function addTooltip(options: {
  text: string
  width: number
  height: number
  parent: GameObj<AreaComp>
  padding?: number
}) {
  const padding = options.padding || 10

  const tooltip = add([
    rect(options.width, options.height),
    color(BLACK),
    pos(),
    opacity(0),
  ])

  const tooltipText = tooltip.add([
    text(options.text, {
      size: 20,
      width: options.width - padding * 2,
    }),
    color(WHITE),
    pos(padding),
    opacity(0),
  ])

  options.parent.onHoverUpdate(() => {
    tooltip.pos = mousePos()
    tooltip.opacity = 0.5
    tooltipText.opacity = 1
  })

  options.parent.onHoverEnd(() => {
    tooltip.opacity = 0
    tooltipText.opacity = 0
  })

  return tooltip
}
