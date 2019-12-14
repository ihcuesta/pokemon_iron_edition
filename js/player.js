class Player {
  constructor(ctx, x, y, image, keys) { // Constructor
    this.ctx = ctx;
    this.notCheck = false;
    this.goOn = false;
    this.listo = false;
    this.image = new Image();
    this.image.src = image;
    this.framesCounter = 0;
    this.ableToMove = false;

    this.posX = x; // Lo coloca a 700px del borde izquierdo de la pantalla
    this.posY = y; // Lo coloca a 430px del borde superior de la pantalla

    this.limitUp = 0;
    this.limitRight = 750;
    this.limitDown = 450;
    this.limitLeft = 0;

    // this.gameWidth = gameWidth;

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
      this.image, // La imagen
      this.srcX, // Posición x en el grid de imágenes
      this.srcY, // La y
      50,
      50,
      this.posX,
      this.posY,
      50,
      50
    )

    this.animate(framesCounter)
  }

  animate(framesCounter) {
    if (framesCounter % 10 === 0) {
      this.framesIndex++;

      if (this.framesIndex > 3) this.framesIndex = 0;
    }
  }

  move(direction) {
    if (this.ableToMove) {
      if (Game.screen === 1) {
        if (direction === "up") {

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
          if (this.posY === 40) {
            this.activeBattle();
          }
        } else if (direction === "right") {
          this.srcY = this.trackRight * this.height;
          if (this.posY > 390 && this.posX < this.limitRight) {
            this.posX += 10;
          } else if (this.posY < 390 && this.posX < 50) {
            this.posX += 10;
          }
        } else if (direction === "down") {
          this.srcY = this.trackDown * this.height;
          if (this.posY < this.limitDown) {
            this.posY += 10;
          }
        } else if (direction === "left") {
          this.srcY = this.trackLeft * this.height;
          if (this.posX > this.limitLeft) {
            this.posX -= 10;
          }
        }
      }

      if (Game.screen === 2) {
        if (direction === "up") {
          this.srcY = this.trackUp * this.height;
          if (this.posY > 30) {
            this.posY -= 10;
          }
        }
        if (direction === "right") {
          this.srcY = this.trackRight * this.height;
          if (this.posY < 100 && this.posX < this.limitRight) {
            this.posX += 10;
          }
          if (this.posY > 100 && this.posX < 60) {
            this.posX += 10;
          }
          if (this.posX === 560) {
            this.activeBattle();

          }


        } else if (direction === "down") {
          this.srcY = this.trackDown * this.height;
          if (this.posX > 60 && this.posY < 90) {
            this.posY += 10;
          }
          if (this.posX < 60 && this.limitDown) {
            this.posY += 10;
          }

        } else if (direction === "left") {
          this.srcY = this.trackLeft * this.height;
          if (this.posX > this.limitLeft) {
            this.posX -= 10;
          }
        }
      }
    }
  }





activeBattle() {
  setTimeout(function () {
    textIntro("¡Alto! Demuéstrame lo que has aprendido");
  }, 2000);
  setTimeout(function () {
    document.getElementById("battle").className = "visible";
  }, 5000);
}


firstSteps() {
  if (Game.framesCounter < 30) {
    if (Game.screen === 1) {
      this.srcY = this.trackUp * this.height;
      this.posY -= 2;
    }
    if (Game.screen === 2) {
      this.srcY = this.trackUp * this.height;
      this.posY -= 2;
    }
    if (Game.screen === 3) {
      this.srcY = this.trackRight * this.height;
      this.posX += 2;
    }
  }
  this.ableToMove = true; // Recuerda igualarlo a false cuando se pase de pantalla
}

nextScreen() {

  if (this.goOn) {
    this.srcY = this.trackUp * this.height;
    this.posY -= 1;
  }
}

approach() {
  if (Game.screen === 1) {
    return this.posX + this.width;
  }
  if (Game.screen === 2) {
    return this.posY + this.height;
  }
}


setListeners() {
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case this.keys.TOP_KEY:
        this.move("up");
        break;
      case this.keys.RIGHT_KEY:
        this.move("right");
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

}