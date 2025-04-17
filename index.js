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
   ex: ['product', 'Blood Pressure Monitor'] ['quantity', 1] ['price', 49.99]
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
    subArray.push(key);
    subArray.push(object[key]);
    output.push(subArray);
  }
  return output;
};
console.log(getNumberEntries(purchases[0])); // not passing but it looks good to me??


// #2 // --------------------------------------------------------------------------------------------------------------------
/*


*/

const addKeyValuePairs = (object, additions) => {
  
};


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
    let recentReview = item.mostLikedReviews[mostLikedReviews.length-1].text;
    return `${upCaseTitle} - Review: ${recentReview}`;
  })
};
console.log(mapPurchases(purchases)); // not working because mostLikedReviews is not defined??

// #5 // --------------------------------------------------------------------------------------------------------------------
/*


*/

const accumulateString = (array) => {
  
};


// #6 // --------------------------------------------------------------------------------------------------------------------
/*


*/

const findProduct = (array, product) => {
  
};


// #7 // --------------------------------------------------------------------------------------------------------------------
/*


*/

const filterByReviewLength = (array) => {
  
};


