var adSoyad = "Salih Demiroğ";
var yas = 34;

var kisi = {
    adSoyad: "Salih Demiroğ",
    yas: 34,
    tcNo: "28843743884"
};

kisi.adres="Ankara";

kisi.adSoyad = "Engin Demiroğ";
kisi.yas = 36;


console.log(typeof kisi, kisi);

console.log(typeof kisi.adSoyad, kisi.adSoyad);
console.log(typeof kisi.yas, kisi.yas);
console.log(typeof kisi.tcNo, kisi.tcNo);
console.log(kisi.adres);

var menu = {
    ad: "Menu 1",
    url: "/url1",
    altMenu: {
        ad: "Alt Menu 1",
        url: "/url2"
    }
};

console.log(menu.altMenu.ad);
console.log(menu["altMenu"]["ad"]);

console.log(menu.ad);
console.log(menu["ad"]);

