export function calcDiscount({price, priceAfterDiscount}){
if(priceAfterDiscount){
    const discount = ((price - priceAfterDiscount) /  price ) * 100
return discount.toFixed(0)
}
}