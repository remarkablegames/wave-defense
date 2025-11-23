import type { Shape } from 'kaplay'

import { Sprite } from '../constants'

export const arrow = {
  sprite: Sprite.Arrow,
  width: 17,
  height: 100,
  shape: new Rect(vec2(), 5, 100) as Shape,
  damage: 1,
  speed: 300,
  timer: {
    wait: 3,
    interval: 3,
  },
}

export const beachball = {
  sprite: Sprite.Beachball,
  width: 100,
  height: 100,
  shape: new Circle(vec2(), 50) as Shape,
  damage: 10,
  speed: 100,
  timer: {
    wait: 5,
    interval: 5,
  },
}
