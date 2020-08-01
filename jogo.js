console.log('[PatrickCruz] Flappy Birdy');

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('Canvas');
const contexto = canvas.getContext('2d');

const flappyBird = {
spriteX: 0,
spriteY: 0,
largura: 33,
altura: 24,
x: 10,
y: 50,
}


function loop() {
    contexto.drawImage(
        sprites,
        0, 0,
        33, 24,
        10, 50,
        33, 24,
    );

    requestAnimationFrame(loop);
}

loop();
