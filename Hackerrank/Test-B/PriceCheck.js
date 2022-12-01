function priceCheck(products, productPrice, productSold, soldPrice) {
  let mapProduct = {};
  let mapProductSold = {};
  let errPrice = 0;

  for (const i in products) {
    mapProduct[products[i]] = productPrice[i];
  }
  console.log(mapProduct);

  for (const j in productSold) {
    mapProductSold[productSold[j]] = soldPrice[j];
  }
  console.log(mapProductSold);

  for (const k in mapProductSold) {
    if (mapProductSold[k] !== mapProduct[k]) {
      errPrice += 1;
    }
  }
  return errPrice;
}

let products = ["eggs", "milk", "cheese"],
  productPrice = [2.89, 3.29, 5.79],
  productSold = ["eggs", "eggs", "cheese", "milk"],
  soldPrice = [2.89, 2.99, 5.97, 3.29];

console.log(priceCheck(products, productPrice, productSold, soldPrice));
