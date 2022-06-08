const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value
        

        function nomeP1(call,call2){
            let nomeJogador1 = document.getElementById(call)
            let nomeSelecionadoo = personagem.getAttribute("data-name")
            nomeJogador1.innerHTML = nomeSelecionadoo

            let imagemJogador = document.getElementById(call)
            imagemJogador.src = `src/imagens/${call2}/${idSelecionado}2.png`
        }
      
       
        if(idSelecionado === "buzz-lightyear") {
           
            nomeP1("personagem-jogador-1", "toy")
            return
        }
         else if(idSelecionado === "jasmine") {
        
            nomeP1("personagem-jogador-11", "alladin")
            return

        }


        const personagemSelecionado = document.querySelector(".selecionado")
        
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")


        ///////
        function trocarJogador(cb,cbb){
            let imagemDoJoador = document.getElementById(cb)
            imagemDoJoador.src = `src/imagens/${cbb}/${idSelecionado}.png`
        }

        function trocarNome(cb1){
            let nomeDojogador = document.getElementById(cb1)
            let nomeSelecionado = personagem.getAttribute("data-name")
            nomeDojogador.innerHTML = nomeSelecionado
        }

        
        
        trocarJogador("personagem-jogador-1", "toy")
        trocarNome("nome-jogador-1")
        trocarJogador("personagem-jogador-11", "alladin")
        trocarNome("nome-jogador-11")

 

    })

})



//troca de desenho


const cenarios = document.querySelectorAll(".desenho")

   cenarios.forEach((cenario)=> {

        cenario.addEventListener("click", ()=> {

        })
   })
