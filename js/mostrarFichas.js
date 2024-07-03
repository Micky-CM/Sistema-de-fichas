import { obtenerFichas } from "./api.js"

document.addEventListener('DOMContentLoaded', async ()=>{
  const tablaFichas = document.querySelector('#tablaFichas')
  try {
    const fichas = await obtenerFichas()
    fichas.forEach(ficha =>{
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td class="tb-row">${ficha.nombre}</td>
        <td class="tb-row">${ficha.numAsegurado}</td>
        <td class="tb-row">${ficha.especialidad}</td>
        <td class="tb-row">${ficha.atendido}</td>
      `
      tablaFichas.appendChild(fila)
    })
  } catch (error){
    console.error('Error al obtener las fichas:', error)
  }
})
