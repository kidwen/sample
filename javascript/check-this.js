function Person(name, no) {
    this.name = name;
    this.no = no;
    console.log(this);
}

// Person.prototype.toString = () => {
//     return this.name;
// }
// Person.prototype.toString = function personToString() {
//     return this.name;
// }
Person.prototype.toString = function () {
    return `${this.no}-${this.name}`;
};

const originPerson = new Person("kidwen", "001");

function logName(person) {
    let name = "name:" + person;
    console.log(name);
}

logName(originPerson);
