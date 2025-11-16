import type { Shape } from 'kaplay'

import { Sprite } from '../constants'

export interface Enemy {
  sprite: Sprite
  width: number
  height: number
  shape: Shape
}

export const enemies: Enemy[] = [
  {
    sprite: Sprite.Enemy,
    width: 100,
    height: 100,
    shape: new Circle(vec2(), 50),
  },
]
