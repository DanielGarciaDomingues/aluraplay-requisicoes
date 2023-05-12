

// "http://localhost:3000/videos"
async function listaVideos(){
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida
}


async function criaVideo(titulo, url, imagem){
    const conexao = await fetch("http://localhost:3000/videos",{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url,
            imagem: imagem,
            descricao: `${Math.floor(Math.random()*10).toString()} mil visualizações`,
        })
    })
    if(!conexao.ok){
        throw new Error('Não foi possivel carregar o video')
    }
        const conexaoConvertida = await conexao.json()
        return conexaoConvertida
    }
async function pesquisaVideo(string){
    const conexao = await fetch(`http://localhost:3000/videos?q=${string}`)
    const conexaoConvertida = await conexao.json()
    return conexaoConvertida
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    pesquisaVideo,

}
