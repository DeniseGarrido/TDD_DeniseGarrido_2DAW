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

function mostrarNombresDirectores(director) { //aquí solo agregamos uno por parámetro
  return `Director/a -> ${director.nombre}`;
}

function mostrarNombresIngenieros(ingenieros) { //aquí aprendemos a hacerlo con map y añadir varios los cuales se van a mostrar (lo que equivaldría al bucle que hicimos forEach)
  return ingenieros.map(ingeniero => `El ingeniero ${ingeniero.nombre} usa el lenguaje de programación ${ingeniero.lenguajeProg} en el departamento ${ingeniero.departamento}`);
}

module.exports = { Empleado, Director, Trabajador, Ingeniero, mostrarNombresDirectores, mostrarNombresIngenieros };

      

