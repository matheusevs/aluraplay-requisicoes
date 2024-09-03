async function listarVideos()
{
    const conexao = await fetch("http://localhost:3000/videos");
    return await conexao.json();
}

async function criarVideo(titulo, descricao, url, imagem)
{
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem,
        }),
    });

    return await conexao.json();
}

async function buscarVideo(termoDeBusca)
{
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`);
    return conexao.json();
}

export const conectarApi = {
    listarVideos,
    criarVideo,
}