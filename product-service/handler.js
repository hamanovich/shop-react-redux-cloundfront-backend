"use strict";

module.exports.hello = async () => {
  return {
    statusCode: 200,
    body: {
      productName: "Book",
      price: 123,
    },
  };
};
