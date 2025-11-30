import * as bases from './bases'
import * as heroes from './heroes'

export const rewards = {
  entities: [...Object.values(bases), ...Object.values(heroes)],

  multipliers: [
    {
      text: 'Decrease attack cooldown by 15%.',
      multiplier: {
        cooldown: 0.85,
      },
    },

    {
      text: 'Increase attack damage by 20%.',
      multiplier: {
        damage: 1.2,
      },
    },

    {
      text: 'Increase attack penetration by 30%.',
      multiplier: {
        health: 1.3,
      },
    },

    {
      text: 'Increase attack duration by 25%.',
      multiplier: {
        lifespan: 1.25,
      },
    },

    {
      text: 'Increase attack size by 15%.',
      multiplier: {
        scale: 1.15,
      },
    },

    {
      text: 'Increase attack speed by 15%.',
      multiplier: {
        speed: 1.15,
      },
    },
  ],
}
