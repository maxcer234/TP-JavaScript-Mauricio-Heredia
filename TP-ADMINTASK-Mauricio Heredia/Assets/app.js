let task = [];

function AgregarTarea() {
    let nuevaTarea = prompt("Ingrese Nueva Tarea");
    task.push(nuevaTarea);
    alert("Tarea Nueva: \n" + task.join("\n"));
    
}

function ListarTareas() {
    alert("Listado de Tareas: \n" + (task.length ? task.join("\n") : "No hay tareas"));
}

function EditarTarea() {
    if (task.length) {
        let opciones = parseInt(prompt("Ingrese el número de la tarea que desea editar (1 a " + task.length + "): ")) - 1;
        if (opciones >= 0 && opciones < task.length) {
            task[opciones] = prompt("Ingrese la nueva descripción de la tarea:");
            alert("Tarea editada: \n" + task.join("\n"));
        } else {
            alert("Índice no válido");
        }
    } else {
        alert("No hay tareas para editar");
    }
}

function EliminarTarea() {
    if (task.length) {
        let opciones = parseInt(prompt("Ingrese el número de la tarea que desea eliminar (1 a " + task.length + "): ")) - 1;
        if (opciones >= 0 && opciones < task.length) {
            task.splice(opciones, 1);
            alert("Tarea eliminada: \n" + (task.length ? task.join("\n") : "No hay tareas"));
        } else {
            alert("Índice no válido");
        }
    } else {
        alert("No hay tareas para eliminar");
    }
}

while (true) {
    let opciones = parseInt(prompt("Ingrese una de las opciones \n 1 Agregar Tarea \n 2 Listar Tareas \n 3 Editar Tarea \n 4 Eliminar Tarea \n 5 Salir"));
    
    switch(opciones) {
        case 1:
            AgregarTarea();
            break;
        case 2:
            ListarTareas();
            break;
        case 3:
            EditarTarea();
            break;
        case 4:
            EliminarTarea();
            break;
        case 5:
            alert("Saliendo del programa");
            exit();
            break;
        default:
            alert("Opción no válida");
    }
}
