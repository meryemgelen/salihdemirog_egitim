function merhabaDunya() {
    console.log("Merhaba Dünya");
}

function merhaba(isim) {
    console.log("Merhaba " + isim);
}

function merhaba(isim, soyisim) {
    console.log(isim + ' ' + soyisim);
}

function topla(a, b, c) {
    return a + b + c;
}

function carpma() {
    console.log("Parametre sayısı:", arguments.length);

    return arguments[0] * arguments[1];
}

merhabaDunya();

var sonuc = merhabaDunya(2, 4, 6);
console.log(sonuc);

merhaba("Salih");

merhaba("Engin", "Demiroğ");

merhaba(new Date());

merhaba("Salih", "Demiroğ");
merhaba("Salih");

var toplam = topla(3, 4, 5);

console.log("Toplam Sonucu: ", toplam);

var sonuc = carpma(6, 8, 3, 32, "", "323");
console.log(sonuc);


console.log(typeof topla, topla.toString());



function demo(sayi, func) {

    var sonuc = func();

    console.log(sayi + sonuc);
}

function getUgurluSayi() {
    return 5;
}

demo(10, getUgurluSayi);

demo(30, function () {
    return 5;
});

demo(20, () => 4);