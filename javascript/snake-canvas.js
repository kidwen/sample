let wrapCtx;
let ctx;
if (snakeWrap.getContext) wrapCtx = snakeWrap.getContext('2d');
if (snake.getContext) ctx = snake.getContext('2d');
const snakeObj = {
    direction: 'right',
    moveTimeout: 500,
    gameOver: false,
    noDeath: false,
    data: [
        {
            x: 3,
            y: 0,
        },
        {
            x: 2,
            y: 0,
        },
        {
            x: 1,
            y: 0,
        },
        {
            x: 0,
            y: 0,
        },
    ],
}
function init() {
    if (!wrapCtx || !ctx) return;
    ctx.reset();
    for (const item of snakeObj.data) {
        drawSnake(item.x, item.y);
    }
    setInterval(() => {
        move();
    }, snakeObj.moveTimeout);
}
function drawSnake(x, y) {
    ctx.fillStyle = '#aaa';
    ctx.fillRect(x * 10, y * 10, 10, 10);
}
function move() {
    const last = snakeObj.data.pop();
    let x, y;
    if (snakeObj.direction === 'right') {
        x = snakeObj.data[0].x + 1;
        y = snakeObj.data[0].y;
    }
    if (snakeObj.direction === 'left') {
        x = snakeObj.data[0].x - 1;
        y = snakeObj.data[0].y;
    }
    if (snakeObj.direction === 'top') {
        x = snakeObj.data[0].x;
        y = snakeObj.data[0].y - 1;
    }
    if (snakeObj.direction === 'bottom') {
        x = snakeObj.data[0].x;
        y = snakeObj.data[0].y + 1;
    }
    last.x = x;
    last.y = y;
    snakeObj.data.unshift(last);
    // ctx.clearRect(0, 0, 300, 300);
    ctx.reset();
    snakeObj.data.forEach(item => {
        drawSnake(item.x, item.y);
    });
}

(function () {
    wrapCtx.strokeStyle = '#333';
    for (let index = 0; index <= 30; index++) {
        for (let direction = 0; direction < 2; direction++) {
            wrapCtx.beginPath();
            if (direction === 0) {
                wrapCtx.moveTo(0, index * 10);
                wrapCtx.lineTo(10 * 30, index * 10);
            } else {
                wrapCtx.moveTo(index * 10, 0);
                wrapCtx.lineTo(index * 10, 10 * 30);
            }
            wrapCtx.stroke();
        }
    }
    wrapCtx.save();
})();
window.onkeydown = function (e) {
    if (e.key || e.code) {
        if ((e.key === 'ArrowDown' || e.key === 's') && snakeObj.direction !== 'top') {
            snakeObj.direction = 'bottom';
        }
        if ((e.key === 'ArrowUp' || e.key === 'w') && snakeObj.direction !== 'bottom') {
            snakeObj.direction = 'top';
        }
        if ((e.key === 'ArrowLeft' || e.key === 'a') && snakeObj.direction !== 'right') {
            snakeObj.direction = 'left';
        }
        if ((e.key === 'ArrowRight' || e.key === 'd') && snakeObj.direction !== 'left') {
            snakeObj.direction = 'right';
        }
        if (snakeObj.gameOver || snakeObj.noDeath) {
            snakeObj.noDeath = false;
            snakeObj.moveTimeout = 1000;
            init();
        }
    }
};
init();
