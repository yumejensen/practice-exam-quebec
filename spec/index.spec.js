describe("Practice Exam - Quebec", () => {

  describe("getNumberEntries", () => {
    it('should return an array', () => {
      assert.equal(Array.isArray(getNumberEntries(purchases[0])), true);
    });
    it('should return a correct array of subarrays', () => {
      assert.deepEqual(getNumberEntries(purchases[0]), [ ['quantity', 2 ], ['price', 12.99] ]);
    });
    it('should not use Object.keys(), Object.values(), or other Object methods', () => {
      const func = getNumberEntries.toString();
      const methods = ['Object.keys(', 'Object.values(', 'Object.entries(' ];
      methods.forEach(method => {
        assert.equal(func.includes(method), false);
      })
    })
  });

  describe("addKeyValuePairs", () => {
    const data = {
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
    };
    it('should return an object', () => {
      assert.equal(typeof addKeyValuePairs(data, [ ['purchasedPreviously', false], ['initiatedReturn', true] ]), 'object');
      assert.equal(Array.isArray(addKeyValuePairs(data, [ ['purchasedPreviously', false], ['initiatedReturn', true] ])), false);
    });
    it('should return the input object correctly modified', () => {
      const result = addKeyValuePairs(data, [ ['purchasedPreviously', false], ['initiatedReturn', true] ]);
      const correct = {
        product: "LG Bluray Player Replacement Remote Control",
        category: "Electronics",
        quantity: 1,
        price: 6.99,
        purchasedPreviously: false,
        initiatedReturn: true,
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
      };
      assert.deepEqual(result, correct);
    })
  });

  describe("filterByPrice", () => {
    beforeEach(function () {
      sinon.spy(Array.prototype, 'filter');
    });

    afterEach(function () {
        Array.prototype.filter.restore();
    });
    it('should use return an array', () => {
      assert.equal(Array.isArray(filterByPrice(purchases, 20)), true);
    });
    it('should return a correctly filtered array', () => {
      const result = filterByPrice(purchases, 20);
      const correct = [
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
      ]
      assert.deepEqual(result, correct);
    });
    it('should use the native filter method', () => {
      filterByPrice(purchases, 20);
      Array.prototype.filter.called.should.be.true;
    });
  });

  describe("mapPurchases", () => {
    beforeEach(function () {
      sinon.spy(Array.prototype, 'map');
    });

    afterEach(function () {
      Array.prototype.map.restore();
    });
    it('should return an array', () => {
      assert.equal(Array.isArray(mapPurchases(purchases)), true)
    });
    it('should return a correctly mapped array', () => {
      const result = mapPurchases(purchases);
      const correct = [
        "ERGOFIT WIRED EARBUDS - Review: Great noise-cancelling feature.",
        "LG BLURAY PLAYER REPLACEMENT REMOTE CONTROL - Review: Package was damaged.",
        "MCCORMICK GRILL MATES CHIPOTLE PEPPER MARINADE (12 PK) - Review: The marinade packets were damaged.",
        "LUXARDO GOURMET COCKTAIL CHERRIES - Review: I use these all the time for parties.",
        "BLOOD PRESSURE MONITOR - Review: Matches my blood pressure at the doctor's office."
      ]
      result.forEach((str, i) => {
        assert.equal(str, correct[i]);
      })
    });
    it('should use the native map method', () => {
      mapPurchases(purchases);
      Array.prototype.map.called.should.be.true;
    });
  });

  describe("accumulateString", () => {
    beforeEach(function () {
      sinon.spy(Array.prototype, 'reduce');
    });

    afterEach(function () {
      Array.prototype.reduce.restore();
    });
    it('should return a string', () => {
      assert.equal(typeof accumulateString(purchases), 'string');
    });
    it('should return a correct string', () => {
      const result = accumulateString(purchases);
      const correct = "WiredLGMatesLuxardoBlood";
      assert.equal(result, correct);
    });
    it('should use the native reduce method', () => {
      accumulateString(purchases);
      Array.prototype.reduce.called.should.be.true;
    });
  });

  describe("findProject", () => {
    it('should return an array', () => {
      assert.equal(Array.isArray(findProduct(purchases, "Blood Pressure Monitor")), true);
    })
    it('should return a correct array if product is found', () => {
      assert.deepEqual(findProduct(purchases, 'Blood Pressure Monitor'), ['Blood Pressure Monitor', 'Medical Supplies and Equipment']);
    });
    it('should return an empty array if no product is found', () => {
      assert.deepEqual(findProduct(purchases, 'Dr. Pepper Zero'), [null, null]);
    });
    it('should use recursion', () => {
      const func = findProduct.toString();
      assert.equal(func.includes('return findProduct('), true);
    });
  });

  describe("filterByReviewLength", () => {
    beforeEach(function () {
      sinon.spy(Array.prototype, 'filter');
    });

    afterEach(function () {
      Array.prototype.filter.restore();
    });
    it('should return an array', () => {
      assert.equal(Array.isArray(filterByReviewLength(purchases)), true);
    });
    it('should return a correctly filtered array', () => {
      const result = filterByReviewLength(purchases);
      const correct = [
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
      assert.deepEqual(result, correct);
    });
    it('should use the native filter method', () => {
      filterByReviewLength(purchases);
      Array.prototype.filter.called.should.be.true;
    });
  });

});