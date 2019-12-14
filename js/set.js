class Set {
  constructor(ctx, image) {
    this.ctx = ctx;
    this.width = document.getElementById("canvas").width;
    this.height = document.getElementById("canvas").height;
    this.posX = 0;
    this.posY = 0;

    this.image = new Image();
    this.image.src = image;
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }

}