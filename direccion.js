export default class Direccion{
    /**
     * 
     * @param {string} calle Nombre de la calle
     * @param {Number} numExt Numero exterior del edificio
     * @param {Number} numInt Numero interior del edificio
     * @param {string} colonia Nombre de la colonia
     * @param {Number} codPost Numero del codigo postal
     * @param {string} ciudad Nombre de la ciudad
     * @param {string} municipio Nombre del municipio
     */
    constructor(calle,numExt,numInt,colonia,codPost,ciudad,municipio){
        this.calle=calle;
        this.numExt=numExt;
        this.numInt=numInt;
        this.colonia=colonia;
        this.codPost=codPost;
        this.ciudad=ciudad;
        this.municipio=municipio;
        
    }
    getFormatoCorto(){
       let formatoC=`${this.calle}, num. ${this.numExt}`
        return formatoC;
    }
    getFormatoCompl(){
        let formatoCompl=`${this.calle}, num. Ext. ${this.numExt}, num. int. ${this.numInt}, Col. ${this.colonia}, Cod. Postal ${this.codPost}, ${this.municipio}, ${this.ciudad}`
        return formatoCompl;
    }
}