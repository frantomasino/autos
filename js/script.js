// Datos de detalle para cada auto
const detallesAutos = {
  ford: {
    motor: "1.8 Turbo",
    puertas: "5",
    color: "Blanco ",
    descripcion: "SUV con excelente equipamiento, techo panorámico, asistente de estacionamiento y más.",
  },
  nissan: {
    motor: "1.6",
    puertas: "4",
    color: "Gris Oscuro",
    descripcion: "Sedán con gran espacio interior, pantalla multimedia, sensores de estacionamiento.",
  },
  jeep: {
    motor: "2.0 Turbo",
    puertas: "5",
    color: "Blanco",
    descripcion: "SUV robusto con excelente performance, tracción 4x4, tapizado cuero.",
  },
  citroen: {
    motor: "1.6 HDi",
    puertas: "5",
    color: "Blanco",
    descripcion: "Ideal para familias, muy cómodo, bajo consumo, sistema multimedia moderno.",
  },
};




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



<<<<<<< HEAD



=======
const botonesWtp = document.querySelectorAll('.btn-wtp');

botonesWtp.forEach(boton => {
  boton.addEventListener('click', () => {
    const cardAuto = boton.closest('.card-auto');
    const marca = cardAuto.getAttribute('data-marca');
    const modelo = cardAuto.getAttribute('data-modelo');
    const anio = cardAuto.getAttribute('data-anio');

    // Armamos el mensaje que queremos enviar
    const mensaje = `Hola, estoy interesado en el ${marca} ${modelo} ${anio}.`;

    // Codificamos el mensaje para la URL
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Número de WhatsApp (poné el que uses)
    const numeroWtp = '5491159456142'; 

    // URL para enviar el mensaje
    const urlWtp = `https://wa.me/${numeroWtp}?text=${mensajeCodificado}`;

    // Abrimos WhatsApp en una nueva pestaña con el mensaje
    window.open(urlWtp, '_blank');
  });
});
>>>>>>> deb63791aacd4cc25a01625360799d810893567e
