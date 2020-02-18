class Fecha{
    constructor(dia,mes,año){
        this.fecha=new Date(año,mes-1,dia)
    }
    getAños(){
        console.log(this.fecha)
    }
}
fecha1=new Fecha(17,11,2010);
fecha1.getAños();