const square = function(x){
    return x*x
}
console.log(square(12))

function square(x) {
    return x * x;
}                   

const makeNoise = function() {
    console.log("Pling!");
};

makeNoise();

const power = function(base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count ++) {
        result *= base;
    }
    return result;
};

console.log(power(2,10));

let x= 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
}
// Y is not visible here 
console.log(x + z)


let safeMode = false
let launchMissiles = function() {
    missileSystem.launch("now");
};

if (safeMode) {
    launchMissiles = function() {/* do nothing */};
}


