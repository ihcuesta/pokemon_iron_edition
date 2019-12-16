window.onload = function() {  // Una vez la ventana está cargada, 
  document.getElementById("continue").addEventListener("click", function(){
    document.getElementById("battle").className = "novisible";
    Game.player.goOn = true;
    Game.trainer.posX += 0;
    Game.trainer.posY += 0;
  });

  document.getElementById("replay").addEventListener("click", function(){
   
    document.getElementById("youwin").style.display = "none";
    window.onload = function() {
      Game.init();
     
    }
  });

   // Mejor añadir un paso previo que sea un botón start para ejecutar la función init()
    
   
   // Game.init()                 // cambios hechos para tocar el diseño de battle
    battle()                      // cambios hechos para tocar el diseño de battle
  }