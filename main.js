var calcularEnVivo;

function cambioTipo(magnitud) {
  const origenLista = document.getElementById("origenlista");
  const destinoLista = document.getElementById("destinolista");

  origenLista.replaceChildren();
  destinoLista.replaceChildren();

  for (const [unidad, factor] of Object.entries(factores[magnitud])) {
    opt = document.createElement("option");
    opt.setAttribute("data-value", factor);
    opt.value = unidad;
    origenLista.appendChild(opt);
  }
  destinoLista.innerHTML = origenLista.innerHTML;
  document.getElementById("origen").value = document.getElementById(
    "destino",
  ).value = Object.keys(factores[magnitud])[0];
}

function calcular() {
  const VA = parseFloat(document.getElementById("valor").value);
  if (Number.isNaN(VA)) {
    document.getElementById("resultado").textContent =
      "Aquí aparecerá el resultado...";
    document.getElementById("invertido").replaceChildren();
    return;
  }
  const UO = parseFloat(
    document.querySelector(
      `#origenlista option[value='${document.getElementById("origen").value}']`,
    ).dataset.value,
  );
  const UD = parseFloat(
    document.querySelector(
      `#destinolista option[value='${
        document.getElementById("destino").value
      }']`,
    ).dataset.value,
  );
  document.getElementById("resultado").innerHTML = (VA * UO) / UD;
  document.getElementById("invertido").innerHTML = (VA * UD) / UO;
}
