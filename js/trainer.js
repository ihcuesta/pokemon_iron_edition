class Trainer {
  constructor(ctx, name, posX, posY, image, limit) {
    this.ctx = ctx,
      this.name = name,
      this.posX = posX,
      this.posY = posY,
      this.image = new Image();
    this.image.src = image;
    this.srcX = 0; // Posición x en el grid de imágenes
    this.srcY = 0; // Posición y en el grid de imágenes
    this.sheetWidth = 200; // Ancho del grid de imágenes
    // this.sheetHeight = 50; // Alto del grid de imágenes
    this.cols = 4; // Número de columnas en el grid de imágenes
    // this.rows = 4; // Número de filas en el grid de imágenes
    this.width = this.sheetWidth / this.cols; // El ancho de la imagen será el ancho total del grid de imágenes entre el número de columnas (es decir, el ancho de una columna)
    this.height = 50;

    this.framesIndex = 0;
    this.frames = 4;
    this.active = false;
    this.ready = false;
    this.limit = limit
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
    if (!this.active) {
      this.framesIndex = 0;
    } else {
      if (framesCounter % 10 === 0) {
        this.framesIndex++;

        if (this.framesIndex > 3) this.framesIndex = 0;
      }
    }

  }

  move(limit) {
    this.active = true;
    if (Game.screen === 1) {
      if (this.posX > limit) {
        this.posX -= 2;
      } else {
        this.active = false;
      }
    }
    if (Game.screen === 2) {
      if (this.posY > limit) {
        this.posY -= 2;
      } else {
        this.active = false;
      }
    }

    if (Game.screen === 3) {
      if (this.posY > limit) {
        this.posY -= 2;
      } else {
        this.active = false;
      }
    }
  }

  





}