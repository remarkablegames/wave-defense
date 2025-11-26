import './game'
import './lose'
import './menu'
import './preload'
import './win'

import { Scene } from '../constants'

export function start() {
  go(Scene.Preload)
}
