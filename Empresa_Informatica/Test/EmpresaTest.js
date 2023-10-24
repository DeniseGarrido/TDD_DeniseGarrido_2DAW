const chai = require("chai");
const expect = chai.expect;
const {
  Empleado,
  Director,
  Trabajador,
  Ingeniero,
  mostrarNombresDirectores,
  mostrarNombresIngenieros,
} = require("./EmpresaInformatica");

describe("Empleado", () => {
  it("Crea un empleado", () => {
    const empleado = new Empleado("John");
    expect(empleado.nombre).to.equal("John");
    expect(empleado.departamento).to.equal("Informático");
  });
});

describe("Director", () => {
  it("Crea un director", () => {
    const director = new Director("Denise");
    director.informes = ["Enero", "Febrero", "Marzo"];
    expect(director.nombre).to.equal("Denise");
    expect(director.informes).to.deep.equal(["Enero", "Febrero", "Marzo"]); //Denise-> Compara array con deep
  });
});

describe("Trabajador", () => {
  it("Crea un trabajador", () => {
    const trabajador = new Trabajador("Carla");
    trabajador.proyectos = ["WebCode", "WebCenter"];
    expect(trabajador.nombre).to.equal("Carla");
    expect(trabajador.proyectos).to.deep.equal(["WebCode", "WebCenter"]);
  });
});

describe("Ingeniero", () => {
  it("Crea un ingeniero", () => {
    const ingeniero = new Ingeniero("Alejandro");
    ingeniero.lenguajeProg = "Java";
    expect(ingeniero.nombre).to.equal("Alejandro");
    expect(ingeniero.lenguajeProg).to.equal("Java");
  });
});

describe("mostrarNombresDirectores", () => {
  it("Mostrar nombres de los Directores", () => {
    const director1 = new Director("Denise");

    const resultado = mostrarNombresDirectores(director1);

    expect(resultado).to.equal("Director/a -> Denise");
  });
});

describe('mostrarNombresIngenieros', () => {
  it('Debería mostrar nombres de ingenieros correctamente', () => {
    const ingenieros = [
      new Ingeniero('Carmen'),
      new Ingeniero('Carla')
    ];
    
    ingenieros[0].lenguajeProg = 'JavaScript';
    ingenieros[1].lenguajeProg = 'Java';

    const resultado = mostrarNombresIngenieros(ingenieros);

    expect(resultado).to.deep.equal([
      'El ingeniero Carmen usa el lenguaje de programación JavaScript en el departamento Informático',
      'El ingeniero Carla usa el lenguaje de programación Java en el departamento Informático'
    ]);
  });
});
