import Precio from "./precio.js"
export default class Producto{
    constructor(producto){
        this.producto=producto;
    }
    getDescripcion(){
        let nombre=this.producto.nombre;
        let valor=new Precio(this.producto.valor).getPrecioM();
        let descr=`${nombre} ${valor}   `
        return descr;
    }
}