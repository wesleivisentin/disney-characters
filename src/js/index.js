const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value
       
       
        if(idSelecionado === "buzz-lightyear") {
            idSelecionado = "buzz-lightyear2"
        }




        const personagemSelecionado = document.querySelector(".selecionado")
        
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")


        ///////
        const imagemJogador1 = document.getElementById("personagem-jogador-1")
        imagemJogador1.src = `src/imagens/toy/${idSelecionado}.png`

         const nomeJogador1 = document.getElementById("nome-jogador-1")
         const nomeSelecionado = personagem.getAttribute("data-name")
         nomeJogador1.innerHTML = nomeSelecionado


    })

})