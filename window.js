class Person {
    constructor(firstName, lastName, salary, idNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
        this.idNumber = idNumber;
    }
}

const heroPerson = new Person('Tom', 'John', 202020, '2020');
console.log(heroPerson);
const newMan = new Person('man', 'who', 10000, '1010');
console.log(newMan);
const idNumber = new Person('mash', 'rah', 404000, '007');
console.log(idNumber);
