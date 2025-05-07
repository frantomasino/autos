// Código para la galería de imágenes
document.querySelectorAll('.btn-verfotos').forEach(boton => {
  boton.addEventListener('click', () => {
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
  });
});
