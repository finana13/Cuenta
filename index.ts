import {CuentaCorriente} from "./CuentaCorriente";
import {CuentaAhorro} from "./CuentaAhorros";

let cuenta_ahorr = new CuentaAhorro(20000,1.5)
cuenta_ahorr.consignar(500000)
cuenta_ahorr.retirar(200000)
cuenta_ahorr.extracto()
cuenta_ahorr.imprimirDatosAhorros()

let Cuenta_corr = new CuentaCorriente(20000,1.5)
cuenta_ahorr.consignar(1000000)
cuenta_ahorr.retirar(600000)
cuenta_ahorr.extracto()
cuenta_ahorr.imprimirDatosAhorros()