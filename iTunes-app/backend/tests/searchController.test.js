// Import expect from Chai for assertions in the test
const { expect } = require("chai");

// Import the searchMusic function from the searchController for testing
const { searchMusic } = require("../controllers/searchController");

// Describe block for the searchMusic function tests
describe("searchMusic function", () => {
  // Test case: it should return an array of albums based on search term and media type
  it("should return an array of albums based on search term and media type", async () => {
    // Mock request object with query parameters for the search
    const req = { query: { term: "artist", mediaType: "music" } };

    // Mock response object with status and json methods for testing
    const res = {
      // Mock status method to check the HTTP status code
      status: (statusCode) => ({
        // Mock json method to check the response data
        json: (data) => {
          // Assertion: Check if the status code is 200
          expect(statusCode).to.equal(200);

          // Assertion: Check if the response data contains an "albums" property that is an array
          expect(data).to.have.property("albums").that.is.an("array");
        },
      }),
    };

    // Call the searchMusic function with the mock request and response objects
    await searchMusic(req, res);
  });
});
