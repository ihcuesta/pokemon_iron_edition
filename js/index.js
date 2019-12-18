window.onload = function() {  // Una vez la ventana está cargada, 
  // document.getElementById("continue").addEventListener("click", function(){
  //   document.getElementById("battle").className = "novisible";
  //   Game.player.goOn = true;
  //   Game.trainer.posX += 0;
  //   Game.trainer.posY += 0;
  // });
  document.getElementById("continue").onclick = function () {
    document.getElementById("battle").className = "novisible";
    document.getElementById("continue").style.display = "none";
    Game.player.goOn = true;
    Game.trainer.posX += 0;
    Game.trainer.posY += 0;
};

  // document.getElementById("continue").addEventListener("click", function(){
  //   document.getElementById("battle").className = "novisible";
  //   document.getElementById("continue").style.display = "none";
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
    
   
   Game.init()                 // cambios hechos para tocar el diseño de battle
    // battle("Blastoise", "img/r.gif", "img/r-2.gif");                     // cambios hechos para tocar el diseño de battle
  }

  function replay() {
    window.onload = function() {
      this.start(390, 500, "img/escenario1.png", 1, "Trainer 1", 200, 30, "img/trainer.png"); 
     
    }
  }