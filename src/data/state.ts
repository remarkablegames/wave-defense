const key = 'remarkablegames.fantasea'

class State {
  temp = {
    basesTotal: 0,
    enemiesKilled: 0,
    enemiesTotal: 0,
  }

  private persist = {
    level: 0,
    ...JSON.parse(getData(key)!),
  }

  private save() {
    setData(key, JSON.stringify(this.persist))
  }

  get level() {
    return this.persist.level
  }

  set level(level: number) {
    this.persist.level = level
    this.save()
  }
}

export const state = new State()
