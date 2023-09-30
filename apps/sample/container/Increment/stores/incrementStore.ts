import { makeAutoObservable } from "mobx";

class IncrementStore {
  constructor() {
    makeAutoObservable(this);
  }

  value = 0;

  setIncrementValue = () => {
    this.value++;
  };

  setDecrementValue = () => {
    this.value--;
  };

  get getValue() {
    return this.value;
  }
}

export const incrementStore = new IncrementStore();
