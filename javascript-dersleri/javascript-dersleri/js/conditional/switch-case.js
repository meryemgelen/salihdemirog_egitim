var postaTuru = "Mektup";
var price = 0;

switch (postaTuru) {
    case "Normal":
        price = 100;
        price = 100;
        break;
    case "APS":
    case "Mektup":
        price = 200;
        break;
    case "Kargo":
        price = 300;
        break;
    default:
        price = 50;
        break;
}

console.log(price);

var not = 90;

switch (true) {
    case not < 20:
        console.log("Çok Kötü");
        break;
    case not >= 21 && not <= 50:
        console.log("Normal");
        break;
    case not >= 51 && not <= 70:
        console.log("İyi");
        break;
    default:
        console.log("Çok İyi");
        break;
}