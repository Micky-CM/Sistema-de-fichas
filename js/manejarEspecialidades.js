import { agregarEspecialidad } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const especialidadForm = document.querySelector('#especialidadForm');
  if (especialidadForm) {
    especialidadForm.addEventListener('submit', manejarEnvioEspecialidad);
  }
});

async function manejarEnvioEspecialidad(event) {
  event.preventDefault();

  const especialidad = document.querySelector('#especialidad').value;
  const cantidadFichas = document.querySelector('#cantidadFichas').value;

  console.log('Datos de la especialidad:', { especialidad, cantidadFichas });

  const nuevaEspecialidad = {
    nombre: especialidad,
    cantidadFichas: parseInt(cantidadFichas),
  };

  try {
    const respuesta = await agregarEspecialidad(nuevaEspecialidad);
    console.log('Respuesta del servidor:', respuesta);
    alert('Especialidad agregada exitosamente');
    especialidadForm.reset();
  } catch (error) {
    console.error('Error al agregar la especialidad:', error);
  }
}
