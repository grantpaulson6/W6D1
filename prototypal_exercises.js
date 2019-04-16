
Function.prototype.inherits = function (parent) {
    function Surrogate() {};
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
}

Function.prototype.inherits2 = function (parent) {
    
    this.prototype = Object.create(parent.prototype);
    this.prototype.constructor = this;

}

function MovingObject () {}
MovingObject.prototype.move = function() {
    console.log('we moving');
}

function Ship () {}
Ship.inherits2(MovingObject);

function Asteroid () {}
Asteroid.inherits2(MovingObject);
Asteroid.prototype.contents = function() {
    console.log('rocks on rocks');
}

a = new Asteroid();
console.log(a.move());
console.log(a.contents());

s = new Ship();
console.log(s.move());
console.log(s.contents());
