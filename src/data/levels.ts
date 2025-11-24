import { archer, goblin, guard, island, witch } from '.'

type Level = (typeof levels)[0]
export type Base = Level['bases'][0]
export type Enemy = Level['enemies'][0]['enemy']
export type Hero = Level['heroes'][0]

export const levels = [
  // 0
  {
    enemies: [
      {
        total: 5,
        enemy: {
          ...goblin,
          damage: 1,
          get speed() {
            return randi(80, 100)
          },
          health: 1,
        },
        timer: {
          wait: 0,
          interval: 3,
        },
      },
    ],
    heroes: [archer],
    bases: [
      {
        ...island,
        health: 3,
        pos: center(),
      },
    ],
  },

  // 1
  {
    enemies: [
      {
        total: 10,
        enemy: {
          ...goblin,
          damage: 1,
          get speed() {
            return randi(100, 120)
          },
          health: 2,
        },
        timer: {
          wait: 0,
          interval: 2,
        },
      },
    ],
    heroes: [guard, witch, archer],
    bases: [
      {
        ...island,
        health: 5,
        pos: center(),
      },
    ],
  },
]
