
    class Person{
        constructor(name, age){
            this.name = name;
            this.age = age;
        }
        Describe(){
            return `${this.name}, ${this.age} years old`
        }
    }
const person = new Person("Adora", 21);
console.log(person.Describe())