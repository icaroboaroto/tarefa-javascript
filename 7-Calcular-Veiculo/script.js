function calcularCusto() {
  let custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
  let percDistribuidor = parseFloat(document.getElementById('percDistribuidor').value);
  let percImpostos = parseFloat(document.getElementById('percImpostos').value);

  let custoFinal = custoFabrica + (custoFabrica * (percDistribuidor / 100)) + (custoFabrica * (percImpostos / 100));

  document.getElementById('valorfinal').value = custoFinal.toFixed(2);
}

document.getElementById('btnCalcular').addEventListener('click', calcularCusto);