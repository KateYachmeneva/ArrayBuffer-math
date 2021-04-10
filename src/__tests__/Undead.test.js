import Undead from '../js/Undead';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Undead('Ivan', 'Undead')).toEqual(expectedObject);
});
