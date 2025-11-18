import { goblin } from '.'

export type Enemy = (typeof levels)[0]['enemies'][0]['enemy']

export const levels = [
  // 0
  {
    enemies: [
      {
        total: 10,
        enemy: {
          ...goblin,
          damage: 1,
          get speed() {
            return randi(50, 60)
          },
          health: 1,
        },
        timer: {
          wait: 3,
          interval: 5,
        },
      },
    ],
  },
]
