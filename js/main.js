import { manejarEnvioFormulario } from './manejarFichas.js';
import { obtenerEspecialidades } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const fichaForm = document.querySelector('#fichaForm');
  if (fichaForm) {
    fichaForm.addEventListener('submit', manejarEnvioFormulario);
  }
  const especialidadSelect = document.querySelector('#especialidad');
  if (especialidadSelect) {
    try {
      const especialidades = await obtenerEspecialidades();
      especialidades.forEach(especialidad => {
        const option = document.createElement('option');
        option.value = especialidad.nombre;
        option.textContent = especialidad.nombre;
        especialidadSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error al obtener las especialidades:', error);
    }
  }
});
