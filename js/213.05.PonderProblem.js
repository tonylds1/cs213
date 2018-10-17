/**
 * Hello World
 */
function problem1() {
    console.log("Hello World!");
    alert("Hello World!");
}

/**
 * Replace a string inside a letter text
 * @param {String} name 
 * @param {String} letter 
 */
function problem2(name, letter) {
    var newLetter = letter.replace(/RICH_GUY/g, name);

    console.log(newLetter);
    alert(newLetter);
}

/**
 * Convert Fahreinghert to Celcius
 * @param {Number} fahrenheit 
 */
function problem3(fahrenheit) {
    var result = (fahrenheit - 32) * 5/9;

    console.log(result.toFixed(1));
    alert(result.toFixed(1));
}

/**
 * Validate if the number is some between 1 and 5
 * @param {Number} weight 
 */
function problem4(weight) {
    var values = [0.98, 1.19, 1.40, 1.61, 1.82];
    var result = values[weight-1];
    
    if (result == undefined) {
        console.log('Invalid weight');
        alert('Invalid weight');
    }

    console.log('$' + result.toFixed(2));
    alert('$' + result.toFixed(2));
}

/**
 * Use a loop to calculate compound interest
 * @param {Number} apr 
 * @param {Number} term 
 * @param {Number} amount 
 */
function problem5(apr, term, amount) {
    var result = Number(amount);
    
    for (i = 0; i < Number(term); i++) {
        result = result * (1 + Number(apr)/100);
    }

    console.log(result.toFixed(2));
    alert(result.toFixed(2));
}
