class User {
    constructor(firstName, lastName, age, id) {
    this.fName = firstName;
    this.lName = lastName;
    this.age = age;
    this.id = id;
        }
        get userAge() {
    returnthis.age;
        }
        set userAge(i) {
    this.age = i;
        }
      }
    
    const user1 = new User('Mary', 'Jane', 23, 01);
    console.log(user1.age); // will output 23
    
    // setting the value of the age property
    user1.userAge = 24;
    console.log(user1.age); // will output 24