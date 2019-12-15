class Enemy {
    constructor(name, attack, image) {
        this.name = name,
        this.attack = attack,
        this.image = image,
        this.life = 100
    }

    attack() {
        Pikachu.life -= 25;
    }
}

