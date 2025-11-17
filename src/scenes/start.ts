import './game'
import './lose'
import './preload'
import './win'

import { Scene } from '../constants'

export function start() {
  go(Scene.Preload)
}
