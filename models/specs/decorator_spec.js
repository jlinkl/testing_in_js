const assert = require("assert");
const Decorator = require("../decorator");
const Paint = require("../paint");
const Room = require("../room");

describe("Decorator", function() {
    let decorator;
    let paint;
    let paint2;
    let room;
    let room2;
    this.beforeEach(function () {
        decorator = new Decorator();
        paint = new Paint(10);
        paint2 = new Paint(12)
        room = new Room(12);
        room2 = new Room(8);
    })
    it("should start with an empty paint stock", function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    });
    it("should be able to add paint to stock", function(){
        decorator.addPaint(paint);
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    })
    it("should calculate total litres of paint in stock", function() {
        decorator.addPaint(paint);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 10);
    })
    it("should calculate if there is enough paint for room", function() {
        decorator.addPaint(paint);
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, false);
    })
    it("should be able to paint a room", function() {
        decorator.addPaint(paint)
        decorator.paintRoom(room2);
        const actual = room2.painted;
        assert.strictEqual(actual, true)
    })
    it("should decrease paint when painting a room", function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        decorator.paintRoom(room);
        const actual = decorator.totalLitres();
        assert.strictEqual(actual, 10);
    })
    it("should remove the empty cans", function() {
        decorator.addPaint(paint);
        decorator.addPaint(paint2);
        decorator.paintRoom(room);
        decorator.removeEmpties();
        const actual = decorator.stock.length;
        assert.strictEqual(actual, 1);
    })

})

