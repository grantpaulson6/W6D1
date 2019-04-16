const MovingObject = require('./moving_object.js');
const Util = require('./utils');

function Asteroid(pos, game){
    this.COLOR = 'purple';
    this.RADIUS = 10;  //maybe make random
    MovingObject.call(this, { 
        color: this.COLOR, 
        radius: this.RADIUS, 
        pos: pos, 
        vel: Util.randomVec(Math.random() * 20),
        game: game
    })
}

Util.inherits(MovingObject, Asteroid);

module.exports = Asteroid;

