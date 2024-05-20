
let tareas = [];

function mostrarMenu() {
    return parseInt(prompt(
        "Administrador de Tareas\n" +
        "1. Agregar Tarea\n" +
        "2. Listar Tareas\n" +
        "3. Editar Tarea\n" +
        "4. Eliminar Tarea\n" +
        "0. Salir\n" +
        "Seleccione una opción (0-4):"
    ));
}

function agregarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea:");
    if (nombre.trim() === "") {
        alert("Error: El nombre de la tarea no puede estar vacío.");
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(nombre.trim())) {
        alert("Error: El nombre de la tarea solo puede contener letras.");
        return;
    }
    tareas.push(nombre.trim());
    alert("Tarea agregada correctamente.");
}

function listarTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas en la lista.");
        return;
    }
    let lista = "Lista de Tareas:\n";
    tareas.forEach((tarea, index) => {
        lista += `${index + 1}. ${tarea}\n`;
    });
    alert(lista);
}

function editarTarea() {
    let nombreActual = prompt("Ingrese el nombre de la tarea a editar:");
    let indice = tareas.indexOf(nombreActual.trim());
    if (indice === -1) {
        alert("Error: La tarea no existe.");
        return;
    }
    let nuevoNombre = prompt("Ingrese el nuevo nombre de la tarea:");
    if (nuevoNombre.trim() === "") {
        alert("Error: El nuevo nombre de la tarea no puede estar vacío.");
        return;
    }
    if (!/^[a-zA-Z\s]+$/.test(nuevoNombre.trim())) {
        alert("Error: El nuevo nombre de la tarea solo puede contener letras.");
        return;
    }
    tareas[indice] = nuevoNombre.trim();
    alert("Tarea editada correctamente.");
}

function eliminarTarea() {
    let nombre = prompt("Ingrese el nombre de la tarea a eliminar:");
    let indice = tareas.indexOf(nombre.trim());
    if (indice === -1) {
        alert("Error: La tarea no existe.");
        return;
    }
    tareas.splice(indice, 1);
    alert("Tarea eliminada correctamente.");
}

function iniciarPrograma() {
    let opcion;
    do {
        opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                listarTareas();
                break;
            case 3:
                editarTarea();
                break;
            case 4:
                eliminarTarea();
                break;
            case 0:
                alert("Saliendo del programa...");
                break;
            default:
                alert("Opción no válida. Por favor, seleccione una opción del 0 al 4.");
        }
    } while (opcion !== 0);
}

iniciarPrograma();

