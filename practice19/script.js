let obj = {
    a: 1,
    b: "karthik"
}
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};
rabbit.__proto__ = animal;

console.log(obj);

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log("constructor called");
    }
    details() {
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
    eats() {
        console.log("person eats");
    }
}


class student extends person {
    constructor(name, age, rollno) {
        super(name, age);
        this.rollno = rollno;   
        console.log("student constructor called");
    }
    eats() {
        super.eats();
        console.log("student eats");
    }   
}


let p = new person("karthik", 21);
console.log(p);
p.details();
let s = new student("karthik reddy", 21, 101);
console.log(s);
s.details();


s.eats();
p.eats();

console.log( p instanceof student );
console.log( p instanceof person );
console.log( s instanceof student );
console.log( s instanceof person );


