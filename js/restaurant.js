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
        for (var i = 0; i < horarios.length; i++) {
            if (horarios[i] === horarioReservado) {
                horarios.splice(i, 1);
                return;
            }
        }
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
        var sumatoria = 0;
        for (var i = 0; i < this.calificaciones.length; i++) {
            sumatoria += this.calificaciones[i]
        }
        var promedio = sumatoria / this.calificaciones.length;
        return Math.round(promedio * 10) / 10;
    }
}