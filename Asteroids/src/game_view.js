const Game = require('./game.js');

function GameView(ctx) {
    this.game = new Game();
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    setInterval(() => {
        this.game.moveObjects.call(this.game);
        this.game.draw.call(this.game, this.ctx);
        this.game.checkCollisions.call(this.game);
    }, 20);
}

module.exports = GameView;