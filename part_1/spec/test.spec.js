var cal = require('../calculator');
var add = cal.add;
var multiply = cal.multiply;


describe("calculator", function(){
    describe("calculate addition", function(){
        it("should be able to add two numbers", function(){
            expect(add(2, 7)).toBe(9);
            expect(add(0, 0)).toBe(0);
            expect(add(-1, -1)).toBe(-2);
        });
        it("should be able to add more then two numbers", function(){
            expect(add(3, 5, 7, 9)).toBe(24);
        });
    });
    describe("calculate maltiplication", function(){
        it("should be able to multiply two numbers", function(){
            expect(multiply(0, 0)).toBe(0);
        });
        it("should be able to multiply more then two numbers", function(){
            expect(multiply(2, 4, 6)).toBe(48);
        });
    });
});