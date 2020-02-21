import Precio from "./precio.js"
export default class Producto{
    constructor(nombre,valor){
        this.nombre=nombre;
        this.precio=valor;
    }
    getDescripcion(){
        let descr=`${this.nombre}`
        return descr;
    }
}