const Game = {          // ¿POR QUÉ CONST Y NO CLASS?
    canvas: undefined,    // Los valores de inicio son undefined porque se van a ir asignando en los métodos
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    screen,
    playerKeys: {  
      LEFT_KEY: 37,      // Guarda los keyCodes en variables para referenciarlos más fácilmente en los listeners
      TOP_KEY: 38,
      RIGHT_KEY: 39,
      DOWN_KEY: 40
    },
    interval: null,
    
    // score: 0,

    // La función init es lo primero que se ejecuta una vez se ha cargado la página en index.js
  init: function(name) { 
    this.canvas = document.getElementById('canvas'); // guarda en una variable el selector de la etiqueta canvas
    this.ctx = this.canvas.getContext('2d');         // en 2D
    this.width = 800;                  // a la propiedad width de Game le asigna todo el ancho de pantalla
    this.height = 500;                // a la propiedad height de Game le asigna todo el alto de pantalla
    this.canvas.width = this.width;                  // la anchura del canvas será todo el ancho de pantalla
    this.canvas.height = this.height;   
                // la altura del canvas será todo el alto de pantalla
    
    
    this.start(390, 500, "img/escenario1.png", 1, "Trainer 1", 200, 30, "img/trainer.png", name);                                    // Ejecuta la función start (game loop)
    textIntro("¡Hola " + name + "! ¡Bienvenido a Iron Hack!");
  },

  // La función start es el game loop (update o bucle de renderizado), refresca el canvas mediante un setInterval para detectar movimiento
  start: function(playerX, playerY, setImage, screen, trainerName, trainerX, trainerY, trainerImage, name) {
    this.screen = screen;
    
    
    this.trainer = new Trainer(this.ctx, trainerName, trainerX, trainerY, trainerImage)
    this.set = new Set(this.ctx, setImage);
    this.player = new Player(this.ctx, playerX, playerY, 'img/ashframes2.png', this.playerKeys, name); // Crea un nuevo personaje                        // Ejecuta la función reset, que reinicia el juego pintando los valores de inicio del fondo, el jugador, los obstaculos y el marcador.
   
    this.interval = setInterval(() => { // En este intervalo se irán actualizando los frames
      this.player.firstSteps(name);
      this.framesCounter++;             // Aumenta un frame al contador de frames
this.player.activeSoundBattle();

      this.clear();                     // 1. LIMPIA: Ejecuta la función clear (limpia el canvas)
      this.drawAll();                   // 2. PINTA: Ejecuta la función drawAll (pinta todo lo que hay que pintar)
      // this.moveAll();                   // 3. MUEVE: Ejecuta la función moveAll (cambia las posiciones de todo lo que hay que cambiar de lugar)
      // this.player.setListeners(this.limitUp(), this.limitRight(), this.limitDown(), this.limitLeft())
      this.trainerApproach();
      this.player.nextScreen();
      this.endLevel(name) ;
      console.log(this.player.posX + " , " + this.player.posY )
      // if(this.framesCounter > 1000) this.framesCounter = 0;  // Creo que evita que el juego cargue una cantidad muy alta y pueda ralentizarlo
    }, 1000/this.fps)  
                  // Define que el canvas se va a refrescar cada 16,6 milisegundos, es decir, 60 actualizaciones por segundo (60 fps, tasa de refresco recomendada en videojuegos )
  },

  


  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height)  // Limpia el canvas 
  },

  drawAll: function() {    // Pinta todo lo que hay que pintar mediante el método draw de cada objeto
    // this.background.draw();  // Pinta el fondo
    this.player.draw(this.framesCounter);  // Pinta el personaje
    this.set.draw();
    this.trainer.draw(this.framesCounter);
  },

  moveAll: function() {
    this.player.move(direction, this.set.limitUp, this.set.limitRight, this.set.limitDown, this.set.limitLeft,)
    
  },

 

  trainerApproach(limit) {
    
      if (this.screen === 1) {
        if (this.player.posY < 35) {
          this.player.ableToMove = false;
          // let limit = this.player.posX + this.player.width;
  
          this.trainer.move(this.player.approach())
          
          //this.player.posX + this.player.width
          
        }
      }
      if (this.screen === 2) {
        
        if (this.player.posX > 550) {
          this.player.ableToMove = false;
          // let limit = this.player.posX + this.player.width;
  
          this.trainer.move(this.player.approach())
          
          //this.player.posX + this.player.width
          
        }
      }

      if (this.screen === 3) {
        
        if (this.player.posX > 475) {
          this.player.ableToMove = false;
          // let limit = this.player.posX + this.player.width;
  
          this.trainer.move(this.player.approach())
          
          //this.player.posX + this.player.width
          
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

    // trainerReady() {
    //   console.log(this.ready)
    //   if (this.ready) {
          
    //         console.log("error")
    //           textIntro("¡Alto ahí! ¡Demuéstrame lo que has aprendido!") 
          
    //         this.ready = false;
           
    //   }
    
    
    
  


//   limitUp() {
//     if (this.player.posY > this.set.posY + this.set.height) {
//       return true;
//     } else {
//       return false;
//     }
//   },

//   limitRight() {
//     if (this.player.posX > this.set.posX) {
//       return true;
//     } else {
//       return false;
//     }
//   },

//   limitDown() {
//     if (this.player.posY < this.set.posY) {
//       return true;
//     } else {
//       return false;
//     }
//   },

//   limitLeft() {
//     if (this.player.posX < this.set.posX + this.set.width) {
//       return true;
//     } else {
//       return false;
//     }
//   }



// this.limitUp = this.y + this.height;
// this.limitRight = this.x;
// this.limitDown = this.y;
// this.limitLeft = this.x + this.width;

