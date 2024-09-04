import { conectarApi } from "./conectarApi.js";

async function buscarVideo(event)
{
    event.preventDefault();
    
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const buscar = await conectarApi.buscarVideo(dadosDePesquisa);
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", event => buscarVideo(event));