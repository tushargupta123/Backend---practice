class Product{
    constructor(n,p){
        this.name = n;
        this.price = p;
    }
    displayProduct(){

    }
    buyProduct(){

    }
}

let iphone = new Product("iPhone 11",50000);        // creates a object
let mackbook = new Product("MackBook",100000);
console.log(iphone,mackbook);