// Código para la galería de imágenes
document.querySelectorAll('.btn-verfotos').forEach(boton => {
  boton.addEventListener('click', () => {
    const card = boton.closest('.card-auto');
    const thumbnails = card.querySelector('.thumbnails');
    const imgPrincipal = card.querySelector('.img-principal');
    
    // Mostrar u ocultar las miniaturas
    thumbnails.style.display = thumbnails.style.display === 'flex' ? 'none' : 'flex';
    
    // Cambiar la imagen principal solo si se hace clic en una miniatura
    thumbnails.querySelectorAll('img').forEach(mini => {
      mini.addEventListener('click', () => {
        // Cambiar la imagen principal solo si la imagen seleccionada es diferente
        if (mini.src !== imgPrincipal.src) {
          imgPrincipal.src = mini.src;
        }
      });
    });
  });
});
