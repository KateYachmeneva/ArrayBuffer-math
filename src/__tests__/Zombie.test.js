import Zombie from '../js/Zombie';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Zombie('Ivan', 'Zombie')).toEqual(expectedObject);
});
