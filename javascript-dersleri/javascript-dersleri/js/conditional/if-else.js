var total = 99.99;
var freeShipping;
var discount = 0;

if (total >= 100) {
    freeShipping = true;
    discount = 10;
}
else
    freeShipping = false;


var ucretsizKargo = total >= 100 ? true : false;

console.log("Ücretsiz Kargo:", freeShipping);
console.log("Ücretsiz Kargo:", ucretsizKargo);


var not = 65;

if (not <= 20)
    console.log("Çok Kötü");
else if (not >= 21 && not <= 50)
    console.log("Normal");
else if (not >= 51 && not <= 70)
    console.log("İyi");
else
    console.log("Çok İyi");


function topla(a, b, c) {

    if (b == undefined)
        b = 0;

    if (c == undefined)
        c = 0;

    console.log("Toplam:", a + b + c);
}

topla(4, 5);
