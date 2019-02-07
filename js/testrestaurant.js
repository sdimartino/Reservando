var expect = chai.expect;

describe('Restaurant',function(){
    describe('al reservarHorario', function(){
        var restaurante; 
        beforeEach(() => {
            restaurante = new Restaurant(
                4, 
                "Bleecker Street Pizza",
                 "Pizza", 
                 "Nueva York", 
                 ["12:00", "15:00", "17:30"], 
                 "../img/pizza2.jpg", 
                 [8, 9, 9, 4, 6, 7]);
        });
        describe('válido ',function(){
            it('lo elimina de la lista de disponibles', function(){
                var cantHorariosAntesReserva = restaurante.devolverHorarios().length;
                restaurante.reservarHorario("12:00");
                var horariosRestantes = restaurante.devolverHorarios();
                expect(horariosRestantes).not.to.be.contain("12:00");
                expect(horariosRestantes.length).to.equal(cantHorariosAntesReserva - 1);
            });
        });
        describe('inválido', function(){
            it('por no estar el horario indicado "11:00" dentro de los disponible  ["12:00", "15:00", "17:30"], el arreglo de horarios no modifica sus elementos.', function(){
                var cantHorariosAntesReserva = restaurante.devolverHorarios().length;
                var horariosIniciales = restaurante.devolverHorarios();
                restaurante.reservarHorario("11:00");
                var horariosRestantes = restaurante.devolverHorarios();
                expect(horariosRestantes.length).to.equal(cantHorariosAntesReserva);
                expect(horariosRestantes).to.eql(horariosIniciales);
            });
            it('por no indicar horario alguno, el arreglo de horarios no modifica sus elementos', function(){
                var horariosIniciales = restaurante.devolverHorarios();
                var cantHorariosAntesReserva = restaurante.devolverHorarios().length;
                restaurante.reservarHorario();
                var horariosRestantes = restaurante.devolverHorarios();
                expect(horariosRestantes.length).to.equal(cantHorariosAntesReserva);
                expect(horariosRestantes).to.eql(horariosIniciales);
            });
            it('por indicar horario vacío, el arreglo de horarios no modifica sus elementos', function(){
                var horariosIniciales = restaurante.devolverHorarios();
                var cantHorariosAntesReserva = restaurante.devolverHorarios().length;
                restaurante.reservarHorario("");
                var horariosRestantes =restaurante.devolverHorarios();
                expect(horariosRestantes.length).to.equal(cantHorariosAntesReserva);
                expect(horariosRestantes).to.eql(horariosIniciales);
            });
        });
    });    
    describe('obtenerPuntuacion', function(){
        var restaurante; 
        beforeEach(() => {
            restaurante =  new Restaurant(
                22, 
                "Byron Hoxton", 
                "Hamburguesa", 
                "Londres", 
                ["14:00", "16:00", "21:30"], 
                "../img/hamburguesa3.jpg", [1, 9, 10, 10, 5]);
        });
        describe(' de las calificaciones ',function(){
            it('[1, 9, 10, 10, 5] se obtiene 5', function(){
                var puntuacion = restaurante.obtenerPuntuacion();
                expect(puntuacion).to.equal(7);
            });
            it('[] se obtiene 0', function(){
                restaurante.calificaciones = [];
                var puntuacion = restaurante.obtenerPuntuacion();
                expect(puntuacion).to.equal(0);
            });
            it('[3, 3, 4] se obtiene 3.3', function(){
                restaurante.calificaciones = [3, 3, 4];
                var puntuacion = restaurante.obtenerPuntuacion();
                expect(puntuacion).to.equal(3.3);
            });
        });
    });    

    describe('calificar', function(){
        var restaurante; 
        beforeEach(() => {
            restaurante = new Restaurant(
                20,
                "Pappelli", 
                "Pizza",
                "París", 
                ["12:00", "15:00", "17:30"],
                 "../img/pizza3.jpg", 
                 [8, 4, 6, 7, 7, 9, 1]);
        });
        describe(' con un valor válido,',function(){
            it('  5 se agrega a la lista de calificaciones', function(){
                var puntuacionesEsperadas = [8, 4, 6, 7, 7, 9, 1, 5];
                var cantidadCalificacionesAnt = restaurante.calificaciones.length;
                restaurante.calificar(5);
                expect(restaurante.calificaciones).to.eql(puntuacionesEsperadas);
                expect(restaurante.calificaciones.length).to.be.equal(cantidadCalificacionesAnt + 1);
            });
        });
        describe(' con un valor inválido  ,',function(){
            it(' vacio, este no se agrega a la lista de calificaciones', function(){
                var calificacionesEsperadas = restaurante.calificaciones;
                var cantidadCalificacionesAnt = restaurante.calificaciones.length;
                restaurante.calificar();
                expect(restaurante.calificaciones).to.eql(calificacionesEsperadas);
                expect(restaurante.calificaciones.length).to.be.equal(cantidadCalificacionesAnt);
            });
            it(' string, este no se agrega a la lista de calificaciones', function(){
                var calificacionesEsperadas = restaurante.calificaciones;
                var cantidadCalificacionesAnt = restaurante.calificaciones.length;
                restaurante.calificar("invalido");
                expect(restaurante.calificaciones).to.eql(calificacionesEsperadas);
                expect(restaurante.calificaciones.length).to.be.equal(cantidadCalificacionesAnt);
            });
        });
    });    
});