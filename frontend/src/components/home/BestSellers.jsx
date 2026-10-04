import { motion } from "framer-motion";
import { Heart, ArrowUpRight } from "lucide-react";

import bestseller1 from "@/assets/images/bestSellers/bestseller1.png";
import bestseller2 from "@/assets/images/bestSellers/bestseller2.png";
import bestseller3 from "@/assets/images/bestSellers/bestseller3.png";

const bestSellers = [
  {
    id: 1,
    name: "Élan Signature Stiletto",
    category: "Stilettos",
    price: "₹11,999",
    image: bestseller1,
  },
  {
    id: 2,
    name: "Noir Sculpted Pumps",
    category: "Pumps",
    price: "₹9,499",
    image: bestseller2,
  },
  {
    id: 3,
    name: "Aurelia Block Heels",
    category: "Block Heels",
    price: "₹8,999",
    image: bestseller3,
  },
];

export default function BestSellers() {
  return (
    <section className="bg-[#F9F6F3] px-6 py-24 md:px-10 lg:px-16">
      {/* Header */}
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A88952]">
            Most Loved
          </p>

          <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">
            Best Sellers
          </h2>

          <p className="mt-4 max-w-md text-sm leading-7 text-neutral-500">
            Timeless silhouettes chosen by women who appreciate effortless
            elegance.
          </p>
        </div>

        <button
          className="
            hidden
            items-center
            gap-2
            border-b
            border-[#171717]
            pb-1
            text-xs
            uppercase
            tracking-[0.2em]
            text-[#171717]
            transition-opacity
            hover:opacity-50
            md:flex
          "
        >
          Shop Best Sellers
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </button>
      </div>

      {/* Main Layout */}
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Featured Bestseller */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-2xl bg-[#EDE8E1]"
        >
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[680px]">
            <img
              src={bestSellers[0].image}
              alt={bestSellers[0].name}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-105
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

            {/* Bestseller Badge */}
            <div
              className="
                absolute
                left-6
                top-6
                rounded-full
                bg-white/90
                px-5
                py-2
                text-[10px]
                uppercase
                tracking-[0.2em]
                text-[#171717]
                backdrop-blur-sm
              "
            >
              Bestseller
            </div>

            {/* Wishlist */}
            <button
              aria-label="Add bestseller to wishlist"
              className="
                absolute
                right-6
                top-6
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/90
                text-[#171717]
                backdrop-blur-sm
                transition-all
                hover:bg-[#171717]
                hover:text-white
              "
            >
              <Heart size={18} strokeWidth={1.5} />
            </button>

            {/* Product Content */}
            <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
              <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/70">
                {bestSellers[0].category}
              </p>

              <div className="flex items-end justify-between gap-5">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl">
                    {bestSellers[0].name}
                  </h3>

                  <p className="mt-3 text-sm text-white/80">
                    {bestSellers[0].price}
                  </p>
                </div>

                <button
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#171717]
                    transition-transform
                    hover:scale-110
                  "
                  aria-label="View product"
                >
                  <ArrowUpRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Smaller Products */}
        <div className="flex flex-col gap-6">
          {bestSellers.slice(1).map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group grid grid-cols-[42%_1fr] overflow-hidden rounded-2xl bg-white"
            >
              {/* Image */}
              <div className="relative min-h-[250px] overflow-hidden bg-[#F1EEE9]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                <button
                  aria-label={`Add ${product.name} to wishlist`}
                  className="
                    absolute
                    right-4
                    top-4
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-white/90
                    text-[#171717]
                    backdrop-blur-sm
                    transition-all
                    hover:bg-[#171717]
                    hover:text-white
                  "
                >
                  <Heart size={15} strokeWidth={1.5} />
                </button>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#A88952]">
                  {product.category}
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#171717]">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm text-neutral-600">
                  {product.price}
                </p>

                <button
                  className="
                    mt-6
                    flex
                    w-fit
                    items-center
                    gap-2
                    border-b
                    border-[#171717]
                    pb-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-[#171717]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  View Product
                  <ArrowUpRight size={13} strokeWidth={1.5} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Mobile Button */}
      <div className="mt-10 flex justify-center md:hidden">
        <button
          className="
            flex
            items-center
            gap-2
            border-b
            border-[#171717]
            pb-1
            text-xs
            uppercase
            tracking-[0.2em]
          "
        >
          Shop Best Sellers
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}