const preciosProductos = {
    sofa: 300,
    cama: 250,
    mesa: 150,
    silla: 50,
  };
  
  function calcularCostoTotal(productosSeleccionados) {
    let costoTotal = 0;
  
    for (let producto of productosSeleccionados) {
      if (preciosProductos.hasOwnProperty(producto)) {
        costoTotal += preciosProductos[producto];
      }
    }
  
    return costoTotal;
  }
  
  const productosIngresados = prompt("Ingrese productos a comprar: cama, silla, mesa o sofa, separados por comas, para ver el total de su compra:");
  const productosSeleccionados = productosIngresados.split(",");
  
  const costoTotal = calcularCostoTotal(productosSeleccionados);
  
  if (costoTotal === 0) {
    alert("No ha seleccionado ningún producto.");
  } else {
    alert("El costo total de su compra es: $" + costoTotal);
  }
  