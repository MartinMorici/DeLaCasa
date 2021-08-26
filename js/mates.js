setTimeout(()=>{
    let mates = productos.filter(p => p.tipo === "mate");
    console.log(mates);
    interfazProductos(mates)
    // filtrado.onclick = filtrarPorPrecio(termos);
    let filtrado = document.getElementById("filtro1");
    filtrado.addEventListener("click", function () {
      filtrarPorPrecio(mates);
    });
},1000)
