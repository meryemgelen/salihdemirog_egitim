var productId = "P-123";
console.log(productId);
console.log(window.productId);
console.log(this.productId);
console.log(this === window);

var description = "Ürün açıklaması 1";

function updateDescription() {
    description = "Yeni ürün açıklaması";
}

updateDescription();

console.log(description);