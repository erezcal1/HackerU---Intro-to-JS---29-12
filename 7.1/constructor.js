//old version
function User1(email, name) {
      this.email = email;
      this.name = name;
      this.online = false;
      this.login = function () {
        console.log(`${this.name} has logged in`);
      };
}
let user11 = new User1('Moti@bigfoot.com', 'Moti');
let user22 = new User1('eli@bigfoot.com', 'Eli');
//new version
class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
  }
  login() {
    console.log(`${this.name} has logged in`);
    //For chaning the methods we need to return a value
    //if we dont return a value we will get error
    return this;
  }
  logout(){
    console.log(`${this.name} has logged out`);
    return this;
  }
}
let user1 = new User('Moti@bigfoot.com', 'Moti');
let user2 = new User('eli@bigfoot.com', 'Eli');
user1.login().logout();