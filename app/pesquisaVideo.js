import { conectaApi } from "./conectaApi.js";
import constroeCard from "./mostraVideos.js";
//constroeCard(titulo, descricao, url, imagem)


async function pVideo(evento){
    evento.preventDefault()
    const dadosPesquisa = document.querySelector('[data-pesquisa]').value
    const resultadoPesquisa = await conectaApi.pesquisaVideo(dadosPesquisa)
    const lista = document.querySelector('[data-lista]')
    while(lista.firstChild){
            lista.removeChild(lista.firstChild)
    }

        resultadoPesquisa.forEach(elemento => lista.appendChild(constroeCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
        if(dadosPesquisa.length == 0){
            lista.innerHTML = `<h2 class="mensagem__titulo">Comece inserindo dados na sua pesquisa</h2>`
        }
        if(!lista.firstChild){
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum resultado foi encontrado</h2>`
    }}
    
    
    
    
const pButton = document.querySelector('[data-pButton]');
pButton.addEventListener('click', evento => pVideo(evento))