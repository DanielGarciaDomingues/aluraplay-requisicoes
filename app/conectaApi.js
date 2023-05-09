// "http://localhost:3000/videos"
async function listaVideos(){
    const conectaApi = await fetch("http://localhost:3000/videos");
    const mostraApi = await conectaApi.json();
    return mostraApi
}


export const conectaApi = {
    listaVideos,
}
