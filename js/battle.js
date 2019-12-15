function battle() {
    document.getElementById("battle").className = "visible";
    // let pokemonsAppear = setTimeout(() => {
        
    // }, 2000);
    let charizard = new Enemy("Charizard", "Display flex", "img/carizard.png");
    document.getElementById("life-enemy").innerText = charizard.life;

    let pikachu = new Pikachu();
    document.getElementById("life-pikachu").innerText = pikachu.life;
}