console.time('time');
const listStudents = [{
    name: 'Aldrhym',
    nota: 20
}, {
    name: 'Gabriellys',
    nota: 18
}, {
    name: 'Yibran',
    nota: 20
}, {
    name: 'Victor',
    nota: 10
}, {
    name: 'yeikof',
    nota: 15
}, {
    name: 'kamila',
    nota: 17
}, {
    name: 'Marianella',
    nota: 13
}];

const listStudentsNotas = function(_array, _students1, _students2)  {
    let listStudents = _array;

    if(_students1 === 'aprobados') {
        document.write('<h1>Estudiantes Aprobados</h1>');
        for (let i of listStudents) {
            if(i.nota === 20)
                document.write(`Estudiante: ${i.name} | Nota: ${i.nota} <br>`);
        }
    }

    if(_students2 === 'reprobados') {
        document.write('<h1>Estudiantes Reprobados</h1>');
        for (let i of listStudents) {
            if(i.nota < 20)
                document.write(`Estudiante: ${i.name} | Nota: ${i.nota} <br>`);
        }
    }
};

listStudentsNotas(listStudents, 'aprobados', 'reprobados');
console.timeEnd('time');