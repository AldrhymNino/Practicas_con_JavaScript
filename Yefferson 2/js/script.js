function minutosASegundos(_minutos) {
    return _minutos * 60;
}

function promedio(_array) {
    const suma = _array.reduce((_acc, _e) => _acc + _e, 0);
    return suma / _array.length;
}

let empleados = [
    {nombre: 'Manuel', salario: 1000},
    {nombre: 'Flor', salario: 4000},
    {nombre: 'Maria', salario: 500}
];

function salarioAnual(_empleados, _nombre) {
    const empleado = _empleados.find(_e => _e.nombre === _nombre);
    return empleado.salario;
}

function encontrarLaPalabra(_string) {
    return _string.includes('henry');
}