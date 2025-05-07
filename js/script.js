// Mostrar/ocultar galería y cambiar imagen principal

document.querySelectorAll('.btn-verfotos').forEach(boton => {
  boton.addEventListener('click', () => {
    const card = boton.closest('.card-auto');
    const thumbnails = card.querySelector('.thumbnails');
    const imgPrincipal = card.querySelector('.img-principal');

    // Alternar visibilidad
    thumbnails.style.display = thumbnails.style.display === 'flex' ? 'none' : 'flex';

    // Agregar evento a las miniaturas 
    thumbnails.querySelectorAll('img').forEach(mini => {
      mini.onclick = () => {
        if (mini.src !== imgPrincipal.src) {
          imgPrincipal.src = mini.src;
        }
      };
    });
  });
});
