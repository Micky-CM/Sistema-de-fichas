const apiUrlEspecialidades = 'http://localhost:3000/especialidades';
const apiUrlFichas = 'http://localhost:3000/fichas';

export async function obtenerFichas() {
  const response = await fetch(apiUrlFichas);
  if (!response.ok) throw new Error('No se pudo mostrar las fichas');
  return await response.json();
}

export async function agregarFichas(ficha) {
  const response = await fetch(apiUrlFichas, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ficha),
  });
  if (!response.ok) throw new Error('No se pudo agregar la ficha');
  return await response.json();
}

export async function obtenerEspecialidades() {
  const response = await fetch(apiUrlEspecialidades);
  if (!response.ok) throw new Error('No se pudo mostrar las especialidades');
  return await response.json();
}

export async function agregarEspecialidad(especialidad) {
  const response = await fetch(apiUrlEspecialidades, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(especialidad),
  });
  if (!response.ok) throw new Error('No se pudo agregar la especialidad');
  return await response.json();
}

export async function actualizarFicha(ficha) {
  const response = await fetch(`${apiUrlFichas}/${ficha.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ficha),
  });
  if (!response.ok) throw new Error('No se pudo actualizar la ficha');
  return await response.json();
}
