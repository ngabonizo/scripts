class Person {
  #name; // private variable

  constructor(name) {
    this.#name = name;
  }

  sayName() {
    console.log(`My name is ${this.#name}`);
  }
}

const p = new Person("Isaac");
p.sayName(); // ✅ My name is Isaac
console.log(p.#name); // ❌ SyntaxError: Private field '#name' must be declared


// They can only be accessed within the class where they are defined.
// Even child classes cannot touch them directly.
// They are enforced by JavaScript at runtime.

class Account {
  #balance = 0;

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#log();
    }
  }

  #log() {
    console.log("Balance updated:", this.#balance);
  }
}
const acc = new Account();
acc.deposit(50); // ✅ works fine
acc.#log(); // ❌ Not allowed, private

class User {
  #password;

  constructor(password) {
    this.#password = password;
  }

  setPassword(newPass) {
    if (newPass.length >= 6) {
      this.#password = newPass;
    }
  }

  getPassword() {
    return "Access denied 😅";
  }
}

const u = new User("123456");
u.setPassword("abcdef");
console.log(u.getPassword()); // hides real value

// So, private fields are JavaScript’s built-in security guards for class properties.
// They keep your class state tidy, protected, and well-behaved 🔐😄
