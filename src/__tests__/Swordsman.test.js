import Swordsman from '../js/Swordsman';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  expect(new Swordsman('Ivan', 'Swordsmann')).toEqual(expectedObject);
});
