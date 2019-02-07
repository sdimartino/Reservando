describe('Listado',function(){
    var listDeRestaurantesTest;
    beforeEach(() => {
        listDeRestaurantesTest = [
            new Restaurant(1, "TAO Uptown", "Asiática", "Nueva York", ["13:00", "15:30", "18:00"], "../img/asiatica1.jpg", [6, 7, 9, 10, 5]),
            new Restaurant(2, "Mandarín Kitchen", "Asiática", "Londres", ["15:00", "14:30", "12:30"], "../img/asiatica2.jpg", [7, 7, 3, 9, 7]),
            new Restaurant(3, "Burgermeister", "Hamburguesa", "Berlín", ["11:30", "12:00", "22:30"], "../img/hamburguesa4.jpg", [5, 8, 4, 9, 9]),
            new Restaurant(4, "Bleecker Street Pizza", "Pizza", "Nueva York", ["12:00", "15:00", "17:30"], "../img/pizza2.jpg", [8, 9, 9, 4, 6, 7]),
            new Restaurant(5, "Jolly", "Asiática", "Berlín", ["12:00", "13:30", "16:00"], "../img/asiatica3.jpg", [8, 3, 9, 5, 6, 7]),
            new Restaurant(6, "Green salad", "Ensalada", "Berlín", ["17:00", "19:00", "20:30"], "../img/ensalada2.jpg", [8, 3, 2, 1, 8, 7]),
            new Restaurant(7, "Osteria Da Fortunata", "Pasta", "Roma", ["13:00", "15:30", "18:00"], "../img/pasta2.jpg", [7, 7, 7, 7, 3, 9]),
            new Restaurant(8, "Cafe Francoeur", "Desayuno", "París", ["14:30", "15:30", "19:00"], "../img/desayuno1.jpg", [4, 7, 9, 8, 10]),
            new Restaurant(9, "La Trottinette", "Pasta", "París", ["16:00", "18:00", "21:30"], "../img/pasta5.jpg", [8, 8, 7, 7, 7, 7]),
            new Restaurant(10, "New London Cafe", "Desayuno", "Londres", ["12:00", "13:00", "14:30"], "../img/desayuno3.jpg", [9, 4, 6, 5, 6]),
            new Restaurant(11, "Frogburguer", "Hamburguesa", "París", ["12:00", "15:00", "17:30"], "../img/hamburguesa1.jpg", [9, 8, 5, 2, 9]),
            new Restaurant(12, "Just Salad", "Ensalada", "Nueva York", ["12:00", "15:00", "17:30"], "../img/ensalada3.jpg", [8, 1, 4, 5, 5, 7]),
            new Restaurant(13, "The Counter", "Hamburguesa", "Nueva York", ["17:00", "18:00", "19:30"], "../img/hamburguesa2.jpg", [6, 9, 7, 6, 7, ]),
            new Restaurant(14, "TGood Seed Salads & Market", "Ensalada", "Nueva York", ["17:00", "19:00", "22:30"], "../img/ensalada4.jpg", [8, 8, 8, 8, 5, 7]),
            new Restaurant(15, "Carmine's", "Pasta", "Nueva York", ["14:30", "16:30", "19:00"], "../img/pasta1.jpg", [9, 8, 5, 5, 9]),
            new Restaurant(16, "Pastasciutta", "Pasta", "Roma", ["14:30", "15:30", "19:00"], "../img/pasta3.jpg", [4, 9, 10, 9, 4, 6]),
            new Restaurant(17, "Vapiano", "Pasta", "Berlín", ["12:00", "15:00", "17:30"], "../img/pasta4.jpg", [8, 4, 6, 7, 4, 7]),
            new Restaurant(18, "Pizza Union Spitalfields", "Pizza", "Londres", ["12:00", "15:00", "17:30"], "../img/pizza1.jpg", [8, 8, 8, 4, 6, 7]),
            new Restaurant(19, "Les Deux Magots", "Desayuno", "París", ["17:00", "19:00", "22:30"], "../img/desayuno4.jpg", [8, 4, 6, 6, 7]),
            new Restaurant(20, "Pappelli", "Pizza", "París", ["12:00", "15:00", "17:30"], "../img/pizza3.jpg", [8, 4, 6, 7, 7, 9, 1]),
            new Restaurant(21, "Trattoria La Cenetta", "Pizza", "Berlín", ["12:00", "15:00", "17:30"], "../img/pizza4.jpg", [8, 4, 6, 2, 5, 7]),
            new Restaurant(22, "Byron Hoxton", "Hamburguesa", "Londres", ["14:00", "16:00", "21:30"], "../img/hamburguesa3.jpg", [4, 9, 10, 10, 6]),
            new Restaurant(23, "Chez Moi", "Ensalada", "París", ["11:00", "12:00", "14:30"], "../img/ensalada1.jpg", [8, 4, 5, 5, 5, 5]),
            new Restaurant(24, "Maison Kayser", "Desayuno", "Nueva York", ["21:00", "22:30", "15:00"], "../img/desayuno2.jpg", [9, 5, 7, 6, 7]),
        ];
    });
    describe('buscarRestaurante', function(){
        describe('válido',function(){
            it('  cuyo id es 11, lo devuelve', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.buscarRestaurante(11);
                expect(restauranteObtenido.id).to.be.equal(11);
                expect(restauranteObtenido.nombre).to.be.equal("Frogburguer");
            });
        });
        describe('inválido',function(){
            it('  cuyo id es 25 y no pertenece a la lista. Muestra mensaje de validación', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.buscarRestaurante(25);
                expect(restauranteObtenido).to.be.equal("No se ha encontrado ningún restaurant");
            });
            it('  por pasar un valor vacio. Muestra mensaje de validación', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.buscarRestaurante();
                expect(restauranteObtenido).to.be.equal("No se ha encontrado ningún restaurant");
            });
            it('  por pasar un valor string. Muestra mensaje de validación', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.buscarRestaurante("blabla");
                expect(restauranteObtenido).to.be.equal("No se ha encontrado ningún restaurant");
            });
        });
    });
    describe('obtenerRestaurantes', function(){
        describe('válidos ',function(){
            it(' cuyos filtros son ("Asiática", "Nueva York", "13:00"), devuelve TAO Uptown', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", "Nueva York", "13:00");
                expect(restauranteObtenido.length).to.be.equal(1);
                expect(restauranteObtenido[0].id).to.be.equal(1);
                expect(restauranteObtenido[0].nombre).to.be.equal("TAO Uptown");
            });
            it(' cuyos filtros son ("Asiática", "Nueva York", null),  devuelve TAO Uptown', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", "Nueva York", null);
                expect(restauranteObtenido.length).to.be.equal(1);
                expect(restauranteObtenido[0].id).to.be.equal(1);
                expect(restauranteObtenido[0].nombre).to.be.equal("TAO Uptown");
            });
            it(' cuyos filtros son ("Asiática", "Nueva York", ""),  no encuentra opciones', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", "Nueva York", "");
                expect(restauranteObtenido.length).to.be.equal(0);
            });
            it(' cuyos filtros son ("Asiática", null, "13:00"),  devuelve TAO Uptown', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", null, "13:00");
                expect(restauranteObtenido.length).to.be.equal(1);
                expect(restauranteObtenido[0].id).to.be.equal(1);
                expect(restauranteObtenido[0].nombre).to.be.equal("TAO Uptown");
            });
            it(' cuyos filtros son ("Asiática", "", "13:00"),  no encuentra opciones', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", "", "13:00");
                expect(restauranteObtenido.length).to.be.equal(0);
            });
            it(' cuyos filtros son (null, "Nueva York", "13:00"),  devuelve TAO Uptown', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes(null, "Nueva York", "13:00");
                expect(restauranteObtenido.length).to.be.equal(1);
                expect(restauranteObtenido[0].id).to.be.equal(1);
                expect(restauranteObtenido[0].nombre).to.be.equal("TAO Uptown");
            });
            it(' cuyos filtros son ("", "Nueva York", "13:00"),  no encuentra opciones', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("", "Nueva York", "13:00");
                expect(restauranteObtenido.length).to.be.equal(0);
            });
            it(' cuyos filtros son (null, null, null), devuelve los 24 restaurantes de la lista', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restaurantesObtenido = listado.obtenerRestaurantes(null, null, null);
                expect(restaurantesObtenido.length).to.be.equal(24);
            });
            it(' cuyos filtros son ("", "", ""), no encuentra opciones', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restaurantesObtenido = listado.obtenerRestaurantes("", "", "");
                expect(restaurantesObtenido.length).to.be.equal(0);
            });
            it(' cuyos filtros son (null, "Berlín", null), devuelve 5 restaurantes cuyos ids son [3, 5, 6, 17, 21] ', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restaurantesEsperados = [3, 5, 6, 17, 21];
                var restaurantesObtenidos = listado.obtenerRestaurantes(null, "Berlín", null);
                restaurantesObtenidos= restaurantesObtenidos.map(restaurante => restaurante.id);
                expect(restaurantesObtenidos).to.deep.eql(restaurantesEsperados);
            });
            it(' cuyos filtros son ("Pizza", null, null), devuelve 4 restaurantes cuyos ids son [4, 18, 20, 21] ', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restaurantesEsperados = [4, 18, 20, 21];
                var restaurantesObtenidos = listado.obtenerRestaurantes("Pizza", null, null);
                restaurantesObtenidos= restaurantesObtenidos.map(restaurante => restaurante.id);
                expect(restaurantesObtenidos).to.deep.eql(restaurantesEsperados);
            });
            
        });
        describe('inválidos ',function(){
            it(' cuyos filtros son ("Asiática", "Nueva York", "12:00"), no devuelve ningún restaurante', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", "Nueva York", "12:00");
                expect(restauranteObtenido.length).to.be.equal(0);
            });
            it(' cuyos filtros son ("Asiática", "Rosario", "13:00"), no devuelve ningún restaurante', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Asiática", "Rosario", "13:00");
                expect(restauranteObtenido.length).to.be.equal(0);
                
            });
            it(' cuyos filtros son ("Peruana", "Nueva York", "13:00"), no devuelve ningún restaurante', function(){
                var listado = new Listado(listDeRestaurantesTest);
                var restauranteObtenido = listado.obtenerRestaurantes("Peruana", "Nueva York", "13:00");
                expect(restauranteObtenido.length).to.be.equal(0);
                
            });
        });
    });
});    