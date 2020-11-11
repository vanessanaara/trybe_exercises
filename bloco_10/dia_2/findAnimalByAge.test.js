const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalAge = Animals.filter((animal) => age === animal.age);
      if (animalAge.length === 0) {
        return reject('Nenhum animal com essa idade!');
      }

      return resolve(animalAge);
    }, 100);
  })
);

const getAnimalAge = (age) => {
  return findAnimalByAge(age).then(animalArray => animalArray)
};

describe('Testando promise - findAnimalByAge', () => {
  describe('Quando existe o animal com a idade procurada', () => {
    test('Retorne um array com o objeto do animal', () => {
      expect.assertions(1);
      return getAnimalAge(5).then(animal => {
        expect(animal).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }]);
      });
    });
  });

  describe('Quando não existe o animal com a idade procurada', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimalAge(3).catch(error =>
        expect(error).toEqual('Nenhum animal com essa idade!')
      );
    });
  });
});
