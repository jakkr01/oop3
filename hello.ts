function vat(price: number ,type: string): number {
    if (type === "E") {
        return price * 7/100;
    } else if (type === "N") {
        return 0;
    } else {
        return price * 7/107;
    }
}
let price1: number = 200;
let price2: number = 750;
console.log(`สินค้าราคา ${price1} บาท มีภาษีมูลค่าเพิ่ม ${vat(price1, "E")} บาท`);
console.log(`สินค้าราคา ${price2} บาท มีภาษีมูลค่าเพิ่ม ${vat(price2, "N")} บาท`);

function hello(name: string): string {
    return `ยินดีตอนรับ คุณ ${name} สู้เว็บไซต์ของ NPRU`;
}

console.log(hello("jakkrwut"));