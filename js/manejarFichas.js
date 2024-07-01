import { agregarFichas } from './api.js'

export async function manejarEnvioFormulario(event){
  event.preventDefault();

  const nombre = document.querySelector('#nombre').value
  const numAsegurado = document.querySelector('#numAsegurado').value
  const especialidad = document.querySelector('#especialidad').value

  console.log('Datos del formulario:', { nombre, numAsegurado, especialidad })

  const ficha = {
    nombre,
    numAsegurado,
    especialidad,
  }

  try {
    const respuesta = await agregarFichas(ficha)
    console.log('Respuesta del servidor:', respuesta)
    if (respuesta && respuesta.id) {
      console.log('Redireccionando a la página de solicitud exitosa')
      window.location.href = '../pages/solicitudExitosa.html'
    } else {
      console.error('La respuesta no contiene el ID esperado:', respuesta)
    }
  } catch (error){
    console.error('Error al agregar la ficha:', error)
  }
}
