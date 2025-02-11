import { conectaApi } from "./conectaApi.js"

const formulario = document.querySelector('[data-formulario]')

async function upForm (evento){
    evento.preventDefault()
    const titulo = document.querySelector('[data-titulo]').value
    const url = document.querySelector('[data-url]').value
    const imagem = document.querySelector('[data-imagem]').value
    const descricao = `${Math.floor(Math.random()*10).toString()} mil visualizações`
    try{
    await conectaApi.criaVideo(titulo, url, imagem, descricao)
    window.location.href = "https://aluraplay-requisicoes-eta.vercel.app/pages/envio-concluido.html"
}catch(e){
    alert(e)
    // window.location.href = "../pages/erro-no-envio.html"
}
}

formulario.addEventListener('submit', evento => upForm(evento))
