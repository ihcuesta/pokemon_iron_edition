const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  fps: 60,
  framesCounter: 0,
  screen,
  playerKeys: {
    LEFT_KEY: 37,
    TOP_KEY: 38,
    RIGHT_KEY: 39,
    DOWN_KEY: 40
  },
  interval: null,


  init: function (name) {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.width = 800;
    this.height = 500;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.start(390, 500, "img/escenario1.png", 1, "Trainer 1", 200, 30, "img/trainer.png", name);
    textIntro("¡Hola " + name + "! ¡Bienvenido a Iron Hack!");
  },

  // Game loop
  start: function (playerX, playerY, setImage, screen, trainerName, trainerX, trainerY, trainerImage, name) {
    this.screen = screen;
    this.trainer = new Trainer(this.ctx, trainerName, trainerX, trainerY, trainerImage)
    this.set = new Set(this.ctx, setImage);
    this.player = new Player(this.ctx, playerX, playerY, 'img/ashframes2.png', this.playerKeys, name);

    this.interval = setInterval(() => { // En este intervalo se irán actualizando los frames
      this.player.firstSteps(name);
      this.framesCounter++; // Aumenta un frame al contador de frames
      this.player.activeSoundBattle();

      this.clear(); // 1. LIMPIA: Ejecuta la función clear (limpia el canvas)
      this.drawAll(); // 2. PINTA: Ejecuta la función drawAll (pinta todo lo que hay que pintar)
       
      this.trainerApproach();
      this.player.nextScreen();
      this.endLevel(name);
      // console.log(this.player.posX + " , " + this.player.posY)
      // if(this.framesCounter > 1000) this.framesCounter = 0; 
    }, 1000 / this.fps)
    // Define que el canvas se va a refrescar cada 16,6 milisegundos, es decir, 60 actualizaciones por segundo (60 fps, tasa de refresco recomendada en videojuegos )
  },


  clear: function () {
    this.ctx.clearRect(0, 0, this.width, this.height) // Limpia el canvas 
  },

  drawAll: function () { // Pinta todo lo que hay que pintar mediante el método draw de cada objeto
    this.player.draw(this.framesCounter);
    this.set.draw();
    this.trainer.draw(this.framesCounter);
  },

  moveAll: function () {
    this.player.move(direction, this.set.limitUp, this.set.limitRight, this.set.limitDown, this.set.limitLeft, )
  },

  trainerApproach(limit) {
    if (this.screen === 1) {
      if (this.player.posY < 35) {
        this.player.ableToMove = false;
        this.trainer.move(this.player.approach())
      }
    }
    if (this.screen === 2) {
      if (this.player.posX > 550) {
        this.player.ableToMove = false;
        this.trainer.move(this.player.approach())
      }
    }

    if (this.screen === 3) {
      if (this.player.posX > 475) {
        this.player.ableToMove = false;
        this.trainer.move(this.player.approach())
      }
    }
  },

  endLevel(name) {
    if (this.screen === 1) {
      if (this.player.posY < 0) {
        clearInterval(this.interval);
        this.framesCounter = 0;
        this.start(50, 500, "img/escenario2.png", 2, "Trainer 2", 560, 170, "img/trainer2.png", name);
        console.log(this.player.name)
      }
    }
    if (this.screen === 2) {
      if (this.player.posY < 0) {
        clearInterval(this.interval);
        this.framesCounter = 0;
        this.start(-50, 300, "img/escenario3.png", 3, "Trainer 3", 480, 380, "img/trainer3.png", name);
      }
    }

    if (this.screen === 3) {
      this.srcY = this.trackDown * this.height;
    }
  }
}