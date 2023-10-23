const { sumar, resta, mult, div } = require("../Funciones.js");


describe("*** VALIDAR SUMAS ***", () => {
    test("1 + 1 = 2", () => {
      expect(sumar(1, 1)).toEqual(2);
    });
  
    test("10 + 20 = 30", () => {
      expect(sumar(10, 20)).toEqual(30);
    });

    test("4 + (-6) = -2", () => { //Test Denise->Suma con número negativo
      expect(sumar(4, -6)).toEqual(-2);
    });

    test("(-10) + (-6) = -16", () => { //Test Denise->Suma con dos números negativos
      expect(sumar(-10, -6)).toEqual(-16);
    });

    test("20 + (2*2) = 24", () => { //Test Denise->Suma con operadores
      expect(sumar(20, 2*2)).toEqual(24);
    });

    test("30.5 + 10.20 = 40.25", () => { //Test Denise->Suma con numeros decimales
      expect(sumar(30.5, 10.20)).toEqual(40.70);
    });

    test("92 + Infinity = Infinity", () => { //Test Denise->Suma con infinito
      expect(sumar(92, Infinity)).toEqual(Infinity);
    });

    test("4 + NaN = NaN", () => { //Test Denise->Suma sin número(NaN)
      expect(sumar(4, NaN)).toEqual(NaN);
    });
});
  

describe("*** VALIDAR RESTAS ***", () => {
    test("10 - 2 = 8", () => {
      expect(resta(10, 2)).toEqual(8);
    });
  
    test("87 - 523 = -436", () => {
      expect(resta(87, 523)).toEqual(-436);
    });

    test("14 - (-5) = 9", () => { //Test Denise->Resta con número negativo
      expect(resta(14, -5)).toEqual(19);
    });

    test("-11 - (-9) = -2", () => { //Test Denise->Resta con dos números negativos
      expect(resta(-11, -9)).toEqual(-2);
    });

    test("30 - (10/5) = 28", () => { //Test Denise->Resta con operadores
      expect(resta(30, 10/5)).toEqual(28);
    });

    test("30 - (-10/5) = 32", () => { //Test Denise->Resta con operadores negativos
      expect(resta(30, -10/5)).toEqual(32);
    });

    test("112.04 - 0.90 = 111.86", () => { //Test Denise->Resta con numeros decimales
      expect(resta(112.04, 0.90)).toEqual(111.14);
    });

    test("112.04 - 0.90 = 111.86", () => { //Test Denise->Resta con numeros decimales
      expect(resta(112.04, 0.90)).toEqual(111.14);
    });

    test("NaN - 1 = NaN", () => { //Test Denise->Resta sin número (NaN)
      expect(resta(NaN, 1)).toEqual(NaN);
    });

    test("Infinity - Infinity = NaN", () => { //Test Denise->Resta con números infinitos 
      expect(resta(Infinity, Infinity)).toEqual(NaN);
    });

    test("Infinity - 10 = Infinity", () => { //Test Denise->Resta con un número infinito
      expect(resta(Infinity, 10)).toEqual(Infinity);
    });
});
    

describe("*** VALIDAR MULTIPLICACIONES ***", () => {
      test("2 * 4 = 8", () => {
        expect(mult(2, 4)).toEqual(8);
      });
    
      test("1000 * 8.5 = 8500", () => {
        expect(mult(1000, 8.5)).toEqual(8500);
      });

      test("20 * 0.05 = 1", () => { //Test Denise-> Multiplicacion con un número decimal
        expect(mult(20, 0.05)).toEqual(1);
      });

      test("100.50 * 11.23 = 1128.615", () => { //Test Denise-> Multiplicacion con dos números decimales
        expect(mult(100.50, 11.23)).toEqual(1128.615);
      });

      test("6 * -10 = -60", () => { //Test Denise-> Multiplicacion con número negativo
        expect(mult(6, -10)).toEqual(-60);
      });

      test("-60 * -10 = 600", () => { //Test Denise-> Multiplicacion con dos números negativos
        expect(mult(-60, -10)).toEqual(600);
      });

      test("-8 * (-10%5) = 0", () => { //Test Denise-> Multiplicacion con operadores
        expect(mult(-8 , -10%5)).toEqual(0);
      });
      
      test("13 * NaN  = NaN", () => { //Test Denise-> Multiplicacion sin número
        expect(mult(13 , NaN)).toEqual(NaN);
      });

      test("0 * Infinity  = NaN", () => { //Test Denise-> Multiplicacion con 0 e infinito
        expect(mult(0 , Infinity)).toEqual(NaN);
      });

      test("10 * Infinity  = Infinity", () => { //Test Denise-> Multiplicacion con infinito
        expect(mult(10 , Infinity)).toEqual(Infinity);
      });
});


describe("*** VALIDAR DIVISIONES ***", () => {
    test("20 / 2 = 10", () => { 
      expect(div(20, 2)).toEqual(10);
    });
  
    test("30.6 / 3.2 = 9.5625", () => { //Test Denise-> Dividir con decimales
      expect(div(30.6, 3.2)).toEqual(9.5625);
    });

    test("10 / (-5) = -2", () => { //Test Denise-> Dividir con número negativo
      expect(div(10, -5)).toEqual(-2);
    });

    test("-10 / (-5) = 2", () => { //Test Denise-> Dividir con dos números negativos
      expect(div(-10, -5)).toEqual(2);
    });

    test("(-10-22) / (-5*5) = 1.28", () => { //Test Denise-> Dividir con operadores
      expect(div(-10 - 22, -5 * 5)).toEqual(1.28);
    });

    test("2 / NaN = NaN", () => { //Test Denise-> Dividir con NaN
      expect(div(2, NaN)).toEqual(NaN);
    });

    test("20 / 0 = Excepcion", () => { // Test Denise-> Excepción en división entre cero
      try {
        div(20, 0);
      } catch (error) {
        expect(error).toEqual("Cannot divide by 0!");
      }
    });
    
    test("20 / Infinity = Excepcion", () => { // Test Denise-> Excepción en división entre infinito
      try {
        div(20, Infinity);
      } catch (error) {
        expect(error).toEqual("Cannot divide by 0!");
      }
    });

});
    
