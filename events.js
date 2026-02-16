cambioTipo(Object.keys(factores)[0]);
calcular();

select_type = document.getElementById("tipo_seleccionado");

select_type.addEventListener("change", function () {
  cambioTipo(this.value);
  calcular();
});

for (const tipo2s of Object.keys(factores)) {
  opt = new Option(tipo2s, tipo2s);
  select_type.appendChild(opt);
}

campoEntrada = document.getElementById("valor");

campoEntrada.addEventListener("focus", function () {
    calcularEnVivo = setInterval(calcular, 1);
});

campoEntrada.addEventListener("blur", function () {
    clearInterval(calcularEnVivo);
});

origenLista = document.getElementById("origenlista");
destinoLista = document.getElementById("destinolista");

origenLista.addEventListener("blur", calcular);
destinoLista.addEventListener("blur", calcular);
