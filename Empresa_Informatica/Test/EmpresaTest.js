const chai = require("chai");
const expect = chai.expect;
const {
  Empleado,
  Director,
  Trabajador,
  Ingeniero,
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
    director.informes=["Enero", "Febrero", "Marzo"];
    expect(director.nombre).to.equal("Denise");
    expect(director.informes).to.deep.equal(["Enero", "Febrero", "Marzo"]); //Denise-> Compara array con deep
  });
});

describe("Trabajador", () => {
    it("Crea un trabajador", () => {
      const trabajador = new Trabajador("Carla");
      trabajador.proyectos=["WebCode", "WebCenter"];
      expect(trabajador.nombre).to.equal("Carla");
      expect(trabajador.proyectos).to.deep.equal(["WebCode", "WebCenter"]); 
    });
  });
