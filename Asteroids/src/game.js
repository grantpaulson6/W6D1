const Asteroid = require('./asteroid.js');

function Game (x = 1000, y = 600, num = 50) {
    this.DIM_X = x;
    this.DIM_Y = y;
    this.NUM_ASTEROIDS = num;
    this.asteroids = [];

    this.addAsteroids();
}

Game.prototype.addAsteroids = function() {
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        let asteroid = new Asteroid(this.randomPosition(), this);
        this.asteroids.push(asteroid);
    }
}

Game.prototype.randomPosition = function() {
    return [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach((asteroid) => asteroid.draw(ctx));
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach(asteroid => asteroid.move())
}

Game.prototype.wrap = function(pos) {
    const wrapPos = pos;
    if (pos[0] > 1000) {
        wrapPos[0] -= 1000;
    } else if (pos[0] < 0) {
        wrapPos[0] += 1000;
    } else if (pos[1] > 600) {
        wrapPos[1] -= 600;
    } else if (pos[1] < 0) {
        wrapPos[1] += 600;
    }
    return wrapPos;
}

Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.asteroids.length - 1; i++) {
        for (let j = i + 1; j < this.asteroids.length; j++) {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                this.asteroids[i].collideWith(this.asteroids[j])
            }
        }
    }
}

Game.prototype.remove = function(asteroid) {
    const i = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(i, 1);
}

module.exports = Game;