import { obtenerFichas } from "./api.js"

document.addEventListener('DOMContentLoaded', async ()=>{
  const tablaFichas = document.querySelector('#tablaFichas')
  try {
    const fichas = await obtenerFichas()
    fichas.forEach(ficha =>{
      const fila = document.createElement('tr')
      fila.innerHTML = `
        <td>${ficha.nombre}</td>
        <td>${ficha.numAsegurado}</td>
        <td>${ficha.especialidad}</td>
        <td>${ficha.atendido}</td>
      `
      tablaFichas.appendChild(fila)
    })
  } catch (error){
    console.error('Error al obtener las fichas:', error)
  }
})
