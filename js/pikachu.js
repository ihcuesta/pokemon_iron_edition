class Pikachu {
    constructor () {
        this.name = "Pikachu",
        this.life = 100,
        this.lifeBar = 300,
        this.damage = 25,
        this.damageBar = 300 * this.damage / 100

        // this.attacks = [
        //     [
        //         {attack: "Usar funciones", goodPractice: true},
        //         {attack: "Repetir código", goodPractice: false}
        //     ],
        //     [
        //         {attack: "Hoja CSS", goodPractice: true},
        //         {attack: "Estilos en línea", goodPractice: false}
        //     ],
        //     [
        //         {attack: "Crear varias ramas", goodPractice: true},
        //         {attack: "Usar solo la rama master", goodPractice: false}
        //     ],
        //     [
        //         {attack: "Comentar el código", goodPractice: true},
        //         {attack: "No comentar el código", goodPractice: false}
        //     ]
        // ]
    }

    receiveDamage() {
        this.life -= this.damage;
        this.lifeBar -= this.damageBar;
        if (this.life < 0) this.life = 0;
        if (this.lifeBar < 0) this.lifeBar = 0;
    }


}