import Bowerman from '../js/Bowerman';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  expect(new Bowerman('Ivan', 'Bowerman')).toEqual(expectedObject);
});
