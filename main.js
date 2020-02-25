import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedidio from "./elementopedido.js"
import ElementoPedido from "./elementopedido.js";
import Cliente from "./cliente.js";

var productos = [];
var clientes = [];
var pedidos = [];

class Main{
    registrarProducto(producto) {
        let r=new Producto(producto).getDescripcion();
        productos.push(r);
    }
    listarProductos(){
        console.log(productos);
    }
    registrarCliente(cliente){
        let r=new Cliente(cliente).getPerfil();
        clientes.push(r);
    }
    listarClientes(){
        console.log(clientes);
    }
    registrarPedido(pedido){
        pedidos.push(pedido);
    }
    listarPedidos(){
        console.log(pedidos);
    }
}
let app=new Main();
app.registrarCliente({
    nombre: "Pancho López",
    calle: "Girasol",
    numExt: "523",
    numInt: "B",
    colonia: "Lomas de las Flores", 
    cp: "28979",
    ciudad: "Chanchopa",
    mpio: "Coquimatlán",
    telefono: "31232456"
})
app.listarClientes();
app.registrarProducto({
    nombre:"Pizza",
    valor: 200
})
app.registrarProducto({
    nombre:"Hamburguesa",
    valor: 150
})
app.listarProductos();