class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Tom', 'John', 202020);
console.log(heroPerson);
const newMan = new Person('man', 'who', 10000);
console.log(newMan);