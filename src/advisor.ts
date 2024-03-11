import { Character } from './character';

export class Advisor extends Character {
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
    return super.speak() + 'No sé por qué, pero creo que voy a morir pronto';
  }
}
