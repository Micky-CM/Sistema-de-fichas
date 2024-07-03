import { agregarFichas, obtenerEspecialidades, obtenerFichas } from './api.js';

async function manejarEnvioFormulario(event) {
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value;
  const numAsegurado = document.querySelector('#numAsegurado').value;
  const especialidad = document.querySelector('#especialidad').value;

  try {
    const especialidades = await obtenerEspecialidades();
    const fichas = await obtenerFichas();
    const especialidadSeleccionada = especialidades.find(e => e.nombre === especialidad);
    const fichasPorEspecialidad = fichas.filter(f => f.especialidad === especialidad);

    if (fichasPorEspecialidad.length >= especialidadSeleccionada.cantidadFichas) {
      alert('No se pueden agregar más fichas para esta especialidad.');
      return;
    }

    const nuevaFicha = {
      nombre,
      numAsegurado,
      especialidad: especialidadSeleccionada.nombre,
      atendido: false
    };

    const fichaCreada = await agregarFichas(nuevaFicha);
    // Guardar detalles de la ficha en localStorage
    localStorage.setItem('fichaCreada', JSON.stringify({
      nombre: fichaCreada.nombre,
      numAsegurado: fichaCreada.numAsegurado,
      especialidad: fichaCreada.especialidad,
      numeroFicha: fichasPorEspecialidad.length + 1
    }));

    window.location.href = 'http://localhost:5500/pages/solicitudExitosa.html';
  } catch (error) {
    console.error('Error al agregar la ficha:', error);
    alert('Hubo un error al intentar agregar la ficha.');
  }
}

document.querySelector('[data-form]').addEventListener('submit', manejarEnvioFormulario);

export { manejarEnvioFormulario };