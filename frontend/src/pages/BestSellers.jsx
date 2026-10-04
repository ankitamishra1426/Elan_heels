import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import heels from "@/data/products";
import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import Footer from "@/components/layout/Footer";
export default function BestSellers() {

  // =========================================
  // GET ONLY BEST SELLER PRODUCTS
  // =========================================

  const bestSellerProducts = heels.filter(
    (heels) => heels.isBestSeller === true
  );

  return (
    <main className="min-h-screen bg-[#F9F6F3]">
    <SecondaryNavbar />
      {/* =====================================
          PAGE INTRO
      ===================================== */}

      <section className="px-6 pb-16 pt-36 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Small Label */}

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              mb-4
              text-xs
              uppercase
              tracking-[0.3em]
              text-[#A88952]
            "
          >
            ÉLAN Icons
          </motion.p>


          {/* Heading */}

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              max-w-3xl
              font-serif
              text-5xl
              leading-[1.05]
              text-[#171717]
              md:text-6xl
              lg:text-7xl
            "
          >
            Best Sellers
          </motion.h1>


          {/* Description */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-neutral-500
              md:text-base
            "
          >
            Discover the silhouettes our ÉLAN women
            return to season after season. Signature
            designs defined by elegance, confidence,
            and timeless appeal.
          </motion.p>

        </div>

      </section>


      {/* =====================================
          PRODUCT SECTION
      ===================================== */}

      <section className="px-6 pb-28 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* =================================
              TOOLBAR
          ================================= */}

          <div
            className="
              mb-8
              flex
              items-center
              justify-between
              border-y
              border-[#DDD6CE]
              py-5
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.15em]
                text-neutral-500
              "
            >
              {bestSellerProducts.length}{" "}
              {bestSellerProducts.length === 1
                ? "Piece"
                : "Pieces"}
            </p>


            <Link
              to="/collections"
              className="
                group
                flex
                items-center
                gap-2
                text-xs
                uppercase
                tracking-[0.15em]
                text-[#171717]
                transition-opacity
                hover:opacity-50
              "
            >
              View All Collections

              <ArrowRight
                size={14}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>


          {/* =================================
              PRODUCT GRID
          ================================= */}

          {bestSellerProducts.length > 0 ? (

            <div
              className="
                grid
                grid-cols-1
                gap-x-5
                gap-y-12
                sm:grid-cols-2
                lg:grid-cols-3
                xl:grid-cols-4
              "
            >

              {bestSellerProducts.map((product, index) => (

                <BestSellerCard
                  key={product.id}
                  product={product}
                  index={index}
                />

              ))}

            </div>

          ) : (

            /* =================================
               EMPTY STATE
            ================================= */

            <div
              className="
                flex
                min-h-[400px]
                items-center
                justify-center
                rounded-2xl
                bg-white
              "
            >

              <div className="text-center">

                <p
                  className="
                    mb-3
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    text-[#A88952]
                  "
                >
                  Coming Soon
                </p>


                <h2
                  className="
                    font-serif
                    text-3xl
                    text-[#171717]
                  "
                >
                  Our Icons Are Coming Soon
                </h2>


                <p
                  className="
                    mx-auto
                    mt-4
                    max-w-md
                    text-sm
                    leading-6
                    text-neutral-500
                  "
                >
                  We're preparing our most-loved ÉLAN
                  silhouettes for you.
                </p>


                <Link
                  to="/collections"
                  className="
                    mt-7
                    inline-flex
                    rounded-full
                    bg-[#C7A45A]
                    px-7
                    py-3.5
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-white
                    transition
                    hover:bg-[#B4914D]
                  "
                >
                  Explore Collection
                </Link>

              </div>

            </div>

          )}

        </div>

      </section>
<Footer />
    </main>
  );
}


/* =========================================
   BEST SELLER CARD
========================================= */

function BestSellerCard({ product, index }) {

  // Your current product structure uses
  // an images array.

  const image =
    product.images?.[0] || product.image;

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
        margin: "-50px",
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
      }}
      className="group"
    >

      {/* =====================================
          PRODUCT IMAGE
      ===================================== */}

      <Link
        to={`/product/${product.id}`}
        className="
          relative
          block
          overflow-hidden
          rounded-xl
          bg-[#EEE8E1]
        "
      >

        <div className="aspect-[4/5]">

          <img
            src={image}
            alt={product.name}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-105
            "
          />

        </div>


        {/* =================================
            BEST SELLER BADGE
        ================================= */}

        <div
          className="
            absolute
            left-4
            top-4
            flex
            items-center
            gap-1.5
            rounded-full
            bg-white/90
            px-3
            py-1.5
            backdrop-blur-sm
          "
        >

          <Star
            size={10}
            fill="currentColor"
            className="text-[#A88952]"
          />

          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#171717]
            "
          >
            Best Seller
          </span>

        </div>

      </Link>


      {/* =====================================
          PRODUCT INFORMATION
      ===================================== */}

      <div className="pt-5">

        {/* Category */}

        <p
          className="
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#A88952]
          "
        >
          {product.category}
        </p>


        {/* Name + Price */}

        <div
          className="
            mt-2
            flex
            items-start
            justify-between
            gap-4
          "
        >

          <Link
            to={`/product/${product.id}`}
            className="
              font-serif
              text-xl
              leading-tight
              text-[#171717]
              transition-opacity
              hover:opacity-60
            "
          >
            {product.name}
          </Link>


          <p
            className="
              shrink-0
              text-sm
              text-[#171717]
            "
          >
            ₹{product.price.toLocaleString("en-IN")}
          </p>

        </div>


        {/* =================================
            RATING
        ================================= */}

        {product.rating && (

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
            "
          >

            <div className="flex">

              {[1, 2, 3, 4, 5].map((star) => (

                <Star
                  key={star}
                  size={12}
                  fill={
                    star <= Math.round(product.rating)
                      ? "currentColor"
                      : "none"
                  }
                  className="text-[#A88952]"
                />

              ))}

            </div>

            <span className="text-xs text-neutral-500">
              {product.rating}
            </span>

          </div>

        )}

      </div>

    </motion.article>
  );
}