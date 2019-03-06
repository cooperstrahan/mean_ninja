function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function() {
        console.log("Hello my name is " + this.name);
        return this;
    }

    this.showStats = function() {
        console.log("Name: " + this.name + ", " +"Health: " + this.health + ", " +"Speed: " + speed + ", " + "Strength: " + strength);
        return this;
    }

    this.drinkSake = function() {
        this.health += 10;
        return this;
    }

    this.punch = function(ninja) {
        if (ninja instanceof Ninja){
            ninja.health -= 5;
            console.log(this.name + " punched "+ ninja.name);
            return this;
        } else {
            console.log("You cannot fight someone who is not a Ninja!")
        }
    }

    this.kick = function(ninja) {
        if (ninja instanceof Ninja){
            ninja.health -= 15;
            console.log(this.name + " kicked "+ ninja.name);
            console.log(ninja)
            return this;
        } else {
            console.log("You cannot fight someone who is not a Ninja!")
        }
    }
}


var ninja1 = new Ninja("Hyabusa");
var ninja2 = new Ninja("Goku");
ninja1.sayName();
ninja2.sayName();

ninja1.punch(ninja2);
ninja2.kick(ninja1);
// -> "My ninja name is Hyabusa!"
// ninja1.showStats();
// // -> "Name: Hayabusa, Health: 100, Speed: 3, Strength: 3"
// ninja1.drinkSake();
// ninja1.showStats();