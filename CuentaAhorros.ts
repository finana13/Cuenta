import {Cuenta} from "./Cuenta"

export class CuentaAhorro extends Cuenta{
    private estado:boolean;

    constructor(saldo :number,tasa_anual: number){
        super(saldo,tasa_anual)
        this.estado = true
    }
    setEstado(){
        return this.estado 
    }

    getEstado( estado: boolean){
        this.estado = estado
    }

    retirar(){

    }
    
    consignar(){
        
    }

    extracto(){
        
    }

    imprimirDatosAhorros(){
        
    }
}
