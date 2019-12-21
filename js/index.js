window.onload = function () { // Una vez la ventana está cargada, 
  document.getElementById("start-game").onclick = function () {
    document.getElementById("start-screen").style.top = "-630px";
    document.getElementById("screen1-audio").play();
    document.getElementById("text").style.display = "block";
    let name = document.getElementById("player").value;
    if (name === "") {
      name = "Ash";
    }
    Game.init(name);
  };

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

  document.getElementById("replay").onclick = function () {
    document.getElementById("gameover").style.display = "none";
    replay();
  };

  document.getElementById("replay2").onclick = function () {
    document.getElementById("youwin").style.display = "none";
    replay();
  };
}

function replay() {
  location.reload();
}