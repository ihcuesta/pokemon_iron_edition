function battle(name, image, imageAttack, screen) {
    document.getElementById("pokemon-img").style.animation = "none";
    document.getElementById("pokemon-img-attack").style.animation = "none";
    document.getElementById("pokemon-img").style.display = "block";
   
    // let screen = 2;  // Eliminar en versión definitiva
    let n = 0;

    let optionsBattle1 = [
        [
            {text: "Usar funciones", cat: "good"}, 
            {text: "Repetir código", cat: "bad"}
        ],
        [
            {text: "Usar solo la rama master", cat: "bad"}, 
            {text: "Usar varias ramas", cat: "good"}
        ],
        [
            {text: "No comentar el código", cat: "bad"},
            {text: "Comentar el código", cat: "good"} 
        ],
        [
            {text: "console.log devuelve undefined", cat: "good"},
            {text: "console.log devuelve lo que imprime", cat: "bad"} 
        ]
    ];

    let optionsBattle2 = [
        [
            {text: "Un objeto siempre tiene un orden implícito", cat: "bad"}, 
            {text: "Un array siempre tiene un orden implícito", cat: "good"}
        ],
        [
            {text: "Usar siempre estilos en línea", cat: "bad"}, 
            {text: "Usar una hoja de estilos externa", cat: "good"}
        ],
        [
            {text: "Función sin return devuelve undefined", cat: "good"},
            {text: "Función sin return devuelve 0", cat: "bad"} 
        ],
        [
            {text: "Con position fixed, el elemento es relativo al viewport", cat: "good"},
            {text: "Con position fixed, el elemento es relativo al body", cat: "bad"} 
        ],
        [
            {text: "x", cat: "good"},
            {text: "x", cat: "bad"} 
        ]
    ];

    let optionsBattle3 = [
        [
            {text: "Para salir del loop: continue", cat: "bad"}, 
            {text: "Para salir del loop: break", cat: "good"}
        ],
        [
            {text: "pop() devuelve el último elemento de un array", cat: "good"}, 
            {text: "pop() añade un nuevo elemento al array", cat: "bad"}
        ],
        [
            {text: "Una función puede que no devuelva un valor", cat: "bad"},
            {text: "Una función siempre devuelve un valor", cat: "good"} 
        ],
        [
            {text: "undefined * undefined = NaN", cat: "good"},
            {text: "undefined * undefined = undefined", cat: "bad"} 
        ],
        [
            {text: "forEach siempre devuelve undefined", cat: "good"},
            {text: "forEach nunca devuelve undefined", cat: "bad"} 
        ]
    ];

    function addOptions(screen) {
        if (screen === 1) {
            let options = optionsBattle1[n];
            document.getElementById("opt1").innerText = options[0].text;
            document.getElementById("opt1").dataset.cat = options[0].cat;
            document.getElementById("opt2").innerText = options[1].text;
            document.getElementById("opt2").dataset.cat = options[1].cat;
            n++;
        }
        if (screen === 2) {
            let options = optionsBattle2[n];
            document.getElementById("opt1").innerText = options[0].text;
            document.getElementById("opt1").dataset.cat = options[0].cat;
            document.getElementById("opt2").innerText = options[1].text;
            document.getElementById("opt2").dataset.cat = options[1].cat;
            n++;
         }
         if (screen === 3) {
            let options = optionsBattle3[n];
            document.getElementById("opt1").innerText = options[0].text;
            document.getElementById("opt1").dataset.cat = options[0].cat;
            document.getElementById("opt2").innerText = options[1].text;
            document.getElementById("opt2").dataset.cat = options[1].cat;
            n++;
         }
    }

    document.getElementById("battle").className = "visible";
    // let pokemonsAppear = setTimeout(() => {
    // }, 2000);
    let pokemon = new Enemy(name, image, imageAttack);
    document.getElementById("life-enemy").innerText = pokemon.life;
    document.getElementById("rf-enemy").style.width = pokemon.lifeBar + "px";

    let pikachu = new Pikachu();
    document.getElementById("life-pikachu").innerText = pikachu.life;
    document.getElementById("rf-pika").style.width = pikachu.lifeBar + "px";

    document.getElementById("pokemon-name").innerText = pokemon.name;
    document.getElementById("pokemon-img").src = pokemon.image;
    document.getElementById("pokemon-img-attack").src = pokemon.imageAttack;

    pikachuShift();

    document.getElementById("attackBtn").onclick = function () {
        pikachuShift();
    };


    let opt1 = document.getElementById("opt1");
    let opt2 = document.getElementById("opt2");

    document.getElementById("opt1").onclick = function () {
        pikachuAction(opt1);
    };

    document.getElementById("opt2").onclick = function () {
        pikachuAction(opt2);
    };

    function pikachuAction(opt) {
        if (opt.dataset.cat === "good") {
            pikachuAttack();
            textIntro("¡Sí, es correcto! ¡Ataque efectivo!");
        }
        if (opt.dataset.cat === "bad") {
            pikachuDamage();
            textIntro("Mala elección... Pikachu recibió daño.");
        }
        document.getElementById("opt1").style.display = "none";
        document.getElementById("opt2").style.display = "none";
        
        if (pokemon.life > 0 && pikachu.life > 0) {
            enemyShift();
        }
        if (pokemon.life === 0 || pikachu.life === 0) {
            resolveBattle();
        }
    }

    function pikachuShift() {

        addOptions(screen);
        document.getElementById("attackBtn").style.display = "none";
        document.getElementById("opt1").style.display = "block";
        document.getElementById("opt2").style.display = "block";
        textIntro("Haz click en la opción correcta:");
    }


    function enemyShift() {
        if (pokemon.life > 0) {
            let interval1 = setTimeout(() => {
                enemyAttack();

            }, 3000);
        }

        let interval2 = setTimeout(() => {
            if (pokemon.life > 0 && pikachu.life > 0) {
                document.getElementById("attackBtn").style.display = "block";
            } else if (pokemon.life === 0 || pikachu.life === 0) {

                resolveBattle();
            }
        }, 6000);
    };

    function resolveBattle() {
        if (pikachu.life === 0) {
            let interval3 = setTimeout(() => {
                document.getElementById("gameover").style.display = "block";
                exit = true;
                console.log(exit)
            }, 3000);
        }
        if (pokemon.life === 0) {
            
           
            setTimeout(() => {
                
                textIntro("¡Has ganado! Pikachu recibió poción.");
                pikachu.life = 100;
                pikachu.lifeBar = 300;
                document.getElementById("rf-pika").style.width = pikachu.lifeBar + "px";
                document.getElementById("life-pikachu").innerText = pikachu.life;
                document.getElementById("continue").style.display = "block";
                
            }, 4000);

            let interval4 = setTimeout(() => {
                document.getElementById("pokemon-img").style.animation = "opacity 3s 1";
                document.getElementById("pokemon-img").style.display = "none";
                document.getElementById("pokemon-img-attack").style.animation = "opacity 3s 1";
                document.getElementById("pokemon-img-attack").style.display = "none";
                exit = true;
            }, 6000);
        }
    }

    function enemyAttack() {
        if (pokemon.life > 0) {
            textIntro(pokemon.name + " atacó a Pikachu.");
            document.getElementById("pokemon-img").style.display = "none";
            document.getElementById("pokemon-img-attack").style.display = "block";
            let interval5 = setTimeout(() => {
                document.getElementById("pokemon-img").style.display = "block";
                document.getElementById("pokemon-img-attack").style.display = "none";
            }, 1800);
            pikachu.receiveDamage();
            document.getElementById("rf-pika").style.width = pikachu.lifeBar + "px";
            document.getElementById("life-pikachu").innerText = pikachu.life;
        }
    }

    function pikachuAttack() {
        document.getElementById("thunder").style.display = "block";
        document.getElementById("pokemon-img").style.animation = "thunderShock 1s 1";
        let interval6 = setTimeout(() => {
            document.getElementById("thunder").style.display = "none";
            document.getElementById("pokemon-img").style.animation = "none";
        }, 2000);
        pokemon.receiveDamage();

        document.getElementById("rf-enemy").style.width = pokemon.lifeBar + "px";
        document.getElementById("life-enemy").innerText = pokemon.life;
    }

    function pikachuDamage() {
        pikachu.receiveDamage();
        document.getElementById("rf-pika").style.width = pikachu.lifeBar + "px";
        document.getElementById("life-pikachu").innerText = pikachu.life;
        document.getElementById("pikachu-img").style.animation = "damage 1s 1";
    }

}

