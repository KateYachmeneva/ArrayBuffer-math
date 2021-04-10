import Daemon from '../js/Daemon';

test('Check class create correct object', () => {
  const expectedObject = {
    name: 'Witch',
    type: 'Daemon',
    health: 100,
    level: 1,
    attackNew: 10,
    defence: 40,
    distance: 1,
    ston: false,
  };
  expect(new Daemon('Witch', 'Daemon')).toEqual(expectedObject);
});
test('Attack correctly calculated by getter', () => {
  const Witch = new Daemon('Witch');
  Witch.attack = 100;
  Witch.distance = 2;
  Witch.stoned = true;
  expect(Witch.attack).toBe(85);
});
test('Attack returned 0,if result < 0', () => {
  const Witch = new Daemon('Witch');
  Witch.attack = 3;
  Witch.distance = 5;
  Witch.stoned = true;
  expect(Witch.attack).toBe(0);
});
