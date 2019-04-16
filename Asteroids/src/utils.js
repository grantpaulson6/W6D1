
const Util = {
    inherits: function inherits(parent, child) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    },
    randomVec: function randomVec(length) {
        const deg = 2 * Math.PI * Math.random();
        return Util.scale([Math.sin(deg), Math.cos(deg)], length);
    },
      // Scale the length of a vector by the given amount.
    scale: function scale(vec, m) {
        return [vec[0] * m, vec[1] * m];
    }
}



module.exports = Util;