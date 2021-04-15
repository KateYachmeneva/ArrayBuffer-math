/* eslint-disable no-shadow */
import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.tight = false;
  }

  get stoned() {
    return this.tight;
  }

  set stoned(value) {
    this.tight = value;
  }

  set attack(value) {
    this.baseAttack = value;
  }

  get attack() {
    const linearRatio = (100 - (this.distance - 1) * 10) / 100;
    if (this.stoned) {
      const result = this.baseAttack * linearRatio - Math.log2(this.distance) * 5;
      if (result > 0) {
        return Math.floor(result);
      }
      return 0;
    }
    return Math.floor(this.baseAttack * linearRatio);
  }
}
