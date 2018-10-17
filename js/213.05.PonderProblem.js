function problem1() {
    console.log("Hello World!");
    alert("Hello World!");
}

function problem2(name, letter) {
    var newLetter = letter.replace(/RICH_GUY/g, name);

    console.log(newLetter);
    alert(newLetter);
}

function problem3(fahrenheit) {
    var result = (fahrenheit - 32) * 5/9;

    console.log(result.toFixed(2));
    alert(result.toFixed(2));
}

function problem4(weight) {
    if (weight < 1 || weight > 5) {
        console.log('Invalid weight');
        alert('Invalid weight');
    }

    console.log('Good weight');
    alert('Good weight');
}

function problem5(apr, term, amount) {
    for (i = 0; i < term * 12; i++) {
        amount = amount * (1 + apr/1200);
    }

    console.log(amount.toFixed(2));
    alert(amount.toFixed(2));
}