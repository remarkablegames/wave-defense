import type { Sprite } from '../constants'
import type { Enemies } from '../data'

const key = 'remarkablegames.fantasea'

class State {
  temp = {
    basesTotal: 0,
    enemies: [] as (Pick<Enemies[0], 'total' | 'timer'> & { sprite: Sprite })[],
    enemiesKilled: 0,
    enemiesTotal: 0,
    start: false,
  }

  private init() {
    return {
      level: 0,
    }
  }

  private persist: ReturnType<typeof this.init> = {
    ...this.init(),
    ...JSON.parse(getData(key)!),
  }

  get level() {
    return this.persist.level
  }

  set level(level: number) {
    if (level === 0) {
      this.persist = this.init()
    } else {
      this.persist.level = level
    }
    this.save()
  }

  private save() {
    setData(key, JSON.stringify(this.persist))
  }
}

export const state = new State()
