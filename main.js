import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import ElementoPedidio from "./elementopedido.js"
import ElementoPedido from "./elementopedido.js";
class Main{
    constructor(){
        this.fecha=new Fecha(5,9,2001);
        this.tiempo=new Tiempo();
        this.direccion=new Direccion("Av. de los Maestros",230,11,"San Isidro",28987,"Colima","Villa de Álvarez" );
        this.ElementoPedidio=new ElementoPedido(2,"Pizza",200);
    }
    testFecha(){
        
        let años=this.fecha.getAños();
        console.log(años)
        let meses=this.fecha.getMeses(años);
        console.log(meses)
        let semanas=this.fecha.getSemanas(meses);
        console.log(semanas)
        let dias=this.fecha.getDias(semanas);
        console.log(dias)
        let fecha=this.fecha.getFecha();
        console.log(fecha)
        let diaF=this.fecha.getDiaFecha();
        console.log(diaF)
    }
    testTiempo(){
        let hora=this.tiempo.getFormato12();
        console.log(hora);
        let horaC=this.tiempo.getFormato24();
        console.log(horaC);
    }
    testDireccion(){
        let direccionFC=this.direccion.getFormatoCorto();
        console.log(direccionFC);
        let formatoComp=this.direccion.getFormatoCompl();
        console.log(formatoComp);
    }
    testElementoPedido(){
        let descr=this.ElementoPedidio.getDescripcion();
        console.log(descr);
    }
    
}
let app=new Main();
app.testFecha();
app.testTiempo();
app.testDireccion();
app.testElementoPedido();