/*----Sistema de Alumnos----
Voy a tener un arreglo con varios alumnos y que cada uno tenga:
nombre, apellido, numero de legajo, metodo que calcule el promedio del alumno, 
otro metodo que me diga el estado del alumno ("Aprobado" - "Desaprobado")*/

/*No tiene sentido que declaremos en cada objeto una función, entonces vamos
a crear las funciones con otro nombre (Siempre arriba de todo, porque deberá
estar declarada antes), las cuales seran igual a todo lo que tengo 
dentro de los metodos de los objetos...  */

let calcularPromedio = function(){
    let acumulador = 0
    for (let i = 0; i < this.notas.length; i++) {
        acumulador += this.notas[i]
    }
    return acumulador / this.notas.length
}

let decirEstado = function(){
    let promedio = this.promedio()
    return promedio >= 7 ? 'Aprobado' : 'Desaprobado'
    // if(promedio >= 7){
    //     return 'Aprobado'
    // }else{
    //     return 'Desaprobado'
    // }
}

let alumnos = [
    {
        nombre: "Pepito",
        apellido: "Perez",
        numLegajo: 123456,
        notas: [6, 8, 9, 5],
        promedio: calcularPromedio,
        estado: decirEstado
    },
    {
        nombre: "Juancito",
        apellido: "Lopez",
        numLegajo: 123457,
        notas: [4, 5, 9, 6],
        promedio: calcularPromedio,
        estado: decirEstado
    },
    {
        nombre: "Maria",
        apellido: "Gonzalez",
        numLegajo: 123458,
        notas: [10, 9, 3, 1],
        promedio: calcularPromedio,
        estado: decirEstado
    }
];

// console.log(alumnos[1].promedio());

/* ¿Como puedo hacer un sistema que cuando se ejecute me
diga el promedio de todos los alumnos?
R= lo puedo hacer con un for.*/

for (let i = 0; i < alumnos.length; i++) {    
    // console.log(alumnos[i].nombre, alumnos[i].promedio());
    console.log(`El promedio de ${alumnos[i].nombre} ${alumnos[i]. apellido} es de ${alumnos[i].promedio()}`);
    console.log(`El alumno ${alumnos[i].nombre} ${alumnos[i]. apellido} esta ${alumnos[i].estado()}`);
};

/*Si en este arreglo agregara 100 alumnos con este FOR no tendria que 
modificar nada, ya el hace la función... */

/*Crear el objeto "alumno", el cual va a consistir en las
siguientes propiedades básicas:
--nomnbre
---numero de legajo
---lista de notas
Donde nos gustaria calcular el promedio del alumno y saber si
esta aprobado, el cual se basa en una nota de aprobación dada.*/

const alumno = {
    nombre: "Leandro",
    legajo: 123456,
    listadoNotas: [7, 2, 3, 5, 10],
    promedio: function () {
        let suma = 0;
        for (let i = 0; i < this.listadoNotas.length; i++) {
            suma += this.listadoNotas[i];
        }
        return suma / this.listadoNotas.length;
    },
    estaAprobado: function (notaMinima) {
        let promedio = this.promedio();
        return `El alumno ${this.nombre} esta ${promedio > notaMinima ? "aprobado" : "desaprobado"}. 
        Su nota promedio es: ${promedio}`;
    },
};
let alumnoAprobado = alumno.estaAprobado();
console.log(alumnoAprobado);