import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

import products from "@/data/products";

export default function RelatedProducts() {
  const { id } = useParams();

  const currentProduct = products.find(
    (product) => product.id === Number(id)
  );

  const [wishlist, setWishlist] = useState([]);

  if (!currentProduct) {
    return null;
  }

  // First try products from the same category
  let relatedProducts = products.filter(
    (product) =>
      product.category === currentProduct.category &&
      product.id !== currentProduct.id
  );

  // If there aren't enough products in the same category,
  // fill the remaining cards with other products.
  if (relatedProducts.length < 4) {
    const otherProducts = products.filter(
      (product) =>
        product.id !== currentProduct.id &&
        !relatedProducts.some(
          (related) => related.id === product.id
        )
    );

    relatedProducts = [
      ...relatedProducts,
      ...otherProducts,
    ];
  }

  // Display maximum 4 products
  relatedProducts = relatedProducts.slice(0, 4);

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  };

  return (
    <section className="border-t border-[#E5DED5] bg-white px-6 py-20 md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-12 flex items-end justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.3em] text-[#A88952]">
              Curated For You
            </p>

            <h2 className="mt-4 font-serif text-4xl text-[#171717] md:text-5xl">
              You May Also Like
            </h2>

          </div>

          <Link
            to="/collection"
            className="
              hidden
              border-b
              border-[#171717]
              pb-1
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#171717]
              transition-opacity
              hover:opacity-50
              sm:block
            "
          >
            View Collection
          </Link>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {relatedProducts.map((product, index) => {

            const isWishlisted = wishlist.includes(product.id);

            return (
              <motion.article
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group"
              >

                {/* Image */}

                <div className="relative overflow-hidden rounded-2xl bg-[#F5F1ED]">

                  <Link to={`/product/${product.id}`}>

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="
                        aspect-[4/5]
                        h-full
                        w-full
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />

                  </Link>

                  {/* Wishlist */}

                  <button
                    onClick={() =>
                      toggleWishlist(product.id)
                    }
                    aria-label={`Add ${product.name} to wishlist`}
                    className="
                      absolute
                      right-4
                      top-4
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      shadow-sm
                      backdrop-blur-sm
                      transition-transform
                      duration-300
                      hover:scale-105
                    "
                  >

                    <Heart
                      size={17}
                      strokeWidth={1.5}
                      className={
                        isWishlisted
                          ? "fill-[#C7A45A] text-[#C7A45A]"
                          : "text-[#171717]"
                      }
                    />

                  </button>

                  {/* New Badge */}

                  {product.isNew && (
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white/90
                        px-3
                        py-1.5
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-[#171717]
                        backdrop-blur-sm
                      "
                    >
                      New
                    </span>
                  )}

                  {/* Hover Explore */}

                  <Link
                    to={`/product/${product.id}`}
                    className="
                      absolute
                      bottom-4
                      left-4
                      right-4
                      flex
                      translate-y-3
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      bg-white/95
                      py-3
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      text-[#171717]
                      opacity-0
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      group-hover:translate-y-0
                      group-hover:opacity-100
                    "
                  >
                    View Product
                    <ArrowUpRight size={14} />
                  </Link>

                </div>

                {/* Product Information */}

                <div className="pt-5">

                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#A88952]">
                    {product.category}
                  </p>

                  <Link to={`/product/${product.id}`}>

                    <h3 className="mt-2 font-serif text-xl text-[#171717] transition-opacity hover:opacity-60">
                      {product.name}
                    </h3>

                  </Link>

                  <div className="mt-3 flex items-center justify-between">

                    <p className="text-sm font-medium text-[#171717]">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <span>★</span>
                      <span>{product.rating || "4.9"}</span>
                    </div>

                  </div>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Mobile View Collection */}

        <div className="mt-10 flex justify-center sm:hidden">

          <Link
            to="/collections"
            className="
              border-b
              border-[#171717]
              pb-1
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#171717]
            "
          >
            View Collection
          </Link>

        </div>

      </div>

    </section>
  );
}