import { Z } from '../constants'
import { state } from '../data'

export function addLevelInfo() {
  const levelInfo = add([
    text(`Wave: ${state.level + 1}`),
    pos(12, 12),
    z(Z.UI),
  ])

  return levelInfo
}
