const DiscountType = {
    Standard: "Standard", // 6% discount
    Seasonal: "Seasonal", // 12% discount
    Weight: "Weight" // if cartWeight > 10, 18% discount, if cartWeight <=10, 6% discount
};
/* Make this function return the discounted price based on the discountType 
Ex: getDiscountedPrice(5, 100, 'Standard') = 94
*/
function getDiscountedPrice(cartWeight, totalPrice, discountType) {
    // Code Goes Here
}


// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number){
    // Code Goes Here
}


/*
The clock shows h hours, m minutes and s seconds. 
Your task is to write a function which returns the same time in milliseconds. 
There are 1,000 milliseconds in a second.

ex: clock(0,1,1) = 61000
*/
function clock(h, m, s){
    // Code Goes Here
}


module.exports = {
    getDiscountedPrice,
    evenOrOdd,
    clock
};