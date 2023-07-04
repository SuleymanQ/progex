import { defineStore } from "pinia";

export const useMoneyStore = defineStore("money-store", {
  state() {
    return {
      result: 0,
      form: {
        base: 0,
        percentage: 0,
        times: 0,
      },
    };
  },
  actions: {
    calc() {
      this.result = this.form.base;
      for (let time = 0; time < this.form.times; time++) {
        this.result += (this.form.percentage / 100) * this.result;
      }
      this.result = parseFloat(this.result.toFixed(2));
    },
    reset() {
      this.result = 0;
    },
  },
});
