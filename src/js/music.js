
let musicas = [
    {caminho:'src/music/toy-story-theme.mp3'},
    {caminho:'src/music/aladdin.mp3'},
    {caminho:'src/music/os-incriveis.mp3'},
    {caminho:'src/music/mickey.mp3'},
    {caminho:'src/music/princess.mp3'},
    {caminho:'src/music/villains.mp3'},
    
];

let botoes = document.querySelectorAll('.desenho');


for (let i=0; i < 6; i++){
    
    botoes[i].setAttribute('data-item', i);
}

let audioTag = document.querySelector('.musicas-cenarios');

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = musicas[botao.getAttribute('data-item')];
        audioTag.setAttribute('src', som.caminho);
        
        audioTag.addEventListener('loadeddata', () => {
            audioTag.play();
        });
    });
});

