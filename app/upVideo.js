import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector('[data-formulario]')

async function upForm (evento){
    evento.preventDefault()
    const titulo = document.querySelector('[data-titulo]').value
    const url = document.querySelector('[data-url]').value
    const imagem = document.querySelector('[data-imagem]').value
    await conectaApi.criaVideo(titulo, url, imagem)
    
    window.location.href = "../pages/envio-concluido.html"

}

formulario.addEventListener('submit', evento => upForm(evento))
