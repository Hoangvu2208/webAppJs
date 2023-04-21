class Person {
    constructor (name){
        this.name = name; 
    }
    getName (){
        return this.name;
    }
    setName (name) {
        this.name = name;
    }
    walk () {
        console.log("con nguoi di bang 2 chan ");
    }
}

class Programmer extends Person{
    writeCode (){
        console.log("programmer thi viet code ");
    }
}
let cn1 = new Person("David");

console.log(cn1.getName());
cn1.walk();

let pr1 = new Programmer("lap trinh vien");
console.log(pr1.getName());
pr1.writeCode();