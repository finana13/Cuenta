import {Cuenta} from "./Cuenta"

export class CuentaAhorro extends Cuenta{
    private estado:boolean;

    constructor(saldo :number,tasa_anual: number){
        super(saldo,tasa_anual)
        this.estado = saldo >= 30000
    }
    setEstado(){
        return this.estado 
    }

    getEstado( estado: boolean){
        this.estado = estado
    }

    retirar(monto: number){
        if (this.estado) {
            super.retirar(monto);
          } else {
            console.log("No se puede hacer el retiro");
          }

    }
    
    consignar(monto: number){
                if(this.estado){
            super.consignar(monto)
        }else{
            console.log("Cuenta inactiva")
        }
    }

    extracto(){
        if (this.num_retir > 4) {
            this.comision_mensual += 2000;
          }
          super.extracto();
        
    }

    imprimirDatosAhorros(){
        super.imprimirDatosCuenta()
        console.log("Activa: "+this.estado)
        
    }
}
