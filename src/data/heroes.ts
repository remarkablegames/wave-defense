import { Sprite } from '../constants'
import { arrow, beachball } from '.'

export const archer = {
  sprite: Sprite.Archer,
  width: 100,
  height: 111,
  attack: arrow,
}

export const guard = {
  sprite: Sprite.Guard,
  width: 100,
  height: 114,
  attack: beachball,
}

export const witch = {
  sprite: Sprite.Witch,
  width: 100,
  height: 99,
  attack: beachball,
}
