var Reserva = function(horario, cantPersonas, precioPorPersona, codDescuento){
    this.horario = horario;
    this.cantPersonas = cantPersonas;
    this.precioPorPersona = precioPorPersona;
    this.codDescuento = codDescuento;
}

Reserva.prototype.precioBaseReserva = function(){
    return this.cantPersonas * this.precioPorPersona;
}

Reserva.prototype.precioTotal = function(){

    // precio final = precio base + adicionales - descuentos
}

Reserva.prototype.descuento = function(){
    
        var descuentoAAplicar = 0;
        
        if (this.cantPersonas >= 4 && this.cantPersonas <= 6) {
            descuentoAAplicar = 0.05;
        }
        if (this.cantPersonas >= 7 && this.cantPersonas <= 8) {
            descuentoAAplicar = 0.10;
        }
        if (this.cantPersonas >= 9) {
            descuentoAAplicar = 0.15;
        }
        switch(this.codDescuento){
            case "DES15":
                descuentoAAplicar = 0.15;
            case "DES200":
                descuentoAAplicar = 200;
            case "DES1":
                descuentoAAplicar = 200;    
        }

}