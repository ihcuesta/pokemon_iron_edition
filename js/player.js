class Player {
    constructor(ctx, width, height, image, gameWidth, gameHeight, keys) {  // Constructor
      this.ctx = ctx;               
  
      this.image = new Image();
      this.image.src = image;
  
      this.posX = 700;       // Lo coloca a 700px del borde izquierdo de la pantalla
      this.posY = 430;       // Lo coloca a 430px del borde superior de la pantalla
     
      this.gameWidth = gameWidth;
      
      this.sheetWidth = 200;    // Ancho del grid de imágenes
      this.sheetHeight = 200;   // Alto del grid de imágenes
      this.cols = 4;            // Número de columnas en el grid de imágenes
      this.rows = 4;            // Número de filas en el grid de imágenes
      this.width = sheetWidth / cols;    // El ancho de la imagen será el ancho total del grid de imágenes entre el número de columnas (es decir, el ancho de una columna)
      this.height = sheetHeight / rows;  // El alto de la imagen será el alto total del grid de imágenes entre el número de filas (es decir, el alto de una fila)

      this.framesIndex = 0;
  
      this.keys = keys;       
      this.setListeners()   // Ejecuta los listeners para detectar qué va haciendo
    }
  
    draw(framesCounter) {
      this.ctx.drawImage(       // Cada línea es un argumento de la función drawImage
        this.image,             // La imagen
        0,   // La x
        0,   // La y
        this.width,
        this.height,
        this.posX, 
        this.posY, 
        this.width, 
        this.height
        )
        this.clearBullets()
        this.bullets.forEach(bullet => bullet.draw())
        this.animate(framesCounter)
    }
  
    move() {
      if(this.posY <= this.posY0) {
        this.posY += this.vy;
        this.vy += this.gravity;
      } else {
        this.vy = 1;
        this.posY = this.posY0;
      }
      this.bullets.forEach(bullet => bullet.move())
    }
  
    animate(framesCounter) {
      if(framesCounter % 10 === 0) {
        this.framesIndex++;
  
        if(this.framesIndex > 2) this.framesIndex = 0;
      }
    }
  
    setListeners() {
      document.addEventListener('keydown', (e) => {
        switch(e.keyCode) {
          case this.keys.TOP_KEY:
            if(this.posY >= this.posY0) {
              this.posY -= this.vy;
              this.vy -= 10;
            }
            break;
          case this.keys.SPACE:
            this.shoot()
        }
      })
    }
  
    shoot() {
      this.bullets.push(new Bullet(this.ctx, 10, this.posX, this.posY, this.width, this.height, this.posY0))
    }
  
    clearBullets() {
      this.bullets = this.bullets.filter(bullet => bullet.posX <= this.gameWidth)
    }
  }