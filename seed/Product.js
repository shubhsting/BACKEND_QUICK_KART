const Product = require("../models/Product");

const products = [
  {
    _id: "65a7e45902e12c44f599444e",
    title: "Red Apples",
    description: "Fresh and juicy red apples.",
    price: 100,
    discountPercentage: 5.0,
    stockQuantity: 150,
    brand: "65a7e20102e12c44f59943da",
    category: "65a7e24602e12c44f599442c", // Fruits
    thumbnail:
      "https://fruityland.co/wp-content/uploads/2021/02/Red-Delicious-FL.jpg",
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.jiomart.com%2Fp%2Fgroceries%2Fapple-red-delicious-usa-1-kg%2F590000002&psig=AOvVaw1o8Cd_tYjupmP-Sy3iBiCv&ust=1731487289865000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCknPiy1okDFQAAAAAdAAAAABAJ",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fred-delicious-apple&psig=AOvVaw1o8Cd_tYjupmP-Sy3iBiCv&ust=1731487289865000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCknPiy1okDFQAAAAAdAAAAABAb",
      "https://i5.walmartimages.com/asr/a938b2a5-99f0-47da-aa38-73b8fa6944aa.fab40e9192b0d845607f29fd4b6a5e2c.jpeg",
      "https://m.media-amazon.com/images/I/71XdMMf9AaL._AC_UF894,1000_QL80_.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f599444f",
    title: "Organic Bananas",
    description: "Natural and organic bananas.",
    price: 50,
    discountPercentage: 10.0,
    stockQuantity: 120,
    brand: "65a7e20102e12c44f59943db",
    category: "65a7e24602e12c44f599442c", // Fruits
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6Hky6yoh71ri7OP3sjLnAm7PjO9Vara5fg&s",
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT51amDe7MB5H-0JINcgD7QdgILqEbsBbrqag&s",
      "https://jivabhumi.com/cdn/shop/products/banana_yelakki_3a299b07-8cb2-4f82-aa46-9ae9a53ad2d8.jpg?v=1669634869",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsbumyBRXHSmwbtm7bOOB8vlRAEvJbuc4ug&s",
      "https://goodeggs4.imgix.net/a05e1afe-9a19-44cf-8264-510b4ffc8777.jpg?w=840&h=525&fm=jpg&q=80&fit=crop",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994450",
    title: "Whole Milk",
    description: "Fresh whole milk from local farms.",
    price: 45,
    discountPercentage: 8.0,
    stockQuantity: 80,
    brand: "65a7e20102e12c44f59943dc",
    category: "65a7e24602e12c44f599442d", // Dairy
    thumbnail:
      "https://horizon.com/wp-content/uploads/horizon-organic-whole-milk-lockup-v3-.png",
    images: [
      "https://cdn.usdairy.com/optimize/getmedia/623aeffa-8ffb-4b4a-9121-98e31d5ab11e/whole_milk_label.jpg?format=webp",
      "https://umpquadairy.com/wp-content/uploads/hom-milk-gal-lg-1.png",
      "https://www.prairiefarms.com/wp-content/uploads/2023/05/PF_UHT_HalfGallon_WholeMilk.png",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994451",
    title: "Greek Yogurt",
    description: "Creamy and rich Greek yogurt.",
    price: 30,
    discountPercentage: 7.0,
    stockQuantity: 60,
    brand: "65a7e20102e12c44f59943dd",
    category: "65a7e24602e12c44f599442d", // Dairy
    thumbnail: "https://m.media-amazon.com/images/I/51gc4bxCBuL.jpg",
    images: [
      "https://epigamiastore.com/cdn/shop/products/GY_2048X2048_cec5bc17-4b54-4874-ad7b-a53220ef1680_530x@2x.jpg?v=1614071238",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEEUi1gpjkzo_obfQpnfRnBDveSuaIT9PZQ&s",
      "https://www.yoplait.com/_next/image?url=https%3A%2F%2Fprodcontent.yoplait.com%2Fwp-content%2Fuploads%2F2019%2F09%2FYoplait-Greek-100-Protein-Vanilla-Yogurt-460x460-Y.png&w=1024&q=75",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994452",
    title: "Brown Rice",
    description: "Healthy whole grain brown rice.",
    price: 140,
    discountPercentage: 6.5,
    stockQuantity: 100,
    brand: "65a7e20102e12c44f59943de",
    category: "65a7e24602e12c44f599442e", // Grains
    thumbnail:
      "https://www.roopmahalrice.com/wp-content/uploads/2023/06/Everything-About-Brown-Rice-by-Roop-mahal-Rice-Brown-Rice-Nutrition-value-and-More.jpg",
    images: [
      "https://cookieandkate.com/images/2019/05/perfect-brown-rice-recipe-1.jpg",
      "https://www.isayorganic.com/cdn/shop/files/BrownRice_1024x1024@2x.jpg?v=1715180416",
      "https://glendaembree.com/wp-content/uploads/2022/09/Brown-Rice-FEATURE.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994453",
    title: "Whole Wheat Flour",
    description: "Nutritious whole wheat flour.",
    price: 300,
    discountPercentage: 5.0,
    stockQuantity: 110,
    brand: "65a7e20102e12c44f59943df",
    category: "65a7e24602e12c44f599442e", // Grains
    thumbnail:
      "https://5.imimg.com/data5/SELLER/Default/2022/5/VQ/SV/ZJ/99429586/wheat-flour.jpg",
    images: [
      "https://chakkiwalle.com/cdn/shop/files/360_F_120005524_K3y8Ku1CDDsDpQeZqFYgBksKmWDK0RcB_612a695f-fd01-4fca-a2d1-0953de241696.jpg?v=1711962096",
      "https://cmsindustries.org/wp-content/uploads/wholeWheatFlour.jpg",
      "https://balibuda.com/wp-content/uploads/2020/06/j_wheat-flour.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994454",
    title: "Pure Honey",
    description: "All-natural honey with a rich taste.",
    price: 330,
    discountPercentage: 12.0,
    stockQuantity: 70,
    brand: "65a7e20102e12c44f59943e0",
    category: "65a7e24602e12c44f599442f", // Honey & Sweeteners
    thumbnail:
      "https://5.imimg.com/data5/VA/MI/KI/SELLER-26190164/pure-honey-500x500.jpg",
    images: [
      "https://5.imimg.com/data5/SELLER/Default/2022/9/AU/XJ/FE/37587120/pure-natural-honey.jpg",
      "https://www.mahakaalprasad.com/cdn/shop/files/jungleehoney5.jpg?v=1710578030",
      "https://m.media-amazon.com/images/I/71toEariTvL.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994455",
    title: "Black Pepper",
    description: "Premium quality black pepper.",
    price: 200,
    discountPercentage: 8.5,
    stockQuantity: 90,
    brand: "65a7e20102e12c44f59943e1",
    category: "65a7e24602e12c44f5994430", // Spices
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9eF3OZ_JJDT1-iMMWqwG4es7IqFK9daVzgw&s",
    images: [
      "https://organicmandya.com/cdn/shop/files/Blackpepper_3a324bb5-8923-48ac-80f8-d1365e965c96.jpg?v=1718778010&width=1024",
      "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/coorg-black-pepper-powder-coorg-spices-shop-online.20240714001931.webp",
      "https://thottamfarmfresh.com/wp-content/uploads/2020/10/Black-Pepper-for-Skin.webp",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994456",
    title: "Organic Green Tea",
    description: "Refreshing green tea leaves.",
    price: 150,
    discountPercentage: 10.0,
    stockQuantity: 100,
    brand: "65a7e20102e12c44f59943e2",
    category: "65a7e24602e12c44f5994431", // Beverages
    thumbnail:
      "https://m.media-amazon.com/images/I/51KvG-bDAdL._AC_UF894,1000_QL80_.jpg",
    images: [
      "https://m.media-amazon.com/images/I/61N2BamelLL.jpg",
      "https://cdn.shopify.com/s/files/1/0663/6286/8029/products/Moodshot_8d981ede-9d92-4292-8ff2-c45c81a962e6.jpg?v=1669029210",
      "https://images-cdn.ubuy.co.in/635dfb2b0061d5023036e1b9-imozai-organic-green-tea-bags-100-count.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994457",
    title: "Sweet Oranges",
    description: "Fresh and juicy sweet oranges packed with vitamin C.",
    price: 80,
    discountPercentage: 6.0,
    stockQuantity: 130,
    brand: "65a7e20102e12c44f59943dd",
    category: "65a7e24602e12c44f599442c",
    thumbnail:
      "https://publish.purewow.net/wp-content/uploads/sites/2/2021/02/types-of-oranges-cara-cara-oranges.jpg?fit=728%2C524",
    images: [
      "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/f29c0a57a3664fe67bd8e0bdfe660d5c",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQymi_q7qhSFVFAHa5itJcPBNPlKAwDvktPQfAChuLwMGNTydvthsCr5DkgtxsNUfummQ&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQimbIkQNDvz83e57IC0vkRBvEz_VQwYcPSmMWENU3tUqkxp4PM8jsSaaSCWSUfk36Eo&usqp=CAU",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994459",
    title: "Whole Wheat Bread",
    description: "Freshly baked whole wheat bread for a healthy breakfast.",
    price: 20,
    discountPercentage: 4.0,
    stockQuantity: 140,
    brand: "65a7e20102e12c44f59943f9",
    category: "65a7e24602e12c44f5994431",
    thumbnail:
      "https://images.getrecipekit.com/20230728144103-md-100-whole-wheat-bread-11-1-of-1-scaled.jpg?aspect_ratio=4:3&quality=90&",
    images: [
      "https://bakingamoment.com/wp-content/uploads/2019/01/IMG_2403-best-soft-whole-wheat-bread-recipe-500x375.jpg",
      "https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/whole-wheat-bread-3.jpg",
      "https://www.jiomart.com/images/product/original/491127282/britannia-100-whole-wheat-bread-450-g-product-images-o491127282-p491127282-0-202204092013.jpg?im=Resize=(420,420)",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994462",
    title: "Turmeric Powder",
    description:
      "Pure turmeric powder, known for its anti-inflammatory properties.",
    price: 100,
    discountPercentage: 10.0,
    stockQuantity: 85,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f5994437",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6RkK4l67ru5L3xXXXb8Uf2uoGxPI5HeTLAQ&s",
    images: [
      "https://cms.buzzrx.com/globalassets/buzzrx/blogs/turmeric-powder--health-benefits-to-know.png",
      "https://i.etsystatic.com/17612060/r/il/498c76/4095783438/il_1080xN.4095783438_ibim.jpg",
      "https://sunrise.in/wp-content/uploads/2021/09/turmeric-powder-fop-600x600.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994463",
    title: "Cumin Seeds",
    description:
      "Premium cumin seeds for rich, aromatic flavor in your dishes.",
    price: 80,
    discountPercentage: 5.0,
    stockQuantity: 120,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f5994437",
    thumbnail:
      "https://d3kgrlupo77sg7.cloudfront.net/media/chococoorgspice.com/images/products/organic-shahjeera-250-gm-shahi-jeera-shah-jeera-caraway-seeds-black-cumin-seeds-coorg-spices.20220909012057.webp",
    images: [
      "https://www.indianasapplepie.com/cdn/shop/articles/IMG-1444_2000x.jpg?v=1689862468",
      "https://www.jalaramagri.com/wp-content/uploads/2019/10/cumin-seeds.jpg",
      "https://kinalglobalcare.com/wp-content/uploads/cumin-seeds-big.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994464",
    title: "Chili Powder",
    description: "Spicy chili powder to add a fiery kick to your meals.",
    price: 44,
    discountPercentage: 8.0,
    stockQuantity: 150,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f5994437",
    thumbnail:
      "https://m.media-amazon.com/images/I/71zHXhA0pKL._AC_UF1000,1000_QL80_.jpg",
    images: [
      "https://kaaduorganics.com/wp-content/uploads/2024/04/KaaduOrganics_RedChillyPowder.webp",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtndhfbuJwtqy67jY82YhNFwePleqEYrv89w&s",
      "https://veganwithgusto.com/wp-content/uploads/2023/09/homemade-chili-powder-in-bowl.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994465",
    title: "Coriander Powder",
    description: "Ground coriander powder with a mild, citrusy flavor.",
    price: 45,
    discountPercentage: 6.0,
    stockQuantity: 95,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f5994437",
    thumbnail:
      "https://sitarafoods.com/wp-content/uploads/2023/11/coriander-powder-dhaniya-Sitara-Foods.jpeg",
    images: [
      "https://organicmandya.com/cdn/shop/files/CorianderPowder_2_3a20e582-6d45-48c3-b4cc-83b1625605b6.jpg?v=1719080700&width=1024",
      "https://m.media-amazon.com/images/I/81zNkbL9IGL.jpg",
      "https://www.health-fields.com/wp-content/uploads/2020/07/organic-coriander-powder.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
  {
    _id: "65a7e45902e12c44f5994466",
    title: "Garam Masala",
    description: "A blend of aromatic spices commonly used in Indian cuisine.",
    price: 60,
    discountPercentage: 9.0,
    stockQuantity: 110,
    brand: "65a7e20102e12c44f59943e3",
    category: "65a7e24602e12c44f5994437",
    thumbnail:
      "https://www.seriouseats.com/thmb/kcVRsgt94S0g9N9I2zljZiOt1fQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__04__20150402-garam-masala-2879a150647d4403bdc0645e71a2ae0a.jpg",
    images: [
      "https://m.media-amazon.com/images/I/812mo1aHIDL.jpg",
      "https://catchfoods.com/wp-content/uploads/2023/09/everything-to-know-about-garam-masala.png",
      "https://spiceeats.com/wp-content/uploads/2020/07/Garam-Masala.jpg",
    ],
    isDeleted: false,
    updatedAt: "2024-02-07T09:22:57.840Z",
  },
];

exports.seedProduct = async () => {
  try {
    await Product.insertMany(products);
    console.log("Product seeded successfully");
  } catch (error) {
    console.log(error);
  }
};
