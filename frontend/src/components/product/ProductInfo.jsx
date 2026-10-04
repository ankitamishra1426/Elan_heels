import { useState } from "react";
import { useParams } from "react-router-dom";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

import heels from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductInfo() {
  const { id } = useParams();

  const product = heels.find(
    (item) => item.id === Number(id)
  );

  const { addItem, loading: cartLoading } = useCart();

  const [selectedSize, setSelectedSize] = useState(null);

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || ""
  );

  const [quantity, setQuantity] = useState(1);

  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="flex items-center justify-center rounded-3xl bg-white p-10">
        <p className="text-neutral-500">
          Product not found.
        </p>
      </div>
    );
  }

  const sizes = product.sizes || [36, 37, 38, 39, 40];

  const colors =
    product.colors || [
      {
        name: "Black",
        value: "#171717",
      },
      {
        name: "Nude",
        value: "#D8B89C",
      },
      {
        name: "Gold",
        value: "#C7A45A",
      },
    ];

  /*
    =========================================
    INCREASE QUANTITY
    =========================================
  */

  const increaseQuantity = () => {
    setQuantity((current) => current + 1);
  };

  /*
    =========================================
    DECREASE QUANTITY
    =========================================
  */

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  /*
    =========================================
    ADD TO CART
    =========================================
  */

  const handleAddToCart = async () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }

    const cartProduct = {
      productId: String(product.id),
      name: product.name,
      image:
        product.images?.[0] ||
        product.image ||
        "",
      price: product.price,
      size: String(selectedSize),
      quantity,
    };

    console.log("ADDING PRODUCT TO CART:", cartProduct);

    const success = await addItem(cartProduct);

    if (success) {
      console.log("PRODUCT ADDED SUCCESSFULLY");
    }
  };

  return (
    <section className="flex flex-col justify-center">

      {/* =====================================
          CATEGORY
      ===================================== */}

      <p className="text-xs uppercase tracking-[0.3em] text-[#A88952]">
        {product.category}
      </p>


      {/* =====================================
          PRODUCT NAME
      ===================================== */}

      <h1 className="mt-4 font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
        {product.name}
      </h1>


      {/* =====================================
          RATING
      ===================================== */}

      <div className="mt-5 flex items-center gap-3">

        <div className="flex items-center gap-1">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={16}
              className="fill-[#C7A45A] text-[#C7A45A]"
            />
          ))}

        </div>

        <span className="text-sm text-neutral-500">
          {product.rating || "4.9"} · 28 Reviews
        </span>

      </div>


      {/* =====================================
          PRICE
      ===================================== */}

      <div className="mt-7">

        <span className="text-2xl font-medium text-[#171717]">
          ₹{product.price.toLocaleString("en-IN")}
        </span>

        <p className="mt-2 text-sm text-neutral-500">
          Inclusive of all taxes
        </p>

      </div>

      <div className="my-8 h-px bg-[#E5DED5]" />


      {/* =====================================
          COLOR
      ===================================== */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <p className="text-sm font-medium text-[#171717]">
            Color
          </p>

          <p className="text-sm text-neutral-500">
            {selectedColor}
          </p>

        </div>

        <div className="flex items-center gap-3">

          {colors.map((color) => (

            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              aria-label={`Select ${color.name}`}
              className={`
                relative
                h-9
                w-9
                rounded-full
                border
                transition-all
                duration-300

                ${
                  selectedColor === color.name
                    ? "border-[#171717] ring-2 ring-[#C7A45A] ring-offset-2"
                    : "border-[#D8D0C6]"
                }
              `}
              style={{
                backgroundColor: color.value,
              }}
            />

          ))}

        </div>

      </div>


      {/* =====================================
          SIZE
      ===================================== */}

      <div className="mt-8">

        <div className="mb-4 flex items-center justify-between">

          <p className="text-sm font-medium text-[#171717]">
            Select Size
          </p>

          <button className="text-xs underline underline-offset-4">
            Size Guide
          </button>

        </div>

        <div className="grid grid-cols-5 gap-2">

          {sizes.map((size) => (

            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`
                h-12
                rounded-lg
                border
                text-sm
                transition-all
                duration-300

                ${
                  selectedSize === size
                    ? "border-[#171717] bg-[#171717] text-white"
                    : "border-[#D8D0C6] bg-white text-[#171717] hover:border-[#A88952]"
                }
              `}
            >
              {size}
            </button>

          ))}

        </div>

      </div>


      {/* =====================================
          QUANTITY + WISHLIST
      ===================================== */}

      <div className="mt-8 flex gap-3">

        {/* Quantity */}

        <div className="flex h-14 items-center rounded-full border border-[#D8D0C6] bg-white">

          <button
            onClick={decreaseQuantity}
            className="flex h-14 w-12 items-center justify-center text-neutral-600 transition hover:text-black"
            aria-label="Decrease quantity"
          >
            <Minus size={16} />
          </button>

          <span className="w-6 text-center text-sm">
            {quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="flex h-14 w-12 items-center justify-center text-neutral-600 transition hover:text-black"
            aria-label="Increase quantity"
          >
            <Plus size={16} />
          </button>

        </div>


        {/* Wishlist */}

        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-[#D8D0C6]
            bg-white
          "
          aria-label="Add to wishlist"
        >

          <Heart
            size={20}
            className={
              isWishlisted
                ? "fill-[#C7A45A] text-[#C7A45A]"
                : "text-[#171717]"
            }
          />

        </motion.button>

      </div>


      {/* =====================================
          ADD TO CART
      ===================================== */}

      <motion.button
        whileHover={{ scale: cartLoading ? 1 : 1.01 }}
        whileTap={{ scale: cartLoading ? 1 : 0.98 }}
        onClick={handleAddToCart}
        disabled={cartLoading}
        className="
          mt-4
          flex
          h-14
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#171717]
          text-sm
          font-medium
          uppercase
          tracking-[0.18em]
          text-white
          transition-colors
          duration-300
          hover:bg-[#A88952]
          disabled:cursor-not-allowed
          disabled:opacity-60
        "
      >

        <ShoppingBag size={19} strokeWidth={1.7} />

        {cartLoading ? "Adding..." : "Add To Cart"}

      </motion.button>


      {/* =====================================
          SHIPPING INFORMATION
      ===================================== */}

      <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E5DED5] pt-6">

        <div>

          <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
            Shipping
          </p>

          <p className="mt-2 text-sm text-[#171717]">
            Complimentary shipping
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
            Returns
          </p>

          <p className="mt-2 text-sm text-[#171717]">
            Easy 7-day returns
          </p>

        </div>

      </div>

    </section>
  );
}