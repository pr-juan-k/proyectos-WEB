let cantidadComensales = document.getElementById('comensales');
let sinAgregados = document.getElementById('ninguno');
let agregarPan = document.getElementById('pan');
let agregarEnsalada = document.getElementById('ensalada');
let agregarPanEnsalada = document.getElementById('panEnsalada');
let mensaje = document.getElementById('mensaje');


function formatCantidadGramos(cantidadKg) {
    let gramos = cantidadKg * 1000;
    return gramos >= 1000 ? (gramos / 1000).toFixed(2) + " kg" : gramos.toFixed(0) + " g";
}

function calcular() {
    let comensales = parseInt(cantidadComensales.value);
    if (!comensales || comensales <= 0) {
        mensaje.value = "Ingrese una cantidad válida de personas.";
        return;
    }

    let factor = 1;
    let extras = [];

    if (sinAgregados.checked) {
        factor = 1;
    } else if (agregarPanEnsalada.checked) {
        factor = 0.8;
        extras.push(
            "1 pan por persona",
            `${Math.ceil(comensales / 2)} tomates`,
            `${comensales} huevos`,
            `${(comensales * 0.25).toFixed(2)} lechugas`
        );
    } else {
        if (agregarPan.checked) {
            factor -= 0.1;
            extras.push("1 pan por persona");
        }
        if (agregarEnsalada.checked) {
            factor -= 0.1;
            extras.push(
                `${Math.ceil(comensales / 2)} tomates`,
                `${comensales} huevos`,
                `${(comensales * 0.25).toFixed(2)} lechugas`
            );
        }
    }

    let carne = comensales * 0.5 * factor;
    let chorizo = comensales * 0.2 * factor;
    let morcilla = comensales * 0.25 * factor;
    let gaseosa = comensales * factor;

    let resultado = "La cantidad de carne es: " + formatCantidadGramos(carne) +
        "\nLa cantidad de chorizos es: " + formatCantidadGramos(chorizo) +
        "\nLa cantidad de morcilla es: " + formatCantidadGramos(morcilla) +
        "\nLos litros de gaseosa son: " + gaseosa.toFixed(2) + " l";

    if (extras.length > 0) {
        resultado += "\nSe agrega:\n" + extras.join("\n");
    }

    mensaje.value = resultado;
}


function manejarSeleccion(checkbox) {
    if (checkbox === sinAgregados) {
        agregarPan.checked = false;
        agregarEnsalada.checked = false;
        agregarPanEnsalada.checked = false;
    } else {
        sinAgregados.checked = false;

        if (checkbox === agregarPanEnsalada) {
            agregarPan.checked = false;
            agregarEnsalada.checked = false;
        } else {
            agregarPanEnsalada.checked = false;
        }
    }
    calcular();
}


sinAgregados.addEventListener('change', function () {
    manejarSeleccion(sinAgregados);
});

agregarPan.addEventListener('change', function () {
    manejarSeleccion(agregarPan);
});

agregarEnsalada.addEventListener('change', function () {
    manejarSeleccion(agregarEnsalada);
});

agregarPanEnsalada.addEventListener('change', function () {
    manejarSeleccion(agregarPanEnsalada);
});


cantidadComensales.addEventListener('input', calcular);

