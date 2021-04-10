export default class Character {
  constructor(name, type) {
    const validType = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!validType.includes(type)) {
      throw new Error('Введите один из доступных типов');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно содержать минимум 2 символа и максимум 10 символов');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
