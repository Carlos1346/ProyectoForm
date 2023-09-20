$(document).ready(function() {
    var data = [];

    function actualizarTabla() {
        var tabla = $("#lista tbody");
        tabla.empty();

        for (var i = 0; i < data.length; i++) {
            var producto = data[i];
            var fila = `<tr data-index="${i}">
                            <td>${producto.ID}</td>
                            <td>${producto.Categoria}</td>
                            <td>${producto.Nombre}</td>
                            <td>${producto.Descripcion}</td>
                            <td>
                                <button class="btn btn-primary btn-editar">Editar</button>
                                <button class="btn btn-danger btn-eliminar">Eliminar</button>
                            </td>
                        </tr>`;
            tabla.append(fila);
        }
    }

    // Agregar o editar un producto
    $("#agregarEditar").click(function() {
        var id = $("#ID").val();
        var categoria = $("#Categoria").val();
        var nombre = $("#Nombre").val();
        var descripcion = $("#Descripcion").val();
        var editIndex = $("#editIndex").val();

        if (editIndex === "") {
            // Agregar nuevo producto
            data.push({
                ID: id,
                Categoria: categoria,
                Nombre: nombre,
                Descripcion: descripcion
            });
        } else {
            // Editar producto existente
            data[editIndex].ID = id;
            data[editIndex].Categoria = categoria;
            data[editIndex].Nombre = nombre;
            data[editIndex].Descripcion = descripcion;
            $("#editIndex").val(""); // Limpiar el índice de edición
        }

        // Limpiar los campos del formulario
        $("#ID").val("");
        $("#Categoria").val("");
        $("#Nombre").val("");
        $("#Descripcion").val("");

        // Actualizar la tabla
        actualizarTabla();
    });

    // Editar producto al hacer clic en el botón "Editar"
    $("#lista").on("click", ".btn-editar", function() {
        var index = $(this).closest("tr").data("index");
        var producto = data[index];
        $("#ID").val(producto.ID);
        $("#Categoria").val(producto.Categoria);
        $("#Nombre").val(producto.Nombre);
        $("#Descripcion").val(producto.Descripcion);
        $("#editIndex").val(index); // Almacenar el índice para edición
    });

    // Eliminar producto al hacer clic en el botón "Eliminar"
    $("#lista").on("click", ".btn-eliminar", function() {
        var index = $(this).closest("tr").data("index");
        data.splice(index, 1);
        actualizarTabla();
    });

    // Inicializar la tabla
    actualizarTabla();
});


