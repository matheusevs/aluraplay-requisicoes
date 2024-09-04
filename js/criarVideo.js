import { conectarApi } from "./conectarApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(event)
{
    event.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    
    try {
        await conectarApi.criarVideo(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html"; 
    } catch (error) {
        alert(error)
    }
}

formulario.addEventListener("submit", event => criarVideo(event));