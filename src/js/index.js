const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value
        

        

        function imagemP1(cal, cal2, cal3) {
            let imagemJogador = document.getElementById(cal)
            imagemJogador.src = `src/imagens/${cal2}/${cal3}2.png`
            
        }

        
       
        if(idSelecionado === "buzz-lightyear") {
           
        
            imagemP1("personagem-jogador-1","toy", idSelecionado)
            let nomeJogador1 = document.getElementById("nome-jogador-1")
            let nomeSelecionado = personagem.getAttribute("data-name")
            nomeJogador1.innerHTML = nomeSelecionado
           
            return
        }


         else if(idSelecionado === "jasmine") {
        
            imagemP1("personagem-jogador-11","alladin", idSelecionado)
            let nomeJogador11 = document.getElementById("nome-jogador-11")
            let nomeSelecionadoo = personagem.getAttribute("data-name")
            nomeJogador11.innerHTML = nomeSelecionadoo
            
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



// troca de desenho


const cenarios = document.querySelectorAll(".desenho")
const idCenario = document.querySelectorAll(".selecao-de-personagens")

   cenarios.forEach((cenario)=> {

        cenario.addEventListener("click", ()=> {

            //remove o desenho aberto
            const desenhoAberto = document.querySelector(".principal-selecionado")
            
            desenhoAberto.classList.remove("principal-selecionado")





            const idSelecionado = cenario.attributes.id.value
        //     console.log(idSelecionado);

            const idCenarioParaMostrar = "cenario-" + idSelecionado
            const cenarioParaMostrar = document.getElementById(idCenarioParaMostrar)
            cenarioParaMostrar.classList.add("principal-selecionado")




            const cenarioSelecionado = document.querySelector(".selected")
        
        cenarioSelecionado.classList.remove("selected")

            const cenarioAtivo = document.getElementById(idSelecionado)
            cenarioAtivo.classList.add("selected")




        // cenario.classList.add("selected")

        // //////////////////
        

         
        //  idCenario.attributes.id.value
        //  console.log(idCenario)
                
            


         
        
            


        })
   })


//    const cenarioSelecionadoPorJogador = document.querySelector(".principal-selecionado")
//         cenarioSelecionadoPorJogador.classList.remove("principal-selecionado")
//         cenario.classList.add("principal-selecionado")