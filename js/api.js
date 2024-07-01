const apiUrl = 'http://localhost:3000/fichas'

export async function obtenerFichas(){
  const response = await fetch(apiUrl)
  if (!response.ok) throw new Error('No se pudo mostrar las fichas')
  return await response.json()
}

export async function agregarFichas(ficha){
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ficha),
  })
  if (!response.ok) throw new Error('No se pudo agregar la ficha')
  return await response.json()
}
