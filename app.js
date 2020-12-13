let favMovie = ( name = 'World', movie = 'The Room') =>  console.log(`my name is ${name} and my favorite movie is ${movie}`);


let person = {
    firstName: 'Justin'
}

let getFirstName = (firstName, lastName) => console.log(firstName);

let getName = (firstName, lastName) => {
    console.log(`${firstName}`);
}
favMovie('Justin','Star Wars');
getFirstName('Justin', 'Head');
getName('Justin', 'Head');

let newFunc = (a, b) => ({
    squared: Math.pow(a, b),
    product: a * b,

    
});

let result = newFunc(4,2);
console.log(`${result.squared}`);
console.log(`${result.product}`);

let user = {
    firstName: 'Justin',
    lastName: 'Head',
    age: '28'
};


function whereToEat(name, location, favFood) {
    console.log(name, location, favFood);
};

let array = ['Justin', 'Cafe', 'tacos'];
whereToEat(...array);

let myName = 'Justin';


function sayWord(word) {
    let spread = [...word];
    for (i=0; i < word.length; i++) {
        console.log(spread[i]); 
    }
};
sayWord('hello');