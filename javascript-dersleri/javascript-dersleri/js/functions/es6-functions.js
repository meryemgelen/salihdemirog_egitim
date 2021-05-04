function topla(a, b = 0, c = 0) {
    return a + b + c;
}

function fn() {
    console.log('fn çalıştı')
}

var fnc = function () {
    console.log('fnx çalıştı')
}

fn();
fnc();

var sonuc = topla(1, 6, 8);
console.log(sonuc);

console.log(topla(3));
console.log(topla(3, 7));
console.log(topla(3, 7, 6));

console.log("---------------------");

function ortalamaAl(sayilar) {
    // var array = new Array(...sayilar);
    console.log((sayilar[0] + sayilar[1] + sayilar[2]) / 3.0);
}

var veriler = [4, 5, 6];
ortalamaAl(veriler);

console.log("---------------------");

function ortalamaAl2(sayi,...sayilar) {

    console.log((sayilar[0] + sayilar[1] + sayilar[2]) / 3.0);
}

ortalamaAl2(7, 8, 9, 10);