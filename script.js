var pergunta = document.getElementById('pergunta');
const bt1 = document.getElementById('op1');
const bt2 = document.getElementById('op2');
const bt3 = document.getElementById('op3');
const bt4 = document.getElementById('op4');
const imsg = document.getElementById('imgs');

bt1.addEventListener('click', soma);
bt2.addEventListener('click', somaum);
bt3.addEventListener('click', somatres);
bt4.addEventListener('click', somaquatro);


var x = 0;

function soma() {
    x = (x + 1);
    console.log(x);
}

function somaum() {
    x = (x + 2);
    console.log(x);
}

function somatres() {
    x = (x + 3);
    console.log(x);
}

function somaquatro() {
    x = (x + 4);
    console.log(x);
}

pergunta.addEventListener("click", pergunta1);

function pergunta1(bt1, bt2, bt3, bt4) {

    corpo.style.display = "block";
    document.getElementById('pergunta').innerHTML = ('Qual sua cor preferida?');
    document.getElementById('op1').innerHTML = ('Azul')
    document.getElementById('op2').innerHTML = ('Preto');
    document.getElementById('op3').innerHTML = ('Vermelho');
    document.getElementById('op4').innerHTML = ('Outra');

    bt1 = document.getElementById('op1');
    bt2 = document.getElementById('op2');
    bt3 = document.getElementById('op3');
    bt4 = document.getElementById('op4');
    bt1.addEventListener('click', pergunta2);
    bt2.addEventListener('click', pergunta2);
    bt3.addEventListener('click', pergunta2);
    bt4.addEventListener('click', pergunta2);

    pergunta.removeEventListener('click', pergunta1);
    pergunta.style.backgroundColor = "#5CCAF2";

}

function pergunta2(bt1, bt2, bt3, bt4) {

    document.getElementById('pergunta').innerHTML = ('Você é mais?');
    document.getElementById('op1').innerHTML = ('Calmo');
    document.getElementById('op2').innerHTML = ('Impulsivo');
    document.getElementById('op3').innerHTML = ('Bravo');
    document.getElementById('op4').innerHTML = ('Preguiçoso');

    bt1 = document.getElementById('op1');
    bt2 = document.getElementById('op2');
    bt3 = document.getElementById('op3');
    bt4 = document.getElementById('op4');
    bt1.addEventListener('click', pergunta3);
    bt2.addEventListener('click', pergunta3);
    bt3.addEventListener('click', pergunta3);
    bt4.addEventListener('click', pergunta3);
}

function pergunta3(bt1, bt2, bt3, bt4) {

    document.getElementById('pergunta').innerHTML = ('Você  prefere:');
    document.getElementById('op1').innerHTML = ('Ninjutso');
    document.getElementById('op2').innerHTML = ('Taijutso');
    document.getElementById('op3').innerHTML = ('Doujutso');
    document.getElementById('op4').innerHTML = ('Seijutso');

    bt1 = document.getElementById('op1');
    bt2 = document.getElementById('op2');
    bt3 = document.getElementById('op3');
    bt4 = document.getElementById('op4');
    bt1.addEventListener('click', pergunta4);
    bt2.addEventListener('click', pergunta4);
    bt3.addEventListener('click', pergunta4);
    bt4.addEventListener('click', pergunta4);

}

function pergunta4(bt1, bt2, bt3, bt4) {

    document.getElementById('pergunta').innerHTML = ('Escolha uma frase:');
    document.getElementById('op1').innerHTML = ('Lar é onde tem alguém sempre pensando em você.');
    document.getElementById('op2').innerHTML = ('Não há luz, nem esperança, há apenas desespero.');
    document.getElementById('op3').innerHTML = ('É por termos laços, que sofremoss...');
    document.getElementById('op4').innerHTML = ('Desista de me fazer desistir!');

    bt1 = document.getElementById('op1');
    bt2 = document.getElementById('op2');
    bt3 = document.getElementById('op3');
    bt4 = document.getElementById('op4');
    bt1.addEventListener('click', perguntafinal);
    bt2.addEventListener('click', perguntafinal);
    bt3.addEventListener('click', perguntafinal);
    bt4.addEventListener('click', perguntafinal);

}

function perguntafinal(bt1, bt2, bt3, bt4) {
    document.getElementById('pergunta').innerHTML = ('O que é mais importante para você?');
    document.getElementById('op1').innerHTML = ('Fámilia');
    document.getElementById('op2').innerHTML = ('Dinheiro');
    document.getElementById('op3').innerHTML = ('Vingança');
    document.getElementById('op4').innerHTML = ('Outro');

    bt1 = document.getElementById('op1');
    bt2 = document.getElementById('op2');
    bt3 = document.getElementById('op3');
    bt4 = document.getElementById('op4');
    bt1.addEventListener('click', calcular);
    bt2.addEventListener('click', calcular);
    bt3.addEventListener('click', calcular);
    bt4.addEventListener('click', calcular);

}

function calcular() {

    if (x <= 5) {
        imsg.src = "n1.png";
        document.getElementById('pergunta').innerHTML = ('NARUTO UZUMAKY');
    } else if (x > 5 && x <= 7) {
        imsg.src = "n2.jpg";
        document.getElementById('pergunta').innerHTML = ('SASUKE UCHIRA');

    } else if (x > 7 && x <= 10) {
        imsg.src = "n3.jpg";
        document.getElementById('pergunta').innerHTML = ('KAKASHI HATAKE');

    } else if (x > 10 && x <= 13) {
        imsg.src = "n4.jpg";
        document.getElementById('pergunta').innerHTML = ('SHIKAMARU NARA');

    } else if (x > 13 && x <= 16) {
        imsg.src = "n9.jpg";
        document.getElementById('pergunta').innerHTML = ('ROCK LEE');

    } else if (x > 16 && x <= 19) {
        imsg.src = "n6.jpg";
        document.getElementById('pergunta').innerHTML = ('GAARA DO DESERTO');

    } else if (x > 19 && x <= 21) {
        imsg.src = "n7.jpg";
        document.getElementById('pergunta').innerHTML = ('PAIN');

    }

    corpo.style.display = "none";


}