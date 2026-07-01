function calculatePrice(price: number, discountPercent: number): number {
    const after = price - (price * discountPercent / 100);

    if (after > 0)
        return after;
    else
        return 0;
}

let price: number = 500;
let discountPercent: number = 10;

let priceAfterDiscount: number = calculatePrice(price, discountPercent);

console.log(`Price: ${price} บาท`);
console.log(`Price after discount: ${priceAfterDiscount} บาท`);