document.addEventListener('DOMContentLoaded', () => {
  const resumenFichaContainer = document.querySelector('#resumenFicha');
  
  const fichaCreada = JSON.parse(localStorage.getItem('fichaCreada'));
  
  if (fichaCreada) {
    resumenFichaContainer.innerHTML = `
      <p><strong>Nombre Completo:</strong> ${fichaCreada.nombre}</p>
      <p><strong>Número de Asegurado:</strong> ${fichaCreada.numAsegurado}</p>
      <p><strong>Especialidad:</strong> ${fichaCreada.especialidad}</p>
      <p><strong>Número de Ficha:</strong> ${fichaCreada.numeroFicha}</p>
    `;

    // Limpiar los datos del localStorage después de mostrarlos
    localStorage.removeItem('fichaCreada');
  } else {
    resumenFichaContainer.innerHTML = '<p>No se encontró información de la ficha registrada.</p>';
  }
});
