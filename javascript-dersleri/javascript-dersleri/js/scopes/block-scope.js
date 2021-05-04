
if (true) {
    var productId = "p-345";
    let orderId = "ord-123";

    console.log("If Blogu Order Id", orderId);
}

var x = 100;
var x = 200;

let y = 100;
// let y = 200;

{
    var x = 300;
    var x = 400;

    let y = 300;
    // let y = 400;

    y = 500;

    const t = 500;
    // t = 600;
}

var x = 500;
var x = 600;

{
    var x = 700

    let y = 300;
}

console.log("x", x);
console.log("y", y);

console.log(productId);
console.log(orderId);