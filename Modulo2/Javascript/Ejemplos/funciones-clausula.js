let taller = function(nombre_taller) {
    return nombre_alumno => 
       'El alumno ' + nombre_alumno + ' se ha inscrito en el taller de ' + nombre_taller;
}

let alumnos_programacion = taller('programación');
let alumnos_soldadura = taller('programación');



console.log(alumnos_programacion('Juan Perez'));
console.log(alumnos_soldadura('pedro Perez'));
console.log(alumnos_soldadura('carlos Perez'));

