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
                expect(restaurante.devolverHorarios()).not.to.be.contain("12:00");
                var horariosRestantes = restaurante.devolverHorarios();
                expect(horariosRestantes.length).to.equal(cantHorariosAntesReserva - 1);
            });

        });
    });    
});

// describe('Funcion reservarHorario(horario)', function(){
    
//     it('Cuando se reserva un horario de un restaurant, la cantidad de horarios disponibles disminuye en uno.', function(){
//         var restaurante = new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]);
//         var cantHorariosAntesReserva = restaurante.horarios.length;
//         restaurante.reservarHorario("12:00");
//         expect(restaurante.horarios.length).to.equal(cantHorariosAntesReserva - 1);
//     });

//     it('Cuando se reserva un horario que el restaurant no posee, el arreglo no modifica su cantidad de elementos.', function(){
//         var restaurant = new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]);
//         var cantHorariosAntesReserva = restaurant.horarios.length;
//         restaurant.reservarHorario("11:00");
//         expect(restaurant.horarios.length).to.equal(cantHorariosAntesReserva);
//     });

//     it('Cuando se reserva un horario que el restaurant no posee, el arreglo se mantiene igual.', function(){
//         var restaurant = new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]);
//         var horariosIniciales = restaurant.horarios;
//         restaurant.reservarHorario("11:00");
//         expect(restaurant.horarios).to.be.equal(horariosIniciales);
//     });

//     it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo se mantiene igual.', function(){
//         var restaurant = new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]);
//         var horariosIniciales = restaurant.horarios;
//         restaurant.reservarHorario();
//         expect(restaurant.horarios).to.equal(horariosIniciales);
//     });
    
//     it('Cuando se intenta reservar un horario pero no se le pasa ningún parámetro a la función, el arreglo mantiene la cantidad de horarios que tenia antes de la reserva.', function(){
//         var restaurant = new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]);
//         var cantHorariosIniciales = restaurant.horarios.length;
//         restaurant.reservarHorario();
//         expect(restaurant.horarios.length).to.equal(cantHorariosIniciales);
//     })
// });

// describe('Función obtenerPuntuacion()', function(){
//     it('Cuando las calificaciones de un restaurant son [1,2,3,4,5] la puntuacion es 3', function(){
//         var restaurant = new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [1,2,3,4,5]);
//         var puntuacion = restaurant.obtenerPuntuacion();
//         expect(puntuacion).to.equal(3);
//     })
//     it('Cuando un restaurante no tiene calificaciones[] la puntuacion es 0',function(){
//         var restaurant = new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", []);
//         var puntuacion = restaurant.obtenerPuntuacion();
//         expect(puntuacion).to.equal(0);
//     })
//     it('Cuando un restaurante tiene calificaciones[3,3,4] la puntuacion es 0',function(){
//         var restaurant = new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [3,3,4]);
//         var puntuacion = restaurant.obtenerPuntuacion();
//         expect(puntuacion).to.equal(3.33);
//     })
    

// })