const purchases = [
  {
    product: "Ergofit Wired Earbuds",
    category: "Electronics",
    quantity: 2,
    price: 12.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Great noise-cancelling feature."
      }
    ]
  },
  {
    product: "LG Bluray Player Replacement Remote Control",
    category: "Electronics",
    quantity: 1,
    price: 6.99,
    mostLikedReviews: [
      {
        rating: 1,
        text: "Product didn't come with batteries."
      },
      {
        rating: 2,
        text: "Package was damaged."
      }
    ]
  },
  {
    product: "McCormick Grill Mates Chipotle Pepper Marinade (12 pk)",
    category: "Grocery",
    quantity: 3,
    price: 15.50,
    mostLikedReviews: [
      {
        rating: 1,
        text: "The marinade packets were damaged."
      }
    ]
  },
  {
    product: "Luxardo Gourmet Cocktail Cherries",
    category: "Grocery",
    quantity: 1,
    price: 24.45,
    mostLikedReviews: [
      {
        rating: 5,
        text: "You can taste the difference between these and marachinos."
      },
      {
        rating: 5,
        text: "I use these all the time for parties."
      }
    ]
  },
  {
    product: "Blood Pressure Monitor",
    category: "Medical Supplies and Equipment",
    quantity: 1,
    price: 49.99,
    mostLikedReviews: [
      {
        rating: 5,
        text: "Matches my blood pressure at the doctor's office."
      }
    ]
  }
];

// #1 // --------------------------------------------------------------------------------------------------------------------
/*
I: A puchase object
O: An array of sub arrays
   ex: ['quantity', 1] ['price', 49.99]
C: Cannot use Object.entries (or others)
E: N/A
*/

const getNumberEntries = (object) => {
  // output array
  let output = [];

  // for in loop to go over input object
  for (var key in object){
    // sub array
    let subArray = [];
    // if the value is a number, push
    if (typeof object[key] === 'number'){
      subArray.push(key);
      subArray.push(object[key]);
      output.push(subArray);
    }
  }
  return output;
};
console.log(getNumberEntries(purchases[0])); // works!


// #2 // --------------------------------------------------------------------------------------------------------------------
/*
I: An object and additions (array of sub arrays)
   each sub array is a key and a value to add to the object
   input looks like:
   addKeyValuePairs(purchases[1], [ ['purchasedPreviously', false], ['initiatedReturn', true] ]);

O: An object with the additions added as keys and values
C: N/A
*/

const addKeyValuePairs = (object, additions) => {
  // reduce method - turn additions into an object
  // use object assign to combine the objects together
  const addObj = additions.reduce((acc, current) => {
    let key = current[0];
    let value = current[1];
    acc[key] = value;
    return acc;
  }, {});

  // use object assign to combine object and addObj
  return Object.assign(object, addObj);
};
// works!



// #3 // --------------------------------------------------------------------------------------------------------------------
/*
I: An array of purchase objects and a price (number)
O: A new array of items whose prices are greater than the input price
   ex: filterByPrice(purchases, 20); // => [ {Luxardo Gourmet Cocktail Cherries}, {Blood Pressure Monitor} ]
C: Use native filter method
*/

const filterByPrice = (array, price) => {
  // filter method on items in array
  return array.filter((item) => {
    // if price greater than input <price>
    return item.price > price;
  });
};
//console.log(filterByPrice(purchases, 20)); // works!

// #4 // --------------------------------------------------------------------------------------------------------------------
/*
I: An array of purchase objects
O: A new array of strings: product title uppercased - most recent review text
   ex: "ERGOFIT WIRED EARBUDS - Review: Great noise-cancelling feature."
C: Use native map method
*/

const mapPurchases = (array) => {
  // map method on items in array
  return array.map((item) => {
    // template literal {title} - Review: {recent review}
    let upCaseTitle = item.product.toUpperCase();
    let recentReview = item.mostLikedReviews[item.mostLikedReviews.length-1].text;
    return `${upCaseTitle} - Review: ${recentReview}`;
  })
};
console.log(mapPurchases(purchases)); // works!


// #5 // --------------------------------------------------------------------------------------------------------------------
/*
I: Array of purchase objects
O: A string - whatever purchase quantity is, access the word in the product with that index - 1
   ex: accumulateString(purchases); // => "WiredLGMatesLuxardoBlood" // 21311
C: Use native reduce method
*/

const accumulateString = (array) => {
  // reduce method
  return array.reduce((acc, current) => {
    // make variables - make product string into an array of words
    let words = current.product.split(" ");
    let index = current.quantity - 1;
    acc += words[index];
    return acc;
  }, "");
};
console.log(accumulateString(purchases)); // works!


// #6 // --------------------------------------------------------------------------------------------------------------------
/*
I: An array of products, and a product (string)
O: Array of the object's product description and the category
   findProduct(purchases, "Blood Pressure Monitor"); // => ["Blood Pressure Monitor", "Medical Supplies and Equipment"];
C: Use recursion
*/

const findProduct = (array, product, output=[]) => {
  //base case - gone through whole array
  if (array.length === 0){
    return output;
  }
  //if it matches, put product + category in output
  if (array[0].product === product){
    output.push(array[0].product);
    output.push(array[0].category)
    return output;
    // call self with first sliced off
  } else {
    return findProduct(array.slice(1), product, output);
  }
};
console.log(findProduct(purchases, "Ergofit Wired Earbuds")); // edge case not fulfilled - not sure why though


// #7 // --------------------------------------------------------------------------------------------------------------------
/*
I: An array of purchase objects
O: An array of puchases where review length property greater than 35
   I'm assuming it's string length...

   filterByReviewLength(purchases); // [ {Luxardo Gourmet Cocktail Cherries}, {Blood Pressure Monitor } ]
C: Use native filter method
*/

const filterByReviewLength = (array) => {
  // filter method
  return array.filter((item) => {
    // for loop for inner ratings array
    for (let i = 0; i < item.mostLikedReviews.length; i++){
      // if text of rating is longer than 35 return true
      if (item.mostLikedReviews[i].text.length > 35){
        return true;
      }
    }
  });
};
console.log(filterByReviewLength(purchases)); // works!

