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

    retirar(monto: number){
        this.sobregiro += monto - this.saldo
        this.saldo = 0
        
    }

    consignar(monto : number) {
        if(this.sobregiro > 0){
            if(monto <= this.sobregiro){
                this.sobregiro -= monto
            }else{
                this.saldo += monto - this.sobregiro
                this.sobregiro = 0
            }
        }else{
            super.consignar(monto)
        }
        }
        
    
    extracto() { 
        super.extracto() 
    }

    imprimisDatosCorriente(){
        super.imprimirDatosCuenta()
        console.log("Sobregiro: "+this.sobregiro)
    }
}





