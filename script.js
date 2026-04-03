window.addEventListener('load', () => {
  // CARRITO DE COMPRAS
  const botonesComprar = document.querySelectorAll('.btn-comprar');
  const contadorCarrito = document.getElementById('contador-carrito');
  const popupOverlay = document.getElementById('popup-overlay');
  const btnCerrar = document.getElementById('btn-cerrar');
  let total = 0;

  botonesComprar.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      e.preventDefault();
      total++;
      contadorCarrito.textContent = total;

      boton.textContent = '✅ Agregado';
      setTimeout(() => {
        boton.textContent = 'Comprar';
      }, 1500);

      popupOverlay.classList.add('activo');
    });
  });

  // Cierra el popup checkout
  btnCerrar.addEventListener('click', () => {
    popupOverlay.classList.remove('activo');
  });

  // Cierra al confirmar
  const btnPagar = document.querySelector('.btn-pagar');
  btnPagar.addEventListener('click', () => {
    popupOverlay.classList.remove('activo');
    contadorCarrito.textContent = 0;
    total = 0;
  });

  // POPUP BIENVENIDA
  const bienvenidaOverlay = document.getElementById('bienvenida-overlay');
  const btnBienvenida = document.getElementById('btn-bienvenida');

  btnBienvenida.addEventListener('click', () => {
    bienvenidaOverlay.style.display = 'none';
  });
});