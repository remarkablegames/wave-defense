import type { Shape } from 'kaplay'

import { Sprite } from '../constants'

export const goblin = {
  sprite: Sprite.Goblin,
  width: 100,
  shape: new Circle(vec2(), 50) as Shape,
  scale: 1,
}

export const orc = {
  sprite: Sprite.Orc,
  width: 100,
  shape: new Circle(vec2(), 50) as Shape,
  scale: 1,
}

export const slime = {
  sprite: Sprite.Slime,
  width: 100,
  shape: new Circle(vec2(), 50) as Shape,
  scale: 1,
}
