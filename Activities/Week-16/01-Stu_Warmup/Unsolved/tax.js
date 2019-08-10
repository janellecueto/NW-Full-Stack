var calculateTax = function(price) {
  // Fill in code here
  if(isNaN(price)){
    throw new Error("Price is not a number");
  }
return Number((price * 1.08).toFixed(2));

};

module.exports = calculateTax;
