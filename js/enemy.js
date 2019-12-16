class Enemy {
    constructor(name, attack, image) {
        this.name = name,
        this.attack = attack,
        this.image = image,
        this.life = 100,
        this.lifeBar = 300,
        this.damage = 34,
        this.damageBar = 300 * this.damage / 100
       
    }

    receiveDamage() {
        this.life -= this.damage;
        this.lifeBar -= this.damageBar;
        if (this.life < 0) this.life = 0;
        if (this.lifeBar < 0) this.lifeBar = 0;
    }
}

