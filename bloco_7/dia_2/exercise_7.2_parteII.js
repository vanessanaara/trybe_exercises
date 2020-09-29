const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1.Crie uma função para adicionar o turno da manhã na lesson2
const addTurn = (object, key, value) => {
  object[key] = value;
};

addTurn(lesson2, 'turno', 'manhã');

// 2.Crie uma função para listar as keys de um objeto
const listOfKeys = (object) => Object.keys(object);

// console.log(listOfKeys(lesson3));


// 3.Crie uma função para mostrar o tamanho de um objeto
const objectLength = (object) => {
  let array = Object.entries(object);
  return array.length;

};

// 4.Crie uma função para listar os valores de um objeto
const listOfValues = (object) => Object.values(object);

// console.log(listOfValues(lesson2));

// 5.Crie um objeto de nome allLessons, que deve agrupar todas as aulas
const allLessons = Object.assign({}, { lesson1, lesson2 , lesson3});

// 6.Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudents = (object) => {
  let students = 0;
  let array = Object.values(object);

  for (i in array) {
    let lessonNumber = array[i];
    students += lessonNumber.numeroEstudantes;
  }

  return students;
};

console.log(totalStudents(allLessons));
