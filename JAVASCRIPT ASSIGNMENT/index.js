// class

class Person {
    constructor(firstName, lastName, passCode, computerLit, skinColor, lcda, skills) {
        this.firstName = firstName
        this.lastName = lastName
        this.passCode = passCode
        this.computerLit = computerLit
        this.skinColor = skinColor
        this.lcda = lcda
        this.skills = skills
    }
    
    setFullName(){
        const fullName = this.firstName +" " + this.lastName
        return(fullName);
    };

    setfirstName (firstName){
    this.firstName  = `Mr ${this.firstName}`
    console.log(Person1.firstName);
}

};

const Person1 = new Person('Mistura','Mutairu',007,true,'light skin','idi-oro');

const Person2 = new Person('Rahmat','Afolaranmi',005,true,'dark skin','ikorodu')


console.log(Person1);
console.log(Person2);
console.log(Person1.setFullName());
console.log(Person2.setFullName());


// class assignment

class Animal {
    constructor(name, age, color, legProperty){
        this.name = name
        this.age = age
        this.color = color
        this.legProperty = legProperty
    }
};

const Animal1 = new Animal('Dog',3,'black',4);
const Animal2 = new Animal('Cat',10,'white',4);
const Animal3 = new Animal('Bird',5,'blue',2)

console.log(Animal1);
console.log(Animal2);
console.log(Animal3);



