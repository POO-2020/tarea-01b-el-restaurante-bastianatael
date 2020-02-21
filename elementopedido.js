import Producto from "./producto.js";
import Precio from "./precio.js"
export default class ElementoPedido{
    constructor(cantidad,producto,precio){
        this.cantidad=cantidad;
        this.Producto=new Producto(producto);
        this.precio=new Precio(precio);
    }
    getDescripcion(){
        let descr=`${this.cantidad} x ${this.Producto.getDescripcion()} ${this.precio.getPrecioM()}= $${this.precio.getPrecio()*this.cantidad}`
        return descr;
    }

}