import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

export default function ProductGrid({ products = [] }) {
  return (
    <section className="bg-[#F9F6F3] px-6 pb-24 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* Empty State */}
        {products.length === 0 ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <p className="text-center font-serif text-2xl text-neutral-500">
              No products found.
            </p>
          </div>
        ) : (
          /* Product Grid */
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group cursor-pointer"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-3xl bg-white">

                  {/* Badge */}
                  {product.isNew && (
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        z-20
                        rounded-full
                        bg-[#C7A45A]
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-white
                      "
                    >
                      New
                    </span>
                  )}

                  {!product.isNew && product.isBestSeller && (
                    <span
                      className="
                        absolute
                        left-4
                        top-4
                        z-20
                        rounded-full
                        bg-[#171717]
                        px-3
                        py-1
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        text-white
                      "
                    >
                      Best Seller
                    </span>
                  )}

                  {/* Wishlist */}
                  <button
                    type="button"
                    onClick={(e) => e.stopPropagation()}
                    className="
                      absolute
                      right-4
                      top-4
                      z-20
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      shadow-lg
                      transition-all
                      duration-300
                      hover:bg-[#C7A45A]
                      hover:text-white
                    "
                  >
                    <Heart size={18} strokeWidth={1.7} />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                      h-[430px]
                      w-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Product Info */}
                <div className="mt-6">

                  {/* Category */}
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.28em]
                      text-[#A88952]
                    "
                  >
                    {product.category}
                  </p>

                  {/* Name */}
                  <h3
                    className="
                      mt-3
                      font-serif
                      text-2xl
                      text-[#171717]
                      transition-colors
                      duration-300
                      group-hover:text-[#A88952]
                    "
                  >
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-2">
                    <Star
                      size={15}
                      fill="#C7A45A"
                      stroke="#C7A45A"
                    />

                    <span className="text-sm text-neutral-600">
                      {product.rating}
                    </span>
                  </div>

                  {/* Price */}
                  <p
                    className="
                      mt-4
                      text-xl
                      font-semibold
                      text-[#171717]
                    "
                  >
                    ₹ {product.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}