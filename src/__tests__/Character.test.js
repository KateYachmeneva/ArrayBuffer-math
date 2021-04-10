import Character from '../js/Character';

test('should throw error if name less then 2 symbol', () => {
  expect(() => new Character('Y', 'Daemon')).toThrowError();
});
test('should throw error if name more then 10 symbol', () => {
  expect(() => new Character('Abcdefghijkl', 'Daemon')).toThrowError();
});
test('should throw error if type is incorrect', () => {
  expect(() => new Character('Ivan', 'Dimond')).toThrowError();
});
test('should create correct oject', () => {
  const expectedObject = {
    name: 'Ivan',
    type: 'Daemon',
    health: 100,
    level: 1,
  };
  expect(new Character('Ivan', 'Daemon')).toEqual(expectedObject);
});
