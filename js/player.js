class Player {
  constructor(ctx, x, y, image, keys, name) {
    this.ctx = ctx;
    this.notCheck = false;
    this.goOn = false;
    this.listo = false;
    this.image = new Image();
    this.image.src = image;
    this.framesCounter = 0;
    this.ableToMove = false;
    this.soundBattle = false;
    this.name = name;
    this.moving = false;

    this.posX = x;
    this.posY = y;

    this.limitUp = 0;
    this.limitRight = 750;
    this.limitDown = 450;
    this.limitLeft = 0;

    this.currentFrame = 0; // Frame actual del grid
    this.srcX = 0; // Posición x en el grid de imágenes
    this.srcY = 0; // Posición y en el grid de imágenes
    this.sheetWidth = 200; // Ancho del grid de imágenes
    this.sheetHeight = 200; // Alto del grid de imágenes
    this.cols = 4; // Número de columnas en el grid de imágenes
    this.rows = 4; // Número de filas en el grid de imágenes
    this.width = this.sheetWidth / this.cols; // El ancho de la imagen será el ancho total del grid de imágenes entre el número de columnas (es decir, el ancho de una columna)
    this.height = this.sheetHeight / this.rows; // El alto de la imagen será el alto total del grid de imágenes entre el número de filas (es decir, el alto de una fila)

    this.framesIndex = 0;
    this.frames = 4;

    this.trackDown = 0;
    this.trackLeft = 1;
    this.trackRight = 2;
    this.trackUp = 3;
    this.defaultPos = 3;

    this.keys = keys;
    this.setListeners() // Ejecuta los listeners para detectar qué va haciendo
  }

  draw(framesCounter) {
    // this.currentFrame = ++this.currentFrame % this.cols;
    this.srcX = this.framesIndex * Math.floor(this.image.width / this.frames);
    this.ctx.drawImage( // Cada línea es un argumento de la función drawImage
      this.image,
      this.srcX,
      this.srcY,
      50,
      50,
      this.posX,
      this.posY,
      50,
      50
    )
    if (this.moving) {
      this.animate(framesCounter)
    }
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 3) this.framesIndex = 0;
      this.moving = false;
    }
  }

  move(direction) {
    if (this.ableToMove) {
      if (Game.screen === 1) {
        if (direction === "up") {
          this.moving = true;
          this.srcY = this.trackUp * this.height;
          if (this.posX < 60) {
            this.posY -= 10;
          }
          if (this.posX > 60 && this.posY > 400) {
            this.posY -= 10;
          }
          if (!this.notCheck) {
            if (this.posY === 400 && this.posX > 330 && this.posX < 430) {
              textIntro("Mejor no interrumpir la clase. Da un rodeo.");
              this.notCheck = true;
            }
          }
          if (this.posY < 35) {
            this.activeBattle("Charizard", "img/charizard.gif", "img/charizard-2.gif", 1);
            this.soundBattle = true;
          }
        } else if (direction === "right") {
          this.moving = true;
          this.srcY = this.trackRight * this.height;
          if (this.posY > 390 && this.posX < this.limitRight) {
            this.posX += 10;
          } else if (this.posY < 390 && this.posX < 50) {
            this.posX += 10;
          }
        } else if (direction === "down") {
          this.moving = true;
          this.srcY = this.trackDown * this.height;
          if (this.posY < this.limitDown) {
            this.posY += 10;
          }
        } else if (direction === "left") {
          this.moving = true;
          this.srcY = this.trackLeft * this.height;
          if (this.posX > this.limitLeft) {
            this.posX -= 10;
          }
        }
      }

      if (Game.screen === 2) {
        if (direction === "up") {
          this.moving = true;
          this.srcY = this.trackUp * this.height;
          if (this.posY > 30) {
            this.posY -= 10;
          }
        }
        if (direction === "right") {
          this.moving = true;
          this.srcY = this.trackRight * this.height;
          if (this.posY < 100 && this.posX < this.limitRight) {
            this.posX += 10;
          }
          if (this.posY > 100 && this.posX < 60) {
            this.posX += 10;
          }
          if (this.posX > 555) {
            this.activeBattle("Blastoise", "img/b.gif", "img/b-2.gif", 2);
            this.soundBattle = true;
          }
        } else if (direction === "down") {
          this.moving = true;
          this.srcY = this.trackDown * this.height;
          if (this.posX > 60 && this.posY < 90) {
            this.posY += 10;
          }
          if (this.posX < 60 && this.limitDown) {
            this.posY += 10;
          }
        } else if (direction === "left") {
          this.moving = true;
          this.srcY = this.trackLeft * this.height;
          if (this.posX > this.limitLeft) {
            this.posX -= 10;
          }
        }
      }

      if (Game.screen === 3) {
        if (direction === "up") {
          this.moving = true;
          this.srcY = this.trackUp * this.height;
          if (this.posY > 280) {
            this.posY -= 10;
          }
        }
        if (direction === "right") {
          this.moving = true;
          this.srcY = this.trackRight * this.height;
          if (this.posY < 310) {
            this.posX += 10;
          }
          if (this.posY > 310 && this.posX < 350) {
            this.posX += 10;
          }

          if (this.posX > 475) {
            this.activeBattle("Raichu", "img/r.gif", "img/r-2.gif", 3);
            this.soundBattle = true;
          }
        } else if (direction === "down") {
          this.moving = true;
          this.srcY = this.trackDown * this.height;
          if (this.posX < 350 && this.posY < 380) {
            this.posY += 10;
          }
          if (this.posX > 350 && this.posY < 300) {
            this.posY += 10;
          }
        } else if (direction === "left") {
          this.moving = true;
          this.srcY = this.trackLeft * this.height;
          if (this.posX > this.limitLeft) {
            this.posX -= 10;
          }
        }
      }
    }
  }

  activeBattle(name, image, imageAttack, screen) {
    // setTimeout(function () {
    if (Game.screen === 1) {
      textIntro("¡Alto! Demuéstrame lo que has aprendido.");
    }
    if (Game.screen === 2) {
      textIntro("¡Quieto! ¡Pokemons display block!");
    }
    if (Game.screen === 3) {
      textIntro("¿Preparado para el módulo 2?");
    }
    // }, 500);
    setTimeout(function () {
      battle(name, image, imageAttack, screen);
    }, 2500);
  }

  firstSteps(name) {
    if (Game.framesCounter < 30) {
      if (Game.screen === 1) {
        this.srcY = this.trackUp * this.height;
        this.posY -= 2;
      }
      if (Game.screen === 2) {
        this.srcY = this.trackUp * this.height;
        this.posY -= 2;
        if (this.posY === 442) {
          textIntro("¡Bien hecho " + name + "! Encuentra tu clase.")
        }
      }
      if (Game.screen === 3) {
        this.srcY = this.trackRight * this.height;
        this.posX += 2;
        if (this.posX === 40) {
          textIntro("¡Bien peleado " + name + "! ¡Último nivel!")
        }
      }
    }
    this.ableToMove = true; // Recuerda igualarlo a false cuando se pase de pantalla
  }

  nextScreen() {
    if (Game.screen === 1 || Game.screen === 2) {
      if (this.goOn) {
        this.moving = true;
        this.srcY = this.trackUp * this.height;
        this.posY -= 1;
      }
    }

    if (Game.screen === 3) {
      if (this.goOn) {
        this.srcY = this.trackDown * this.height;
      }
    }
  }

  approach() {
    if (Game.screen === 1) {
      return this.posX + this.width;
    }
    if (Game.screen === 2) {
      return this.posY + this.height;
    }
    if (Game.screen === 3) {
      return this.posY + this.height;
    }
  }

  setListeners() {
    document.addEventListener('keydown', (e) => {
      switch (e.keyCode) {
        case this.keys.TOP_KEY:
          this.move("up");
          if (Game.screen === 2) {
            document.getElementById("screen2-audio").play();
          }
          break;
        case this.keys.RIGHT_KEY:
          this.move("right");
          if (Game.screen === 3) {
            document.getElementById("screen3-audio").play();
          }
          break;
        case this.keys.DOWN_KEY:
          this.move("down");
          break;
        case this.keys.LEFT_KEY:
          this.move("left");
          break;
      }
    })
  }

  activeSoundBattle() {
    if (this.soundBattle) {
      if (Game.screen === 1) {
        document.getElementById("screen1-audio").pause();
        document.getElementById("battle1-audio").play();
      }
      if (Game.screen === 2) {
        document.getElementById("screen2-audio").pause();
        document.getElementById("battle2-audio").play();
      }
      if (Game.screen === 3) {
        document.getElementById("screen3-audio").pause();
        document.getElementById("battle3-audio").play();
      }
    }
  }

  activeSoundVictory() {
    if (!this.soundBattle) {
      if (Game.screen === 1) {
        document.getElementById("battle1-audio").pause();
      }
      if (Game.screen === 2) {
        document.getElementById("battle2-audio").pause();
      }
      if (Game.screen === 3) {
        document.getElementById("battle3-audio").pause();
        document.getElementById("victory-audio").play();
      }
    }
  }
}