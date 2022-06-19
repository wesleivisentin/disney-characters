function randoom(min, max) {
    let randooms = (min, max) => Math.floor(Math.random() * (max - min) + min);
    return "s" + randooms(min, max)
}

console.log(randoom(1, 19));


const audioss = [
/*1 */    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
/*9 */    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
/*1 */    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
/*1 */    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
/*1 */    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
/*1 */    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },

 /*HADES*/   { s1: "src/audios/hades-1.mp3", s2: "src/audios/hades-2.mp3", s3: "src/audios/hades-3.mp3", s4: "src/audios/hades-4.mp3", s5: "src/audios/hades-5.mp3", s6: "src/audios/hades-6.mp3", s7: "src/audios/hades-7.mp3", s8: "src/audios/hades-8.mp3", s9: "src/audios/hades-9.mp3", s10: "src/audios/hades-10.mp3", s11: "src/audios/hades-11.mp3", s12: "src/audios/hades-12.mp3", s13: "src/audios/hades-13.mp3", s14: "src/audios/hades-14.mp3", s15: "src/audios/hades-15.mp3", s16: "src/audios/hades-16.mp3", s17: "src/audios/hades-17.mp3", s18: "src/audios/hades-18.mp3", },
   
 /*RAINHA MÁ*/{ s1: "src/audios/rainha-ma-1.mp3", s2: "src/audios/rainha-ma-2.mp3", s3: "src/audios/rainha-ma-3.mp3", s4: "src/audios/rainha-ma-4.mp3", s5: "src/audios/rainha-ma-5.mp3", s6: "src/audios/rainha-ma-6.mp3", s7: "src/audios/rainha-ma-7.mp3", s8: "src/audios/rainha-ma-8.mp3", s9: "src/audios/rainha-ma-9.mp3", s10: "src/audios/rainha-ma-10.mp3", s11: "src/audios/rainha-ma-11.mp3", s12: "src/audios/rainha-ma-12.mp3", s13: "src/audios/rainha-ma-13.mp3", s14: "src/audios/rainha-ma-14.mp3", s15: "src/audios/rainha-ma-15.mp3", s16: "src/audios/rainha-ma-16.mp3", s17: "src/audios/rainha-ma-17.mp3", s18: "src/audios/rainha-ma-18.mp3", },

    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },
    { 1: "", 2: "", 3: "" },

]


let chars = document.querySelectorAll('.personagem');


for (let i = 0; i < 54; i++) {

    chars[i].setAttribute('sound-item', i);
}

let audioTags = document.querySelector('.audios-personagens');

chars.forEach(botao => {
    botao.addEventListener('click', () => {
        let som = audioss[botao.getAttribute('sound-item')];





        audioTags.setAttribute('src', som[randoom(1, 19)]);

        audioTags.addEventListener('loadeddata', () => {
            audioTags.play();
        });
    });
});
