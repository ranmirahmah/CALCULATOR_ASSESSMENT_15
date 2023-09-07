class Animal {
    legs = 4;
    head = 1;
    eyes = 2;

    eat(){
        console.log('Animal is eating');
    }
}

class Rabbit extends Animal {

    constructor(age, type){
        super()
        this.age = age
        this.type = type
    }
}

class Cat extends Animal {
    constructor(age, type){
        super()
        this.age = age
        this.type = type
    }
}

const olongbo = new Cat(7, 'dOMESTIC')
console.log(olongbo);

const Eworo = new Rabbit(4, 'DOMESTIC')
console.log(Eworo);