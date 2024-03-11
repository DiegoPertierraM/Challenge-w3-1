import { Character } from './character';

export class King extends Character {
  constructor(
    name: string,
    house: string,
    age: number,
    isAlive: boolean,
    advisorTo: string
  ) {
    super(name, house, age, isAlive);
  }

  speak() {
    return super.speak() + `Vais a morir todos`;
  }
}
