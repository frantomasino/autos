// Código para la galería de imágenes
document.querySelectorAll('.btn-verfotos').forEach(boton => {
  boton.addEventListener('click', () => {
<<<<<<< HEAD
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
=======
     const card = boton.closest('.card-auto');
     const thumbnails = card.querySelector('.thumbnails');
     
     // Alternar entre mostrar y ocultar las miniaturas
     thumbnails.style.display = thumbnails.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Código para cambiar la imagen principal al hacer clic en las miniaturas
document.querySelectorAll('.thumbnails img').forEach(miniatura => {
  miniatura.addEventListener('click', (event) => {
     const card = miniatura.closest('.card-auto');
     const imgPrincipal = card.querySelector('.img-principal');
     imgPrincipal.src = event.target.src;  // Cambiar la imagen principal
>>>>>>> cd9d39b42b8f7772e20f13917d0911d8a052eadd
  });
});
