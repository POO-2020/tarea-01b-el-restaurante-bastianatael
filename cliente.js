import Direccion from "./direccion.js";
export default class Cliente{
   constructor(cliente){
      this.cliente = cliente;
   }
   getPerfil(){
      let direccion = new Direccion(
         this.cliente.calle,
         this.cliente.numExt,
         this.cliente.numInt,
         this.cliente.colonia,
         this.cliente.cp,
         this.cliente.ciudad,
         this.cliente.mpio
         ).getFormatoCompl();
         let nombre=this.cliente.nombre;
         let telefono=this.cliente.telefono;
      return `${nombre}, ${direccion}, ${telefono}`;
   }
}