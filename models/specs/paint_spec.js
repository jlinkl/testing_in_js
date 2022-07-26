const assert = require("assert");
const Paint = require("../paint");

describe("Paint", function() {
    let paint;
    beforeEach(function() {
        paint = new Paint(10);
    });
    it("should return litres of paint", function() {
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    });
    it("should check if empty", function(){
        const actual = paint.isEmpty();
        assert.strictEqual(actual, false);
    })
    it("should be able to empty", function() {
        paint.empty();
        const actual = paint.litres;
        assert.strictEqual(actual, 0);
    });
})