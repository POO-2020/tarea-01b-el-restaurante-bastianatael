export default class Tiempo{
    constructor(periodo){
        this.periodo=new Date().getHours();
        this.periodom=new Date().getMinutes();
        this.formatoC=["12","1","2","3","4","5","6","7","8","9","10","11","12",
                        "1","2","3","4","5","6","7","8","9","10","11","12"]
    }
    getFormato12(){
        if(this.periodo<13){
            let hora=`${this.formatoC[this.periodo]}:${this.periodom} am`;
            return hora;
        }
        else{
            let hora=`${this.formatoC[this.periodo]}:${this.periodom} pm`;
            return hora;
        }
    }
    getFormato24(){
        let horaC=`${this.periodo}:${this.periodom}`
        return horaC;
    }  
}