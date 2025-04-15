export class Player {
    constructor(name, level) {
      this.name = name;// almacena el nombre del jugador
      this.level = level;// almacena el nivel del jugador
    }
      info() {
        console.log(`${this.name} has reached Level ${this.level}`);
      }
      // método para aumentar el nivel del jugador
      levelUp(){
        this.level += 1;
      }
    }
