const Calculator = require('../calculator');
let calculator = new Calculator;

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
    describe("calculater should create and use last carried out operation", function () {
        it("should get last operation", function() {
            expect(calculator.multiply(2,2)).toBe(4);
            expect(calculator.last()).toBe(4);
        });

        it("should use result from last operation for a new operation", function() {
            expect(calculator.multiply(6,6)).toBe(36);
            let LAST = calculator.last();
            expect(calculator.multiply(LAST,2)).toBe(72);
        });
    });

    describe("arrange and create slot", function(){
        it("should be to make slot from last operation", function() {
            expect(calculator.multiply(9,9)).toBe(81);
            calculator.set_slot(1);
            expect(calculator.get_slot(1)).toBe(81);
            expect(calculator.add(9,9)).toBe(18);
            calculator.set_slot(2);
            expect(calculator.get_slot(2)).toBe(18);
            calculator.get_slot(1);
            expect(calculator.last()).toBe(18);
            let SLOT_1 = calculator.get_slot(1);
            expect(calculator.add(SLOT_1,2)).toBe(83);
            let SLOT_2 =calculator.get_slot(2);
            expect(calculator.multiply(SLOT_2,2)).toBe(36);
            expect(calculator.last()).toBe(36);
        });
    });
});