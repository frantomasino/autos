// Código para los filtros
const btnFiltro = document.querySelector('.btn-filtro');
const autos = document.querySelectorAll('.card-auto');

btnFiltro.addEventListener('click', () => {
  const marcaSeleccionada = document.getElementById('marca').value;
  const modelo = document.getElementById('modelo').value;
  const anioSeleccionado = document.getElementById('anio').value;

  autos.forEach(auto => {
    const marca = auto.dataset.marca;
    const modelo = auto.dataset.modelo;
    const anio = auto.dataset.anio;

    const coincideMarca = !marcaSeleccionada || marca === marcaSeleccionada;
    const coincideModelo = !modeloSeleccionada || modelo === modeloSeleccionada;
    const coincideAnio = !anioSeleccionado || anio === anioSeleccionado;

    if (coincideMarca && coincideModelo && coincideAnio ) {
      auto.style.display = 'block';
    } else {
      auto.style.display = 'none';
    }
  });
});

// Código para la galería de imágenes
document.querySelectorAll('.btn-verfotos').forEach(boton => {
  boton.addEventListener('click', () => {
    const card = boton.closest('.card-auto');
    const thumbnails = card.querySelector('.thumbnails');
    thumbnails.style.display = thumbnails.style.display === 'flex' ? 'none' : 'flex';

    thumbnails.querySelectorAll('img').forEach(mini => {
      mini.addEventListener('click', () => {
        const imgPrincipal = card.querySelector('.img-principal');
        if (mini.src !== imgPrincipal.src) {
          imgPrincipal.src = mini.src;
        }
      });
    });
  });
});
