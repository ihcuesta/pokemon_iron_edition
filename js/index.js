window.onload = function() {  // Una vez la ventana está cargada, 
  document.getElementById("continue1").addEventListener("click", function(){
    document.getElementById("battle").className = "novisible";
    Game.player.goOn = true;
    Game.trainer.posX += 0;
    Game.trainer.posY += 0;
  });

  


   // Mejor añadir un paso previo que sea un botón start para ejecutar la función init()
    Game.init()                 // se ejecuta Game.init(), del archivo: game.js
    
  }