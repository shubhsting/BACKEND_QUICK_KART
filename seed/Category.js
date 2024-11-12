const Category = require("../models/Category");

const categories = [
  { _id: "65a7e24602e12c44f599442c", name: "fruits" },
  { _id: "65a7e24602e12c44f599442d", name: "vegetables" },
  { _id: "65a7e24602e12c44f599442e", name: "dairy" },
  { _id: "65a7e24602e12c44f599442f", name: "meat" },
  { _id: "65a7e24602e12c44f5994430", name: "seafood" },
  { _id: "65a7e24602e12c44f5994431", name: "baked-goods" },
  { _id: "65a7e24602e12c44f5994432", name: "beverages" },
  { _id: "65a7e24602e12c44f5994433", name: "snacks" },
  { _id: "65a7e24602e12c44f5994434", name: "frozen-food" },
  { _id: "65a7e24602e12c44f5994435", name: "canned-goods" },
  { _id: "65a7e24602e12c44f5994436", name: "condiments" },
  { _id: "65a7e24602e12c44f5994437", name: "spices" },
  { _id: "65a7e24602e12c44f5994438", name: "grains" },
  { _id: "65a7e24602e12c44f5994439", name: "pasta" },
  { _id: "65a7e24602e12c44f599443a", name: "cereals" },
  { _id: "65a7e24602e12c44f599443b", name: "baby-products" },
  { _id: "65a7e24602e12c44f599443c", name: "personal-care" },
  { _id: "65a7e24602e12c44f599443d", name: "household-supplies" },
  { _id: "65a7e24602e12c44f599443e", name: "pet-supplies" },
  { _id: "65a7e24602e12c44f599443f", name: "health-products" },
];

exports.seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    console.log("Category seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
