// Clase De Estudiantes
const Students = function(_name, _lastname, _ago, _note) {
    // Atributos
    this.name = _name;
    this.lastname = _lastname;
    this.ago = _ago;
    this.note = _note;

    // Método
    this.print = function() {
        // Creando Elementos
        const tbody = document.querySelector('#tbody');
        const row = document.createElement('tr');
        const cell_name = document.createElement('td');
        const cell_lastname = document.createElement('td');
        const cell_ago = document.createElement('td');
        const cell_note = document.createElement('td');

        // Aplicando Contenido
        cell_name.innerHTML = this.name;
        cell_lastname.innerHTML = this.lastname;
        cell_ago.innerHTML = this.ago;
        cell_note.innerHTML = this.note;

        // Aplicando Elementos
        row.appendChild(cell_name);
        row.appendChild(cell_lastname);
        row.appendChild(cell_ago);
        row.appendChild(cell_note);
        tbody.appendChild(row);
    };
    // Ejecutando Método
    this.print();
};

// Array Con Todos Los Estudiantes
const array = [{
    name: 'Aldrhym',
    lastname: 'Niño',
    age: 16,
    note: '20pts'
}, {
    name: 'José',
    lastname: 'Gomez',
    age: 17,
    note: '10pts'
}, {
    name: 'Yeikof',
    lastname: 'Navarro',
    age: 12,
    note: '18pts'
}, {
    name: 'Yibran',
    lastname: 'Monsalve',
    age: 19,
    note: '20pts'
}, {
    name: 'Victor',
    lastname: 'Monsalve',
    age: 15,
    note: '13pts'
}, {
    name: 'Gabriellys',
    lastname: 'Monsalve',
    age: 14,
    note: '20pts'
}];

const organizar = function(_array, _metodo) {
    for(let i = 0, arrLength = _array.length; i < arrLength; i++) {
        for(let a = 0; a < arrLength; a++) {
            if(_array[i][_metodo] < _array[a][_metodo]) {
                let aux = _array[a];
                _array[a] = _array[i];
                _array[i] = aux;
            }
        }
    }

    // Ciclo Para Recorrer Array De Estudiantes E Instanciar Objeto Students
    for(let i = 0, arrLength = array.length; i < arrLength; i++) {
        if(arrLength) {
            let students = new Students(_array[i].name, _array[i].lastname, _array[i].age, _array[i].note);
        }
    }
};

organizar(array, 'age');