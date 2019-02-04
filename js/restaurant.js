var Restaurant = function(id, nombre, rubro, ubicacion, horariosDisponibles, imagen, calificaciones) {
    this.id = id;
    this.nombre = nombre;
    this.rubro = rubro;
    this.ubicacion = ubicacion;
    // this.horarios = horarios;
    this.imagen = imagen;
    this.calificaciones = calificaciones;
    var horarios= horariosDisponibles;

    this.devolverHorarios = function(){
        return horarios;
    }
    this.reservarHorario = function(horarioReservado) {
        horarios = horarios.filter(horario => horario != horarioReservado);
    }
    this.agregarHorarios = function(nuevoHorario){
        horarios.push(nuevoHorario);
    }
}
Restaurant.prototype.calificar = function(nuevaCalificacion) {
    if (Number.isInteger(nuevaCalificacion) && nuevaCalificacion > 0 && nuevaCalificacion < 10) {
        this.calificaciones.push(nuevaCalificacion);
    }
}
Restaurant.prototype.obtenerPuntuacion = function() {
    if (this.calificaciones.length === 0) {
        return 0;
    } else {
        return Math.round(this.promedio(this.calificaciones) * 10) / 10;
    }
}

Restaurant.prototype.sumatoria = function(numeros){
    return numeros.reduce((acum, numero) => acum + numero);
}

Restaurant.prototype.promedio = function(numeros){
    return this.sumatoria(numeros)/numeros.length;
}
