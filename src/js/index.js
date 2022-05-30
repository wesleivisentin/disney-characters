const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value
        console.log(personagem);
       
       
        if(idSelecionado === "buzz-lightyear") {
            let imagemJogador = document.getElementById("personagem-jogador-1")
            imagemJogador.src = `src/imagens/toy/${idSelecionado}2.png`

            const nomeJogador11 = document.getElementById("nome-jogador-1")
         const nomeSelecionadoo = personagem.getAttribute("data-name")
         nomeJogador11.innerHTML = nomeSelecionadoo
            return
        }
         else if(idSelecionado === "jasmine") {
            let imagemJogador = document.getElementById("personagem-jogador-11")
            imagemJogador.src = `src/imagens/alladin/${idSelecionado}2.png`
            
            
            const nomeJogador11 = document.getElementById("nome-jogador-11")
         const nomeSelecionadoo = personagem.getAttribute("data-name")
         nomeJogador11.innerHTML = nomeSelecionadoo
            return

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



        
        const imagemJogador11 = document.getElementById("personagem-jogador-11")
        imagemJogador11.src = `src/imagens/alladin/${idSelecionado}.png`

         const nomeJogador11 = document.getElementById("nome-jogador-11")
         const nomeSelecionadoo = personagem.getAttribute("data-name")
         nomeJogador11.innerHTML = nomeSelecionadoo


    })

})



//troca de desenho