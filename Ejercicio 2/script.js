// Ejercicio de guardar funciones en arrays y llamarlas cuando las nesecites
/* const array = [];
const set = function(_nombre, _function) {
    array.unshift({nombre: _nombre, funcion: _function});
};
const get = function(_nombre, _parameter) {
    for(let i of array) {
        if(_nombre === i.nombre && typeof _nombre === 'string') {
            i.funcion(_parameter);
        }
    }
};

set('alerta', function(_message) {
    alert(_message);
});

get('alerta', 'hola Mundo'); */

/* =========================================================================================== */

// Esto es una funcion que retorna un objeto
/* var obj = function(_param, _param2) {
    return {
        prop: _param,
        prop2: _param2,
        prop3: function() {
            alert(_param + _param2);
        }
    };
};

obj(1, 2).prop3(); */

/* =========================================================================================== */

// Recorriendo el array y sumando todos sus valores
/* var array = [1, 2, 3, 4, 5];
let suma = 0;
array.forEach(function(currentValue, index, array) {
    suma += currentValue;
});
console.log(suma); */