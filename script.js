alert('С помощью WASD и стрелок можно крутить куб');

let rotateY = 0,
    rotateX = 0;

const cube = document.querySelector('.cube');
document.onkeydown = function(e) {
    if (e.code == 'ArrowUp' || e.code === 'KeyW') rotateX += 4;
    if (e.code == 'ArrowDown' || e.code === 'KeyS') rotateX -= 4;
    if (e.code == 'ArrowLeft' || e.code === 'KeyA') rotateY -= 4;
    if (e.code == 'ArrowRight' || e.code === 'KeyD') rotateY += 4;
    cube.style = `transform: rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
}

const side = document.querySelectorAll('.side');

side.forEach((item, i, arr) => {
    item.onmousedown = function() {
        this.onmousemove = (e) => {
            let mX = e.movementX,
                mY = e.movementY;

            if (mX > 0) rotateY += 2;
            if (mX < 0) rotateY -= 2;
            if (mY > 0) rotateX -= 2;
            if (mY < 0) rotateX += 2;
            cube.style = `transform: rotateY(${rotateY}deg) rotateX(${rotateX}deg);`;
        }

        this.onmouseup = () => this.onmousemove = false;
    }
})