function battle() {
    let n = 0;
    
    let optionsBattle1 = [
        ["Usar funciones", "Repetir código"],
        ["Usar solo la rama master", "Usar varias ramas"],
        ["Comentar el código", "No comentar el código"],
        ["console.log devuelve lo que imprime", "console.log devuelve undefined"]
    ]

    document.getElementById("battle").className = "visible";
    // let pokemonsAppear = setTimeout(() => {
    // }, 2000);
    let charizard = new Enemy("Charizard", "Display flex", "img/carizard.png");
    document.getElementById("life-enemy").innerText = charizard.life;
    document.getElementById("rf-enemy").style.width = charizard.lifeBar + "px";

    let pikachu = new Pikachu();
    document.getElementById("life-pikachu").innerText = pikachu.life;
    document.getElementById("rf-pika").style.width = pikachu.lifeBar + "px";


    pikachuShift();



    // function battleShifts() {

    //     pikachuShift()

    //     )
    //     // setTimeout(() => {
    //     //     enemyAttack();
    //     // }, 2000);



    // }

    document.getElementById("attackBtn").addEventListener("click", function () {
        pikachuShift();
    });


    function addOptions() {

        let options = optionsBattle1[n];
        document.getElementById("opt1").innerText = options[0];
        document.getElementById("opt2").innerText = options[1];
        n++;

    }

    function pikachuShift() {
       
            addOptions();
            document.getElementById("attackBtn").style.display = "none";
            document.getElementById("opt1").style.display = "block";
            document.getElementById("opt2").style.display = "block";
            textIntro("Haz click en la opción correcta:");

            let opt1 = document.getElementById("opt1");
            let opt2 = document.getElementById("opt2");

            opt1.addEventListener("click", function () {
                clickOpt(opt1);
                document.getElementById("opt1").style.display = "none";
                document.getElementById("opt2").style.display = "none";
                textIntro("¡Sí, esa es una buena práctica! ¡Ataque efectivo!");
                // if (charizard.life > 0 && pikachu.life > 0) {
                 enemyShift();
                // } else if (charizard.life === 0) {
                //     resolveBattle();
                // }


            });

            opt2.addEventListener("click", function () {
                clickOpt(opt2);
                textIntro("Mala elección... Pikachu recibió daño.");
                document.getElementById("opt1").style.display = "none";
                document.getElementById("opt2").style.display = "none";

                // if (charizard.life > 0 && pikachu.life > 0) {
                 enemyShift();
                // } else if (pikachu.life === 0) {
                //     resolveBattle();
                // }

            });

            function clickOpt(opt) {
                if (opt.dataset.cat === "good") {
                    pikachuAttack()

                } else if (opt.dataset.cat === "bad") {
                    pikachuDamage()
                }
            }

        
    }


    function enemyShift() {
       if (charizard.life > 0) {
        let interval1 = setTimeout(() => {
            enemyAttack();
           
        }, 5000);

       }
        


        let interval2 = setTimeout(() => {
            if (charizard.life > 0 && pikachu.life > 0) {
                document.getElementById("attackBtn").style.display = "block";
            } else if (charizard.life === 0 || pikachu.life === 0) {

                resolveBattle();
            }

        }, 5000);



    };

    function resolveBattle() {
        if (pikachu.life === 0) {
            let interval3 = setTimeout(() => {
                document.getElementById("gameover").style.display = "block";
            }, 3000);


        }
        if (charizard.life === 0) {
            setTimeout(() => {
                textIntro("¡Has ganado! Pikachu recibió poción.");
                document.getElementById("continue").style.display = "block";
            }, 4000);

            let interval4 = setTimeout(() => {
                document.getElementById("pokemon-img").style.animation = "opacity 3s 1";
                document.getElementById("pokemon-img").style.display = "none";
                document.getElementById("pokemon-img-attack").style.animation = "opacity 3s 1";
                document.getElementById("pokemon-img-attack").style.display = "none";
            }, 6000);


        }

    }

    function enemyAttack() {
        if (charizard.life > 0) {
           
                textIntro(charizard.name + " atacó a Pikachu.");
               
           
           
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
        let interval6 = setTimeout(() => {
            document.getElementById("thunder").style.display = "none";
        }, 2000);
        charizard.receiveDamage();

        document.getElementById("rf-enemy").style.width = charizard.lifeBar + "px";
        document.getElementById("life-enemy").innerText = charizard.life;

    }

    function pikachuDamage() {
        pikachu.receiveDamage();
        document.getElementById("rf-pika").style.width = pikachu.lifeBar + "px";
        document.getElementById("life-pikachu").innerText = pikachu.life;
        document.getElementById("pikachu-img").style.animation = "damage 1s 1";

    }


}