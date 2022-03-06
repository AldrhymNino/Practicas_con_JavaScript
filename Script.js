// Lista de productos
let products = [
    {name: 'keyboard', price: 100, color: 'negro', amount: 3},
    {name: 'mouse', price: 50, color: ['negro', 'blanco'], amount: 2},
    {name: 'monitor', price: 250, color: 'rojo', amount: 5},
    {name: 'stand desk', price: 600, color: 'marron', amount: 1},
    {name: 'mousepad', price: 15, color: 'blanco', amount: 4},
    {name: 'PC', price: 2000, color: ['negro', 'rojo'], amount : 2}
];

// Función comprar
const to_buy = (_list_prods, _prod) => {
    const product = _list_prods.find((_product, _index, _list_prods) => {
        if(_product.name === _prod && _product.amount > 0) {
            _list_prods[_index].amount--;
            console.log(`Nombre: ${_product.name} |`, `Price: ${_product.price}$ |`, `Color: ${_product.color}`);
            return _product;
        }else if(_index === (_list_prods.length - 1)) {
            console.log('Este producto no se encuentra disponible... Lo sentimos :(');
        }
    });
};

to_buy(products, 'stand desk');
to_buy(products, 'stand desk');

// Función mostrar productos
const show_products = (_list_prods) => {
    _list_prods.forEach(_product => {
        console.log(`Nombre: ${_product.name} |`, `Price: ${_product.price}$ |`, `Color: ${_product.color} |`, `Cantidad: ${_product.amount}`);
    });
};

show_products(products);