const personagens = document.querySelectorAll(".personagem")

personagens.forEach((personagem) => {

    personagem.addEventListener("mouseenter", () => {

        const idSelecionado = personagem.attributes.id.value
        

        

        function imagemP1(cal, cal2, cal3) {
            let imagemJogador = document.getElementById(cal)
            imagemJogador.src = `src/imagens/${cal2}/${cal3}2.png`
            
        }

        
       
        if(idSelecionado === "buzz-lightyear") {
           
        
            imagemP1("personagem-jogador-1","chars", idSelecionado)
            let nomeJogador1 = document.getElementById("nome-jogador-1")
            let nomeSelecionado = personagem.getAttribute("data-name")
            nomeJogador1.innerHTML = nomeSelecionado
           
            return
        }


         else if(idSelecionado === "jasmine") {
        
            imagemP1("personagem-jogador-11","chars", idSelecionado)
            let nomeJogador11 = document.getElementById("nome-jogador-11")
            let nomeSelecionadoo = personagem.getAttribute("data-name")
            nomeJogador11.innerHTML = nomeSelecionadoo
            
            return

        }

        const personagemSelecionado = document.querySelector(".selecionado")
        
        personagemSelecionado.classList.remove("selecionado")

        personagem.classList.add("selecionado")


        ///////
        function trocarJogador(cb,){
            let imagemDoJoador = document.getElementById(cb)
            imagemDoJoador.src = `src/imagens/chars/${idSelecionado}.png`
        }

        function trocarNome(cb1){
            let nomeDojogador = document.getElementById(cb1)
            let nomeSelecionado = personagem.getAttribute("data-name")
            nomeDojogador.innerHTML = nomeSelecionado
        }
      
        trocarJogador("personagem-jogador-1" )
        trocarNome("nome-jogador-1")
        trocarJogador("personagem-jogador-11")
        trocarNome("nome-jogador-11")

    })
})

// troca de desenho

const cenarios = document.querySelectorAll(".desenho")
const idCenario = document.querySelectorAll(".selecao-de-personagens")
const backgrounCenario = document.querySelector("#background")

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




           
              
            // document.getElementById("background").style.backgroundImage = `url("../imagens/back-${idSelecionado}.jpg")`;
            


         document
            
            


        })
        
   })
   
//    backgrounCenario.style.backgroundImage = `url("../imagens/back-${idSelecionado}.jpg")`
//    const cenarioSelecionadoPorJogador = document.querySelector(".principal-selecionado")
//         cenarioSelecionadoPorJogador.classList.remove("principal-selecionado")
//         cenario.classList.add("principal-selecionado")


// const btn1 = document.querySelector("#toy-story") 

// btn1.addEventListener("click", () =>{

//     document.body.style.backgroundImage = `url("../imagens/back-toy-story.jpg")`;
//     alert(document.body.style.backgroundImage);
// })