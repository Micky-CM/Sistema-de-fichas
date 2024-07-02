import { obtenerFichas, actualizarFicha, obtenerEspecialidades } from './api.js';

async function cargarColas() {
  const colasContainer = document.querySelector('#colas-container');

  if (!colasContainer) {
    console.error('Contenedor de colas no encontrado');
    return;
  }

  colasContainer.innerHTML = ''; // Limpiar el contenedor antes de cargar las colas

  try {
    const fichas = await obtenerFichas();
    const especialidades = await obtenerEspecialidades();
    const colas = {};

    especialidades.forEach(especialidad => {
      colas[especialidad.nombre] = fichas.filter(ficha => ficha.especialidad === especialidad.nombre && !ficha.atendido);
    });

    for (const [especialidad, fichas] of Object.entries(colas)) {
      const especialidadContainer = document.createElement('div');
      especialidadContainer.classList.add('especialidad-container');

      const especialidadTitle = document.createElement('h3');
      especialidadTitle.textContent = `Especialidad: ${especialidad.charAt(0).toUpperCase() + especialidad.slice(1)}`;
      especialidadContainer.appendChild(especialidadTitle);

      if (fichas.length === 0) {
        const sinFichas = document.createElement('p');
        sinFichas.textContent = 'No hay fichas en la cola';
        especialidadContainer.appendChild(sinFichas);
      } else {
        const tablaFichas = document.createElement('table');
        const encabezado = document.createElement('tr');
        encabezado.innerHTML = `
          <th>Nombre</th>
          <th>Número de Asegurado</th>
          <th>Acciones</th>
        `;
        tablaFichas.appendChild(encabezado);

        fichas.forEach((ficha, index) => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${ficha.nombre}</td>
            <td>${ficha.numAsegurado}</td>
            <td></td>
          `;
          
          if (index === 0) {
            const atenderButton = document.createElement('button');
            atenderButton.textContent = 'Marcar como atendido';
            atenderButton.addEventListener('click', async () => {
              ficha.atendido = true;
              await actualizarFicha(ficha);
              cargarColas(); // Recargar las colas después de actualizar una ficha
            });
            fila.querySelector('td:last-child').appendChild(atenderButton);
          }

          tablaFichas.appendChild(fila);
        });

        especialidadContainer.appendChild(tablaFichas);
      }

      colasContainer.appendChild(especialidadContainer);
    }
  } catch (error) {
    console.error('Error al cargar las colas:', error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  cargarColas();
});
