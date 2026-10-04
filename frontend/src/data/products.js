import heel1Front from "@/assets/images/products/product1/heel1-front.png";
import heel1Side from "@/assets/images/products/product1/heel1-side.png";
import heel1Back from "@/assets/images/products/product1/heel1-back.png";
import heel1Detail from "@/assets/images/products/product1/heel1-closeup.png";
import heel1Top from "@/assets/images/products/product1/heel1-top.png";

import heel1Black from "@/assets/images/products/product1/black-heel1-front.png"
import heel1Nude from "@/assets/images/products/product1/nudePink-heel1-front.png"
import heel2Front from "@/assets/images/products/product2/heel2-front.png";
import heel2Side from "@/assets/images/products/product2/heel2-side.png";
import heel2Back from "@/assets/images/products/product2/heel2-back.png";
import heel2Detail from "@/assets/images/products/product2/heel2-closeup.png";
import heel2Top from "@/assets/images/products/product2/heel2-top.png";

import heel3Front from "@/assets/images/products/product3/heel3-front.png";
import heel3Side from "@/assets/images/products/product3/heel3-side.png";
import heel3Back from "@/assets/images/products/product3/heel3-back.png";
import heel3Detail from "@/assets/images/products/product3/heel3-closeup.png";
import heel3Top from "@/assets/images/products/product3/heel3-top.png";

import heel4Front from "@/assets/images/products/product4/heel4-front.png";
// import heel4Side from "@/assets/images/products/product4/heel4-side.png";
import heel4Back from "@/assets/images/products/product4/heel4-back.png";
// import heel4Detail from "@/assets/images/products/product4/heel4-closeup.png";
import heel4Top from "@/assets/images/products/product4/heel4-top.png";

import heel5Front from "@/assets/images/products/product5/heel5-front.png";
import heel5Side from "@/assets/images/products/product5/heel5-side.png";
import heel5Back from "@/assets/images/products/product5/heel5-back.png";
// import heel5Detail from "@/assets/images/products/product5/heel5-closeup.png";
import heel5Top from "@/assets/images/products/product5/heel5-top.png";

// import heel6Front from "@/assets/images/products/product6/heel6-front.png";
// import heel6Side from "@/assets/images/products/product6/heel6-side.png";
// import heel6Back from "@/assets/images/products/product6/heel6-back.png";
// import heel6Detail from "@/assets/images/products/product6/heel6-closeup.png";
// import heel6Top from "@/assets/images/products/product6/heel6-top.png";

// import heel7Front from "@/assets/images/products/product7/heel7-front.png";
// import heel7Side from "@/assets/images/products/product7/heel7-side.png";
// import heel7Back from "@/assets/images/products/product7/heel7-back.png";
// import heel7Detail from "@/assets/images/products/product7/heel7-closeup.png";
// import heel7Top from "@/assets/images/products/product7/heel7-top.png";

import heel8Front from "@/assets/images/products/product8/heel8-front.png";
import heel8Side from "@/assets/images/products/product8/heel8-side.png";
import heel8Back from "@/assets/images/products/product8/heel8-back.png";
import heel8Detail from "@/assets/images/products/product8/heel8-closeup.png";
import heel8Top from "@/assets/images/products/product8/heel8-top.png";
// Product Images

 const heels = [
  {
    id: 1,
    name: "Élan Signature Stiletto",
    category: "Stilettos",
    price: 9999,

    
    colors: [
    {
      name: "Black",
      image: heel1Back,
      value: "#171717",
    },
    {
      name: "Nude",
      value: "#D8B89C",
      image: heel1Nude,
    },
    {
      name: "Gold",
      value: "#C7A45A",
      images: [
      heel1Front,
      heel1Back,
      heel1Detail,
      heel1Side,
      heel1Top,
    ],
    },
  ],

  sizes: [36, 37, 38, 39, 40],

    rating: 4.9,
    isNew: true,
    isBestSeller: true,
    isSale:true,
  description:
    "A sculptural stiletto designed for evening elegance.",

  material: "Premium vegan leather",

  heelHeight: "4.2 inches",

  care:
    "Store in a cool, dry place and clean with a soft cloth.",

  shipping:
    "Complimentary shipping with 7-day returns.",
  },

  {
    id: 2,
    name: "Noir Sculpted Pumps",
    category: "Pumps",
    price: 8499,

    images: [
      heel2Front,
      heel2Side,
      heel2Back,
      heel2Detail,
      heel2Top,
    ],
    colors: [
    {
      name: "Sky Blue",
      value: "#87CEEB",
    },
    {
      name: "Pink",
      value: "#FFC0CB",
    },
    {
      name: "Red",
      value: "#ff0000",
    },
  ],
    rating: 4.8,
    isNew: false,
    isBestSeller: true,
    description:"A sleek and sophisticated pump with a modern design.",

    material: "Premium vegan leather",
    heelHeight: "3.5 inches",
    care:
      "Store in a cool, dry place and clean with a soft cloth.",

    shipping:
      "Complimentary shipping with 7-day returns.",
  },

    {
      id: 3,
      name: "Aurora Sandals",
      category: "Sandals",
      price: 7499,

      images: [
        heel3Front,
        heel3Side,
        heel3Back,
        heel3Detail,
      ],

      rating: 4.7,
      isNew: true,
      isBestSeller: false,
    },

    {
      id: 4,
      name: "Luna Block Heels",
      category: "Block Heels",
      price: 7999,

      images: [
        heel4Front,
        // heel4Side,
        heel4Back,
        // heel4Detail,
        heel4Top,
      ],

      rating: 4.8,
      isNew: true,
      isBestSeller: false,
    },

    {
      id: 5,
      name: "Velvet Knee Boots",
      category: "Boots",
      price: 11499,

      images: [
        heel5Front,
        heel5Side,
        heel5Back,
        // heel5Detail,
        heel5Top,
      ],

      rating: 4.9,
      isNew: false,
      isBestSeller: true,
    },

    {
      id: 6,
      name: "Pearl Mules",
      category: "Mules",
      price: 6899,

      images: [
        // heel6Front,
        // heel6Side,
        // heel6Back,
        // heel6Detail,
        // heel6Top,
      ],

      rating: 4.6,
      isNew: false,
      isBestSeller: false,
    },

    {
      id: 7,
      name: "Crystal Kitten Heels",
      category: "Kitten Heels",
      price: 7699,

      images: [
        // heel7Front,
        // heel7Side,
        // heel7Back,
        // heel7Detail,
        // heel7Top,
      ],

      rating: 4.7,
      isNew: true,
      isBestSeller: false,
    },

    {
      id: 8,
      name: "Golden Evening Pumps",
      category: "Pumps",
      price: 9299,

      images: [
        heel8Front,
        heel8Side,
        heel8Back,
        heel8Detail,
        heel8Top,
      ],

      rating: 4.9,
      isNew: false,
      isBestSeller: true,
    },
];

export default heels;

