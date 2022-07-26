const Paint = function(litres) {
    this.litres = litres;
}

Paint.prototype.isEmpty = function() {
    if (this.litres !== 0){
        return false;
    } else {
        return true;
    }
}

Paint.prototype.empty = function() {
    this.litres = 0;
}
module.exports = Paint;