function randoom(min, max) {
    let randooms = (min, max) => Math.floor(Math.random() * (max - min) + min);
    return "s" + randooms(min, max)
}

console.log(randoom(1, 19));


const audioss = [
/*WOODY*/   { s1: "src/audios/woody-1.mp3", s2: "src/audios/woody-2.mp3", s3: "src/audios/woody-3.mp3", s4: "src/audios/woody-4.mp3", s5: "src/audios/woody-5.mp3", s6: "src/audios/woody-6.mp3", s7: "src/audios/woody-7.mp3", s8: "src/audios/woody-8.mp3", s9: "src/audios/woody-9.mp3", s10: "src/audios/woody-10.mp3", s11: "src/audios/woody-11.mp3", s12: "src/audios/woody-12.mp3", s13: "src/audios/woody-13.mp3", s14: "src/audios/woody-14.mp3", s15: "src/audios/woody-15.mp3", s16: "src/audios/woody-16.mp3", s17: "src/audios/woody-17.mp3", s18: "src/audios/woody-18.mp3", },
/*BETTY */    { s1: "src/audios/betty-1.mp3", s2: "src/audios/betty-2.mp3", s3: "src/audios/betty-3.mp3", s4: "src/audios/betty-4.mp3", s5: "src/audios/betty-5.mp3", s6: "src/audios/betty-6.mp3", s7: "src/audios/betty-7.mp3", s8: "src/audios/betty-8.mp3", s9: "src/audios/betty-9.mp3", s10: "src/audios/betty-10.mp3", s11: "src/audios/betty-11.mp3", s12: "src/audios/betty-12.mp3", s13: "src/audios/betty-13.mp3", s14: "src/audios/betty-14.mp3", s15: "src/audios/betty-15.mp3", s16: "src/audios/betty-16.mp3", s17: "src/audios/betty-17.mp3", s18: "src/audios/betty-18.mp3", },
/*BUZZ*/     { s1: "src/audios/buzz-1.mp3", s2: "src/audios/buzz-2.mp3", s3: "src/audios/buzz-3.mp3", s4: "src/audios/buzz-4.mp3", s5: "src/audios/buzz-5.mp3", s6: "src/audios/buzz-6.mp3", s7: "src/audios/buzz-7.mp3", s8: "src/audios/buzz-8.mp3", s9: "src/audios/buzz-9.mp3", s10: "src/audios/buzz-10.mp3", s11: "src/audios/buzz-11.mp3", s12: "src/audios/buzz-12.mp3", s13: "src/audios/buzz-13.mp3", s14: "src/audios/buzz-14.mp3", s15: "src/audios/buzz-15.mp3", s16: "src/audios/buzz-16.mp3", s17: "src/audios/buzz-17.mp3", s18: "src/audios/buzz-18.mp3", },
/*REX */    { s1: "src/audios/rex-1.mp3", s2: "src/audios/rex-2.mp3", s3: "src/audios/rex-3.mp3", s4: "src/audios/rex-4.mp3", s5: "src/audios/rex-5.mp3", s6: "src/audios/rex-6.mp3", s7: "src/audios/rex-7.mp3", s8: "src/audios/rex-8.mp3", s9: "src/audios/rex-9.mp3", s10: "src/audios/rex-10.mp3", s11: "src/audios/rex-11.mp3", s12: "src/audios/rex-12.mp3", s13: "src/audios/rex-13.mp3", s14: "src/audios/rex-14.mp3", s15: "src/audios/rex-15.mp3", s16: "src/audios/rex-16.mp3", s17: "src/audios/rex-17.mp3", s18: "src/audios/rex-18.mp3", },
/*SLINKY */    { s1: "src/audios/dog-1.mp3", s2: "src/audios/dog-2.mp3", s3: "src/audios/dog-3.mp3", s4: "src/audios/dog-4.mp3", s5: "src/audios/dog-5.mp3", s6: "src/audios/dog-6.mp3", s7: "src/audios/dog-7.mp3", s8: "src/audios/dog-8.mp3", s9: "src/audios/dog-9.mp3", s10: "src/audios/dog-1.mp3", s11: "src/audios/dog-2.mp3", s12: "src/audios/dog-3.mp3", s13: "src/audios/dog-4.mp3", s14: "src/audios/dog-5.mp3", s15: "src/audios/dog-6.mp3", s16: "src/audios/dog-7.mp3", s17: "src/audios/dog-8.mp3", s18: "src/audios/dog-9.mp3", },
/*ALIEN */    { s1: "src/audios/alien-1.mp3", s2: "src/audios/alien-2.mp3", s3: "src/audios/alien-3.mp3", s4: "src/audios/alien-4.mp3", s5: "src/audios/alien-5.mp3", s6: "src/audios/alien-6.mp3", s7: "src/audios/alien-7.mp3", s8: "src/audios/alien-8.mp3", s9: "src/audios/alien-9.mp3", s10: "src/audios/alien-10.mp3", s11: "src/audios/alien-1.mp3", s12: "src/audios/alien-2.mp3", s13: "src/audios/alien-3.mp3", s14: "src/audios/alien-4.mp3", s15: "src/audios/alien-5.mp3", s16: "src/audios/alien-6.mp3", s17: "src/audios/alien-7.mp3", s18: "src/audios/alien-8.mp3", },
/*GARFINHO */    { s1: "src/audios/garfo-1.mp3", s2: "src/audios/garfo-2.mp3", s3: "src/audios/garfo-3.mp3", s4: "src/audios/garfo-4.mp3", s5: "src/audios/garfo-5.mp3", s6: "src/audios/garfo-6.mp3", s7: "src/audios/garfo-7.mp3", s8: "src/audios/garfo-8.mp3", s9: "src/audios/garfo-9.mp3", s10: "src/audios/garfo-10.mp3", s11: "src/audios/garfo-11.mp3", s12: "src/audios/garfo-12.mp3", s13: "src/audios/garfo-13.mp3", s14: "src/audios/garfo-14.mp3", s15: "src/audios/garfo-15.mp3", s16: "src/audios/garfo-16.mp3", s17: "src/audios/garfo-17.mp3", s18: "src/audios/garfo-18.mp3", },
/*Porco */    { s1: "src/audios/porco-1.mp3", s2: "src/audios/porco-2.mp3", s3: "src/audios/porco-3.mp3", s4: "src/audios/porco-4.mp3", s5: "src/audios/porco-5.mp3", s6: "src/audios/porco-6.mp3", s7: "src/audios/porco-7.mp3", s8: "src/audios/porco-8.mp3", s9: "src/audios/porco-9.mp3", s10: "src/audios/porco-10.mp3", s11: "src/audios/porco-11.mp3", s12: "src/audios/porco-12.mp3", s13: "src/audios/porco-13.mp3", s14: "src/audios/porco-14.mp3", s15: "src/audios/porco-1.mp3", s16: "src/audios/porco-2.mp3", s17: "src/audios/porco-3.mp3", s18: "src/audios/porco-4.mp3", },
/*BATATA */    { s1: "src/audios/batata-1.mp3", s2: "src/audios/batata-2.mp3", s3: "src/audios/batata-3.mp3", s4: "src/audios/batata-4.mp3", s5: "src/audios/batata-5.mp3", s6: "src/audios/batata-6.mp3", s7: "src/audios/batata-7.mp3", s8: "src/audios/batata-8.mp3", s9: "src/audios/batata-9.mp3", s10: "src/audios/batata-10.mp3", s11: "src/audios/batata-11.mp3", s12: "src/audios/batata-12.mp3", s13: "src/audios/batata-13.mp3", s14: "src/audios/batata-14.mp3", s15: "src/audios/batata-15.mp3", s16: "src/audios/batata-16.mp3", s17: "src/audios/batata-17.mp3", s18: "src/audios/batata-18.mp3", },
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
/*BRANCA*/{ s1: "src/audios/branca-1.mp3", s2: "src/audios/branca-2.mp3", s3: "src/audios/branca-3.mp3", s4: "src/audios/branca-4.mp3", s5: "src/audios/branca-5.mp3", s6: "src/audios/branca-6.mp3", s7: "src/audios/branca-7.mp3", s8: "src/audios/branca-8.mp3", s9: "src/audios/branca-9.mp3", s10: "src/audios/branca-10.mp3", s11: "src/audios/branca-11.mp3", s12: "src/audios/branca-12.mp3", s13: "src/audios/branca-13.mp3", s14: "src/audios/branca-14.mp3", s15: "src/audios/branca-15.mp3", s16: "src/audios/branca-16.mp3", s17: "src/audios/branca-17.mp3", s18: "src/audios/branca-18.mp3", },
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
