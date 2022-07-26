const Decorator = function() {
    this.stock = []
}

Decorator.prototype.addPaint = function(paint) {
    this.stock.push(paint);
}

Decorator.prototype.totalLitres = function() {
    let total = 0;
    for (let paint of this.stock) {
        total += paint.litres;
    }
    return total;
}

Decorator.prototype.enoughPaint = function(room) {
    if (room.area > this.totalLitres()) {
        return false;
    } else {
        return true;
    }
}

Decorator.prototype.paintRoom = function(room) {
    if (this.enoughPaint(room)){
        room.paint();
        for (let paint of this.stock) {
            if (room.area > paint.litres) {
                room.area -= paint.litres;
                paint.litres = 0;
            } else {
                paint.litres -= room.area;
                room.area = 0;
            }
        }
    }
}
Decorator.prototype.removeEmpties = function() {
    for (let paint of this.stock) {
        if (paint.litres === 0) {
            index = this.stock.indexOf(paint)
            this.stock.splice(index, 1);
        }
    }
}

module.exports = Decorator;