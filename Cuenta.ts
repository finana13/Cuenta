export class Cuenta{
    protected saldo: number;
    protected num_consig: number;
    protected num_retir: number;
    protected tasa_anual: number;
    protected comision_mensual:number;
    
    constructor (saldo: number, tasa_anual:number){
        this.saldo = saldo
        this.num_consig = 0
        this.num_retir = 0
        this.tasa_anual = tasa_anual
        this.comision_mensual = 0
    }

    setSaldo(){
        return this.saldo
    }

    getSaldo(saldo: number){
        this.saldo = saldo
    }

    setNum_consig(){
        return this.num_consig
    }

    getNum_consig(num_consig:number){
        this.num_consig = num_consig
    }

    setNum_retir(){
        return this.num_retir
    }

    getNum_retir(num_retir:number){
        this.num_retir =num_retir
    }

    setTasa_anual(){
        return this.tasa_anual
    }

    getTasa_anual(tasa_anual: number){
        this.tasa_anual = tasa_anual
    }

    setComision_mensual(){
        return this.comision_mensual
    }

    getComision_mensual(comision_mensual:number){
        this.comision_mensual= comision_mensual
    }

    consignar(monto:number){
        if(monto> 0){
            this.saldo+= monto
            this.num_consig++
        }else{
            console.log("El monto de la consignacion debe ser mayor a cero")
        }

    }

    retirar(monto:number){
        if(monto> 0 && monto>= this.saldo){
            this.saldo-= monto
            this.num_consig++
        }else{
            console.log ("Monto invalido")
        }

    }

    calcular(){
        const int_men =(this.saldo *this.tasa_anual)/12/100
        this.saldo += int_men

    }

    extracto(){
        this.saldo -= this.comision_mensual
        this.calcular()
        console.log ("Extracto mensual")
        this.imprimirDatosCuenta()


    }

    imprimirDatosCuenta(){
        console.log ("Monto:" +this.saldo)
        console.log ("Comision mensual:" +this.comision_mensual)
        console.log ("Numero de consignaciones:" +this.num_consig)
        console.log ("Numero de retiros:"+this.num_retir)


    }
    


}