import { manejarEnvioFormulario } from './manejarFichas.js'

document.addEventListener('DOMContentLoaded', ()=>{
  const fichaForm = document.querySelector('#fichaForm')
  if(fichaForm){
    fichaForm.addEventListener('submit', manejarEnvioFormulario)
  }
})
