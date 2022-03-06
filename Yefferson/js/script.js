// devuelve el numero mayor y menor del array
function menorMayor(_array) {
    let numeros = _array;
    for(let i = 0, length = numeros.length; i <= length; i++) {
        for(let a = 0; a <= length; a++){
            if(numeros[i] < numeros[a]) {
                let aux = numeros[a];
                numeros[a] = numeros[i];
                numeros[i] = aux;
            }
        }
    }
    numeros = [numeros[0], numeros[numeros.length - 1]];
    return numeros;
}


// devuelve la string mas larga
function stringMasLargo(_arrayStrings) {
    let arrayStrings = _arrayStrings;
    let aux = arrayStrings.map(_e => _e = _e.length);
    let length = Math.max(...aux);
    for(const str of arrayStrings) {
        if(str.length === length) {
            arrayStrings = str;
            break;
        }
    }
    return arrayStrings;
}


// debuelve el amigo pasado por parametro
function buscarAmigo(_array, _name) {
    let array = _array;
    let friend = array.find(_e => _e.nombre === _name);
    return friend === undefined ? 'No se encontro amigo' : friend;
}


// devuelve el resultado de la suma de dos numeros del arreglo por parametro (primer parametro) y que de como resultado el segundo parametro
function subArray(_array, _res) {
    let array = _array;
    for(const num of array) {
       for(const numB of array) {
           let sum = num + numB;
           if(num !== numB && sum === _res) {
               return true;
           }
       } 
    }
    return false;
}


// devuelve los valores de las propiedades de unos objetos es un array
function pluck(_array, _prop) {
    let array = _array;
    let props = array.reduce((acc, _currentValue, _index) => {
        acc[_index] = _currentValue[_prop];
        return acc;
    }, []);
    return props;
}


// filtrar elementos de un array sin usar filter
function filter(_array, _callback) {
    let array = [];
    for(const obj of _array) {
        if(_callback(obj)) {
            array.push(obj);
        }
    }
    return array;
}
