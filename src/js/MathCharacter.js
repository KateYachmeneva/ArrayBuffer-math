import Character from './Character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 1;
    this.ston = false;
  }

  get stoned() {
    return this.ston;
  }

  set stoned(value) {
    this.ston = value;
  }

  set attack(value) {
    this.attackNew = value;
  }

  get attack() {
    function linearDependence(distance) {
      return (100 - (distance - 1) * 10) / 100;
    }
    const linearRatio = linearDependence(this.distance);
    if (this.stoned) {
      const result = Math.floor(this.attackNew * linearRatio - Math.log2(this.distance) * 5);
      if (result > 0) {
        return result;
      }
      return 0;
    }
    return this.attackNew * linearRatio;
  }
}
