import { Character } from './character';

export class Fighter extends Character {
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
    return super.speak() + `Primero pego y luego pregunto`;
  }
}
