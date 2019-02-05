var Reserva = function(horario, cantPersonas, precioPorPersona, codDescuento){
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codDescuento = codDescuento;
}
Reserva.prototype.precioBase = function(){
    return this.cantPersonas * this.precioPorPersona;
}
Reserva.prototype.precioFinal = function(){
    return this.precioBase() + this.adicionales() - this.descuento();
}
Reserva.prototype.adicionales = function(){
    var adicional = 0;
    if ((this.horario.getHours() >= 13 && this.horario.getHours() <= 14) || (this.horario.getHours() >= 20 && this.horario.getHours() <= 21)){
        adicional = adicional + this.precioBase() * 0.05;
    }
    if (this.horario.getDay() == 5 || this.horario.getDay() == 6 || this.horario.getDay() == 0 ){
        adicional = adicional + this.precioBase() * 0.10;
    }
    return adicional;
}
Reserva.prototype.descuento = function(){
        var descuentoAAplicar = 0;
        switch(this.codDescuento){
            case "DES15":
                descuentoAAplicar = descuentoAAplicar + this.precioBase() * 0.15;
                break;
            case "DES200":
                descuentoAAplicar = descuentoAAplicar + 200;
                break;
            case "DES1":
                descuentoAAplicar = descuentoAAplicar + this.precioPorPersona; 
                break;
        }
        if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
            descuentoAAplicar = descuentoAAplicar + this.precioBase() * 0.05;
        }
        if (this.cantPersonas >= 7 && this.cantPersonas <= 8) {
            descuentoAAplicar = descuentoAAplicar + this.precioBase() * 0.10;
        }
        if (this.cantPersonas >= 9) {
            descuentoAAplicar = descuentoAAplicar + this.precioBase() * 0.15;
        }
        return descuentoAAplicar;
}