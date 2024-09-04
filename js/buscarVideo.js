import { conectarApi } from "./conectarApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(event)
{
    event.preventDefault();

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const buscar = await conectarApi.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild)
    {
        lista.removeChild(lista.firstChild);
    }

    buscar.forEach(element => 
        lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem))
    );

    if (buscar.length == 0) {
        lista.innerHTML = '<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>';
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", event => buscarVideo(event));