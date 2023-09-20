// Declarar variables
var boton = document.getElementById('agregar');
var lista = document.getElementById('lista');
var boton = document.getElementById('agregarEditar');
var data = [];
var cant = 0;

// Botones
boton.addEventListener("click", agregar);

// Funciones
function agregar() {
    var ID = document.getElementById('ID').value;
    var Categoria = document.getElementById('Categoria').value;
    var Nombre = document.getElementById('Nombre').value;
    var Descripcion = document.getElementById('Descripcion').value;
    var editIndex = document.getElementById('editIndex').value;

    if (editIndex === "") {
        // Agregar un nuevo producto
        data.push({
            "id": cant,
            "ID": ID,
            "Categoria": Categoria,
            "Nombre": Nombre,
            "Descripcion": Descripcion
        });

        var id_row = 'row' + cant;
        var fila = '<tr id=' + id_row + '><td>' + ID + '</td><td>' + Categoria + '</td><td>' + Nombre + '</td><td>' + Descripcion + '</td><td><a href="#" class="btn btn-danger" onclick="eliminar(' + cant + ')">Eliminar</a><a href="#" class="btn btn-primary" onclick="editar(' + cant + ')">Editar</a></td></tr>';

        // Agregar a la tabla
        $("#lista tbody").append(fila);
        cant++;
    } else {
        // Editar el producto existente
        var productoEditado = data[editIndex];
        productoEditado.ID = ID;
        productoEditado.Categoria = Categoria;
        productoEditado.Nombre = Nombre;
        productoEditado.Descripcion = Descripcion;

        // Actualizar la fila en la tabla
        var filaEditada = '<td>' + ID + '</td><td>' + Categoria + '</td><td>' + Nombre + '</td><td>' + Descripcion + '</td><td><a href="#" class="btn btn-danger" onclick="eliminar(' + editIndex + ')">Eliminar</a><a href="#" class="btn btn-primary" onclick="editar(' + editIndex + ')">Editar</a></td>';
        $("#row" + editIndex).html(filaEditada);

        // Limpiar el formulario y el campo de edición
        $("#ID").val('');
        $("#Categoria").val('');
        $("#Nombre").val('');
        $("#Descripcion").val('');
        $("#editIndex").val('');
        $("#agregarEditar").text("Agregar");
    }
}

function eliminar(index) {
    // Eliminar la fila de la tabla usando jQuery
    $("#row" + index).remove();
    // Eliminar el elemento del arreglo
    data.splice(index, 1);
}
function editar(index) {
    // Obtener los datos del producto seleccionado
    var producto = data[index];
    
    // Llenar el formulario con los datos del producto
    $("#ID").val(producto.ID);
    $("#Categoria").val(producto.Categoria);
    $("#Nombre").val(producto.Nombre);
    $("#Descripcion").val(producto.Descripcion);

    // Actualizar el índice de edición
    $("#editIndex").val(index);
    
    // Cambiar el texto del botón "Agregar" a "Editar"
    $("#agregarEditar").text("Editar");
}


