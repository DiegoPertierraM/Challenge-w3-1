export class Character {
  name: string;
  house: string;
  age: number;
  isAlive: boolean;

  constructor(name: string, house: string, age: number, isAlive: boolean) {
    this.name = name;
    this.house = house;
    this.age = age;
    this.isAlive = isAlive;
  }

  // GiveOccupation() {
  //   return this.occupation;
  // }

  speak() {
    return `Soy ${this.name}`;
  }

  die() {
    this.isAlive = false;
    return this.isAlive;
  }
}
