class Empleado {
  constructor(nombre) {
    this.nombre = nombre;
    this.departamento = "Informático";
  }
}

class Director extends Empleado {
  constructor(nombre) {
    super(nombre);
    this.informes = [];
  }
}

class Trabajador extends Empleado {
  constructor(nombre) {
    super(nombre);
    this.proyectos = [];
  }
}

class Ingeniero extends Trabajador {
  constructor(nombre) {
    super(nombre);
    this.lenguajeProg = "";
  }
}

function mostrarNombresDirectores(directores) {
  return directores.map(director => director.nombre);
}

function mostrarNombresIngenieros(ingenieros) {
  return ingenieros.map(ingeniero => `El ingeniero ${ingeniero.nombre} usa el lenguaje de programación ${ingeniero.lenguajeProg} en el departamento ${ingeniero.departamento}`);
}

module.exports = { Empleado, Director, Trabajador, Ingeniero, mostrarNombresDirectores, mostrarNombresIngenieros };

      

