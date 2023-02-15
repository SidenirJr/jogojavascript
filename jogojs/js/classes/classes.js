//Knight or Sourcerer
//LittleMonster or BigMonster

class Character {

    _life = 1;
    maxlife = 1;
    attack = 0;
    defense = 0;

    constructor(name) {
        this.name = name;
    }

    get life() {
        return this._life;
    }
    set life(NewLife) {
        this._life = NewLife < 0 ? 0 : NewLife;
    }
}

class Knight extends Character {
    constructor(name) {
        super(name);
        this._life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxlife = this._life;
    }
}

class Sourcerer extends Character {
    constructor(name) {
        super(name);
        this._life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxlife = this._life;
    }
}

//Monstros

class LittleMonster extends Character {
    constructor() {
        super('Little Monster')
        this._life = 40;
        this.attack = 4;
        this.defense = 4;
        this.maxlife = this._life;
    }
}

class BigMonster extends Character {
    constructor() {
        super('Big Monster')
        this._life = 120;
        this.attack = 16;
        this.defense = 6;
        this.maxlife = this._life;
    }
}


