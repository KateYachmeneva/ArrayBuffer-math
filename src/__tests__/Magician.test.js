import Magician from '../js/Magician';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Magician',
    health: 100,
    level: 1,
    baseAttack: 10,
    defence: 40,
    distance: 1,
    tight: false,
  };
  expect(new Magician('Ivan', 'Magician')).toEqual(expectedObject);
});
test('Attack correctly calculated by getter', () => {
  const Potter = new Magician('Garri');
  Potter.attack = 100;
  Potter.distance = 2;
  Potter.stoned = true;
  expect(Potter.attack).toBe(85);
});
test('Attack returned 0,if result < 0', () => {
  const Potter = new Magician('Garri');
  Potter.attack = 3;
  Potter.distance = 5;
  Potter.stoned = true;
  expect(Potter.attack).toBe(0);
});
test('Attack returned correct result,if stoned=false', () => {
  const Potter = new Magician('Garri');
  Potter.attack = 100;
  Potter.distance = 2;
  Potter.stoned = false;
  expect(Potter.attack).toBe(90);
});
