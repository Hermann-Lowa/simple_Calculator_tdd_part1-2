module.exports = class Calculator {

    constructor() {
        this.slot = [];
    }

    add() {
        let sum = 0;
        for (let j = 0; j < arguments.length; j++) {
          sum += arguments[j];
        }
        this.num = sum;
        return sum;
      }

      multiply() {
        let product = 1;
        for (let j = 0; j < arguments.length; j++) {
          product *= arguments[j];
        }
        this.num = product;
        return product;
      }

      last() {
        return this.num;
      }

      set_slot(slot_number) {
        this.slot.push(this.last());
      }
      
      get_slot(slot_number) {
        return this.slot[slot_number - 1];
      }
};