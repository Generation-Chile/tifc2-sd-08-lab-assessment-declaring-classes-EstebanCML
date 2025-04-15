export class Player {
  constructor(name, level) {
    this.name = name;// almacena el nombre del jugador
    this.level = level;// almacena el nivel del jugador
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
    }
  }