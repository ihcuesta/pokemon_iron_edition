window.onload = function() {  // Una vez la ventana está cargada, 
  // document.getElementById("continue").addEventListener("click", function(){
  //   document.getElementById("battle").className = "novisible";
  //   Game.player.goOn = true;
  //   Game.trainer.posX += 0;
  //   Game.trainer.posY += 0;
  // });
  // var audio = new Audio('../audio/opening.mp3');
  // var playPromise = audio.play();
  // document.getElementById("opening-audio").play();
  // document.getElementById('opening-audio').muted = false;
  document.getElementById("continue").onclick = function () {
    if (Game.screen === 3) {
      setTimeout(() => {
        document.getElementById("youwin").style.display = "block";
      }, 1500);
    }
    Game.player.soundBattle = false;
    Game.player.activeSoundVictory();
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

  document.getElementById("replay").onclick = function () {
   
    document.getElementById("gameover").style.display = "none";
    replay();
    
  };

  document.getElementById("replay2").onclick = function () {
   
    document.getElementById("youwin").style.display = "none";
    replay();
    
  };

   // Mejor añadir un paso previo que sea un botón start para ejecutar la función init()
    
   
   Game.init()                 // cambios hechos para tocar el diseño de battle
    // battle("Blastoise", "img/r.gif", "img/r-2.gif");                     // cambios hechos para tocar el diseño de battle
  }

  function replay() {
    location.reload();
    // Game.start(440, 500, "img/escenario1.png", 1, "Trainer 1", 200, 30, "img/trainer.png"); 

    //   document.getElementById("battle").style.left = "-800px";
    //   document.getElementById("battle1-audio").pause();
    //   document.getElementById("battle2-audio").pause();
    //   document.getElementById("battle3-audio").pause();
    //   document.getElementById("victory-audio").pause();
  }