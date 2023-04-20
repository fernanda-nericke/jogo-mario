const mario = document.querySelector('.mario')
//classe "mario" recebe os demais
const tubo = document.querySelector('.tubo')

const jump = () => {
    mario.classList.add('jump')
    //adiciona na classe "mario", a classe "jump" também

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 1300);
    //faz com que passe o tempo do pulo, e depois remova a classe para adicionar de novo, e o mario poder pular novamente
}


const loop = setInterval(() => {

    const tuboPosition = tubo.offsetLeft;

    //faz com que possamos pegar qualquer propriedade do css, que esteja na classe mario.
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    console.log('loop');

    //loop que vai sempre estar verificando se o jogo acabou ou não (se o mario encostou no tubo)
    if (tuboPosition <= 120 && tuboPosition > 0 && marioPosition < 80) {
        tubo.style.animation = 'none';
        tubo.style.left = `${tuboPosition}px`;

        //faz o mario parar onde ele encostou
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    } 

}, 10)


document.addEventListener('keydown', jump);
//adiciona qualquer tecla para fazer a função "pular"

