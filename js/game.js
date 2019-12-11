const Game = {          // ¿POR QUÉ CONST Y NO CLASS?
    canvas: undefined,    // Los valores de inicio son undefined porque se van a ir asignando en los métodos
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    playerKeys: {  
      LEFT_KEY: 37,      // Guarda los keyCodes en variables para referenciarlos más fácilmente en los listeners
      TOP_KEY: 38,
      RIGHT_KEY: 39,
      DOWN_KEY: 40
    },
    // score: 0,

    // La función init es lo primero que se ejecuta una vez se ha cargado la página en index.js
  init: function() { 
    this.canvas = document.getElementById('canvas'); // guarda en una variable el selector de la etiqueta canvas
    this.ctx = this.canvas.getContext('2d');         // en 2D
    this.width = 800;                  // a la propiedad width de Game le asigna todo el ancho de pantalla
    this.height = 400;                // a la propiedad height de Game le asigna todo el alto de pantalla
    this.canvas.width = this.width;                  // la anchura del canvas será todo el ancho de pantalla
    this.canvas.height = this.height;                // la altura del canvas será todo el alto de pantalla

    this.start();                                    // Ejecuta la función start (game loop)
  },

  // La función start es el game loop (update o bucle de renderizado), refresca el canvas mediante un setInterval para detectar movimiento
  start: function() {
    this.reset()                        // Ejecuta la función reset, que reinicia el juego pintando los valores de inicio del fondo, el jugador, los obstaculos y el marcador.
    this.interval = setInterval(() => { // En este intervalo se irán actualizando los frames
      this.framesCounter++;             // Aumenta un frame al contador de frames

      this.clear();                     // 1. LIMPIA: Ejecuta la función clear (limpia el canvas)
      this.drawAll();                   // 2. PINTA: Ejecuta la función drawAll (pinta todo lo que hay que pintar)
      this.moveAll();                   // 3. MUEVE: Ejecuta la función moveAll (cambia las posiciones de todo lo que hay que cambiar de lugar)

      if(this.framesCounter > 1000) this.framesCounter = 0;  // Creo que evita que el juego cargue una cantidad muy alta y pueda ralentizarlo
    }, 1000/this.fps)                   // Define que el canvas se va a refrescar cada 16,6 milisegundos, es decir, 60 actualizaciones por segundo (60 fps, tasa de refresco recomendada en videojuegos )
  },

  reset: function() {
    this.player = new Player(this.ctx, 50, 150, 'img/player.png', this.width,this.height, this.playerKeys); // Crea un nuevo personaje
    
  },

