function agregarAlumno(valores) {
	// Obtener los valores de los inputs
	var nombre = document.getElementById("nombre").value;
	var apellidos = document.getElementById("apellidos").value;
	var edad = document.getElementById("edad").value;
	var materias = document.getElementById("materias").value;
	var calificaciones = document.getElementById("calificaciones").value;

	// Crear una nueva fila en la tabla
	var tabla = document.getElementById("tabla-alumnos").getElementsByTagName("tbody")[0];
	var fila = tabla.insertRow();
	var celdaNombre = fila.insertCell(0);
	var celdaApellidos = fila.insertCell(1);
	var celdaEdad = fila.insertCell(2);
	var celdaMaterias = fila.insertCell(3);
	var celdaCalificaciones = fila.insertCell(4);

	// Agregar los valores a la nueva fila
	celdaNombre.innerHTML = fila.nombre;
	celdaApellidos.innerHTML = fila.apellidos;
	celdaEdad.innerHTML = fila.edad;
	celdaMaterias.innerHTML = fila.materias;
	celdaCalificaciones.innerHTML = fila.calificaciones;

	// Limpiar los inputs
	document.getElementById("nombre").value = "";
	document.getElementById("apellidos").value = "";
	document.getElementById("edad").value = "";
	document.getElementById("materias").value = "";
	document.getElementById("calificaciones").value = "";
}
	