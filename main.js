var calcularEnVivo;

function cambioTipo(magnitud) {
    var optstr = "";
    for (const [unidad, factor] of Object.entries(factores[magnitud])) {
        optstr += `<option data-value='${factor}' value='${unidad}'></option>`;
    }
    document.getElementById("origenlista").innerHTML =
        document.getElementById("destinolista").innerHTML = optstr;
    document.getElementById("origen").value = document.getElementById(
        "destino"
    ).value = Object.keys(factores[magnitud])[0];
}

function calcular() {
    const VA = parseFloat(document.getElementById("valor").value);
    if (Number.isNaN(VA)) {
        document.getElementById("resultado").innerHTML =
            "Aquí aparecerá el resultado...";
        document.getElementById("invertido").innerHTML = "";
        return;
    }
    const UO = parseFloat(
        document.querySelector(
            `#origenlista option[value='${document.getElementById("origen").value
            }']`
        ).dataset.value
    );
    const UD = parseFloat(
        document.querySelector(
            `#destinolista option[value='${document.getElementById("destino").value
            }']`
        ).dataset.value
    );
    document.getElementById("resultado").innerHTML = (VA * UO) / UD;
    document.getElementById("invertido").innerHTML = (VA * UD) / UO;
}