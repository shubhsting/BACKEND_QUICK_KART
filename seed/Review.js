const Review = require("../models/Review");

const reviews = [
  {
    _id: "65c25533dcd9253acfbaa8b8",
    user: "65c2526fdcd9253acfbaa731",
    product: "65a7e45902e12c44f5994462",
    rating: 4,
    comment:
      "Nice quality turmeric powder. Great for cooking and has a vibrant color.",
    createdAt: "2024-02-07T10:25:58.424Z",
  },
  {
    _id: "65c25550dcd9253acfbaa8c5",
    user: "67332b95708ae0a6f551e8e0",
    product: "65a7e45902e12c44f5994462",
    rating: 5,
    comment:
      "Excellent turmeric! Fresh and potent. I use it daily in my dishes.",
    createdAt: "2024-02-07T10:26:58.424Z",
  },
  {
    _id: "65c255fcdcd9253acfbaa932",
    user: "65b8e564ea5ce114184ccb96",
    product: "65a7e45902e12c44f5994462",
    rating: 3,
    comment: "The turmeric is okay, but I expected more flavor and color.",
    createdAt: "2024-02-07T10:27:58.424Z",
  },
  {
    _id: "65c25533dcd9253acfbaa8bb",
    user: "67332b95708ae0a6f752e6e9",
    product: "65a7e45902e12c44f5994462",
    rating: 5,
    comment:
      "This turmeric is pure and very fresh. Adds a nice color to my curries.",
    createdAt: "2024-02-07T10:28:58.424Z",
  }
];

exports.seedReview = async () => {
  try {
    await Review.insertMany(reviews);
    console.log("Review seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
