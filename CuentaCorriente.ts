import {Cuenta} from "./Cuenta"

export class CuentaCorriente extends Cuenta{
    private sobregiro:number;

    constructor (saldo:number,tasa_anual:number){
        super(saldo,tasa_anual)
        this.sobregiro = 0
        
    }

    setSobregiro(){
        return this.sobregiro
    }

    getSobregiro(sobregiro:number){
        this.sobregiro =sobregiro
    }

    retirar(){
        
    }

    consignar() {
        
    }
    extracto() {
        
    }

    imprimisDatosCorriente(){
        
    }




}