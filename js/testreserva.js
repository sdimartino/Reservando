
describe('Reserva', function(){
    var reserva1;
    var reserva2;
    beforeEach(() => {
        reserva1 = new Reserva(new Date(2018, 7, 24, 11, 00), 8, 350, "DES1");
        reserva2 = new Reserva(new Date(2018, 7, 27, 14, 100), 2, 150, "DES200");
    });
    describe('precioBase', function(){
        it(' para 8 personas a 350 por persona un viernes a las 11:00, es de 2800', function(){
            var precioBase = reserva1.precioBase();
            expect(precioBase).to.equal(2800);
        });
        it(' para 2 personas a 150 por persona un lunes a las 15:40, es de 300', function(){
            var precioBase = reserva2.precioBase();
            expect(precioBase).to.equal(300);
        });
    });
    
    describe('adicionales', function(){
        it(' para 8 personas a 350 por persona un viernes a las 11:00, es de 280', function(){
            var adicional = reserva1.adicionales();
            expect(adicional).to.equal(280);
        });
        it(' para 2 personas a 150 por persona un lunes a las 15:40, es de 0', function(){
            var adicional = reserva2.adicionales();
            expect(adicional).to.equal(0);
        });
    });    
    describe('descuento', function(){
        it(' para 8 personas a 350 por persona un viernes a las 11:00 con codigo DES1, es de 350 (DES1) + 280(grupo 8), 630 ', function(){
            var descuento = reserva1.descuento();
            expect(descuento).to.equal(630);
        });
        it(' para 2 personas a 150 por persona un lunes a las 15:40 con codigo de descuento (DES200),es de 200 ', function(){
            var descuento = reserva2.descuento();
            expect(descuento).to.equal(200);
        });
    });        
    describe('precioFinal', function(){
        it(' para 8 personas a 350 por persona un viernes a las 11:00 con codigo DES1, es de 2450', function(){
            var precioBase = reserva1.precioFinal();
            expect(precioBase).to.equal(2450);
        });
        it(' para 2 personas a 150 por persona un lunes a las 15:40 con codigo de descuento (DES200), es de 100', function(){
            var precioBase = reserva2.precioFinal();
            expect(precioBase).to.equal(100);
        });
    });
});
    