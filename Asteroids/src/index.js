console.log("its ALIVE")
const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const Game = require('./game.js');
const GameView = require('./game_view.js');

window.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');
    // let options = {
    //     pos: [50, 50],
    //     color: 'red',
    //     radius: 25,
    //     vel: [10,10]
    // }
    // let moving_object = new MovingObject(options);
    // moving_object.draw(ctx);

    // let asteroid = new Asteroid([50, 50]);
    // asteroid.draw(ctx);

    // let game = new Game(canvas.width, canvas.height);
    // game.draw(ctx);
    const gameView = new GameView(ctx);
    gameView.start();
});

window.MovingObject = MovingObject;