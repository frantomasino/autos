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



// Abrir modal al hacer clic en "Detalle"
document.querySelectorAll('.btn-detalle').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id');
    const datos = detallesAutos[id];
    if (datos) {
      document.getElementById('detalleMotor').textContent = datos.motor;
      document.getElementById('detallePuertas').textContent = datos.puertas;
      document.getElementById('detalleColor').textContent = datos.color;
      document.getElementById('detalleDescripcion').textContent = datos.descripcion;
      document.getElementById('tituloDetalle').textContent = `Detalle del vehículo (${id.toUpperCase()})`;
    }
    document.getElementById('modalDetalle').style.display = 'block';
  });
});

// Cerrar modal
document.querySelector('.modal .close').addEventListener('click', () => {
  document.getElementById('modalDetalle').style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target.id === 'modalDetalle') {
    document.getElementById('modalDetalle').style.display = 'none';
  }
});

// Datos de detalle para cada auto
const detallesAutos = {
  ford: {
    motor: "1.8 Turbo",
    puertas: "5",
    color: "Blanco Perlado",
    descripcion: "SUV con excelente equipamiento, techo panorámico, asistente de estacionamiento y más.",
  },
  nissan: {
    motor: "1.6",
    puertas: "4",
    color: "Negro",
    descripcion: "Sedán con gran espacio interior, pantalla multimedia, sensores de estacionamiento.",
  },
  jeep: {
    motor: "2.0 Turbo",
    puertas: "5",
    color: "Gris oscuro",
    descripcion: "SUV robusto con excelente performance, tracción 4x4, tapizado cuero.",
  },
  citroen: {
    motor: "1.6 HDi",
    puertas: "5",
    color: "Plateado",
    descripcion: "Ideal para familias, muy cómodo, bajo consumo, sistema multimedia moderno.",
  },
};





