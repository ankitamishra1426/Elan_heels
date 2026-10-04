import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";

import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import Footer from "@/components/layout/Footer";
import heels from "@/data/products";

export default function Sale() {
  const saleProducts = heels.filter(
    (heel) => heel.isSale === true
  );

  return (
    <>
      <SecondaryNavbar />

      <main className="min-h-screen bg-[#F9F6F3] ">

        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-[#171717] pt-15">
          <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
            <div className="grid items-center gap-12 md:grid-cols-2">

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-[#C7A45A]/50 px-5 py-2 text-xs uppercase tracking-[0.25em] text-[#D4AF37]">
                  <Tag className="h-3.5 w-3.5" />
                  ÉLAN Sale
                </span>

                <h1 className="mt-7 font-serif text-5xl leading-tight text-white md:text-7xl">
                  The ÉLAN
                  <br />
                  <span className="text-[#C7A45A]">Edit</span>
                </h1>

                <p className="mt-6 max-w-lg text-sm leading-7 text-neutral-400 md:text-base">
                  Discover selected ÉLAN silhouettes at exclusive prices.
                  Timeless heels, refined craftsmanship and effortless
                  elegance.
                </p>

                <Link
                  to="#sale-products"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#C7A45A] px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[#D4AF37]"
                >
                  Shop The Edit
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              {/* Decorative Side */}
             {/* Decorative Side */}
<motion.div
  initial={{ opacity: 0, scale: 0.85, x: 30 }}
  animate={{ opacity: 1, scale: 1, x: 0 }}
  transition={{
    duration: 1.2,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative hidden h-[420px] overflow-hidden md:block"
>
  {/* Large Rotating Ring */}
  <motion.div
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 35,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      right-8
      top-8
      h-80
      w-80
      rounded-full
      border
      border-[#C7A45A]/20
    "
  />

  {/* Second Rotating Ring */}
  <motion.div
    animate={{
      rotate: -360,
    }}
    transition={{
      duration: 25,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute
      right-20
      top-20
      h-56
      w-56
      rounded-full
      border
      border-dashed
      border-[#C7A45A]/20
    "
  />

  {/* Gold Glow */}
  <motion.div
    animate={{
      scale: [1, 1.25, 1],
      opacity: [0.15, 0.3, 0.15],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-32
      top-32
      h-40
      w-40
      rounded-full
      bg-[#C7A45A]/20
      blur-3xl
    "
  />

  {/* Floating Small Circle */}
  <motion.div
    animate={{
      y: [-10, 15, -10],
      x: [0, 8, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-24
      top-16
      h-3
      w-3
      rounded-full
      bg-[#C7A45A]
    "
  />

  {/* Floating Small Circle 2 */}
  <motion.div
    animate={{
      y: [10, -15, 10],
      x: [0, -10, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1,
    }}
    className="
      absolute
      right-72
      top-48
      h-2
      w-2
      rounded-full
      bg-[#D4AF37]/70
    "
  />

  {/* Center Glow */}
  <motion.div
    animate={{
      scale: [0.9, 1.1, 0.9],
      opacity: [0.2, 0.4, 0.2],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      right-40
      top-40
      h-20
      w-20
      rounded-full
      bg-[#D4AF37]/20
      blur-2xl
    "
  />

  {/* ÉLAN Text */}
  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="
      absolute
      bottom-10
      right-0
      text-right
    "
  >
    <motion.p
      animate={{
        opacity: [0.03, 0.08, 0.03],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="font-serif text-8xl text-white"
    >
      ÉLAN
    </motion.p>

    <motion.p
      animate={{
        letterSpacing: ["0.3em", "0.45em", "0.3em"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        text-xs
        uppercase
        text-[#C7A45A]/60
      "
    >
      Seasonal Edit
    </motion.p>
  </motion.div>
</motion.div>

            </div>
          </div>
        </section>

        {/* ================= SALE PRODUCTS ================= */}
        <section
          id="sale-products"
          className="mx-auto max-w-7xl px-6 py-20 md:px-10"
        >
          {/* Section Header */}
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A88952]">
                Curated For You
              </p>

              <h2 className="mt-3 font-serif text-4xl text-[#171717] md:text-5xl">
                Sale Collection
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                A selection of signature ÉLAN styles, now available at
                special prices.
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              {saleProducts.length} Styles
            </p>
          </div>

          {/* Products */}
          {saleProducts.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {saleProducts.map((product, index) => (
                <SaleProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <EmptySale />
          )}
        </section>

      </main>

      <Footer />
    </>
  );
}


/* =========================================================
   SALE PRODUCT CARD
========================================================= */

function SaleProductCard({ product, index }) {
  const image = product.images?.[0] || product.image;

  const originalPrice = product.originalPrice || product.price * 1.2;

  const discount = Math.round(
    ((originalPrice - product.price) / originalPrice) * 100
  );

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
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
        delay: index * 0.05,
      }}
      className="group"
    >
      {/* Image */}
      <Link
        to={`/product/${product.id}`}
        className="relative block overflow-hidden rounded-3xl bg-[#EEE8E1]"
      >
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        {/* Sale Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-[#171717] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-white">
          Sale
        </span>

        {/* Discount */}
        <span className="absolute right-4 top-4 rounded-full bg-[#C7A45A] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.15em] text-black">
          -{discount}%
        </span>
      </Link>

      {/* Details */}
      <div className="mt-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#A88952]">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="mt-2 font-serif text-xl text-[#171717] transition hover:text-[#A88952]">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-sm font-medium text-[#171717]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          <span className="text-sm text-neutral-400 line-through">
            ₹{Math.round(originalPrice).toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </motion.article>
  );
}


/* =========================================================
   EMPTY SALE
========================================================= */

function EmptySale() {
  return (
    <div className="rounded-3xl border border-[#DDD6CE] bg-white px-6 py-20 text-center">
      <Tag className="mx-auto h-10 w-10 text-[#C7A45A]" />

      <h3 className="mt-6 font-serif text-3xl text-[#171717]">
        No Sale Styles Yet
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-neutral-500">
        Our seasonal edit is currently being curated.
        Check back soon for exclusive ÉLAN offers.
      </p>

      <Link
        to="/collections"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#171717] px-7 py-4 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-[#C7A45A] hover:text-black"
      >
        Explore Collection
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}