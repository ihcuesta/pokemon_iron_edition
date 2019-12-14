class Set {
        constructor(ctx, image) {
          this.ctx = ctx;
          this.width = 800;
          this.height = 500;
          this.posX = 0;
          this.posY = 0;
      
          this.image = new Image();
          this.image.src = image;
        }
      
        draw() {
          this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
        }
      
}