window.onload = function() {  // Una vez la ventana está cargada, 
  // document.getElementById("continue").addEventListener("click", function(){
  //   document.getElementById("battle").className = "novisible";
  //   Game.player.goOn = true;
  //   Game.trainer.posX += 0;
  //   Game.trainer.posY += 0;
  // });

  document.getElementById("replay").addEventListener("click", function(){
   
    document.getElementById("youwin").style.display = "none";
    document.getElementById("gameover").style.display = "none";
    replay();
    
  });

   // Mejor añadir un paso previo que sea un botón start para ejecutar la función init()
    
   
   // Game.init()                 // cambios hechos para tocar el diseño de battle
    battle("Pedro", "img/charizard.gif", "img/charizard-2.gif");                     // cambios hechos para tocar el diseño de battle
  }

  function replay() {
    window.onload = function() {
      Game.init();
     
    }
  }