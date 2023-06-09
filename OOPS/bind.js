const player = {
    firstname: "tushar",
    lastname: "gupta",
    numberToBat: 3,
    canBowl: true,
    getDetails: function(){
        console.log(this.firstname,this.lastname,"comes at ",this.numberToBat,"and he ",this.canBowl);
    }
}

const obj = function(){
    console.log(this.getDetails());
}

// we can bind another object like this
// let x = obj.bind(player);
// x();

// or like this
obj.call(player);

// difference bw call and bind is that bind will create a new function 
// while call will itself call that binded function