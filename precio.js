export default class Precio{
    constructor(valor){
    this.valor=valor;
    }
    getPrecioM(){
        let precio=`$${this.valor}`
        return precio;
    }
    getPrecio(){
        return this.valor;
    }
}