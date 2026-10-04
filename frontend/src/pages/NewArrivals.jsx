import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import products from "@/data/products";
import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import Footer from "@/components/layout/Footer";
export default function NewArrivals() {
  // ----------------------------------------
  // GET ONLY NEW ARRIVAL PRODUCTS
  // ----------------------------------------

  const newProducts = products.filter(
    (product) => product.isNew === true
  );

  return (

    <main className="min-h-screen bg-[#F9F6F3]">
     <SecondaryNavbar />
      {/* =====================================
          PAGE HERO
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
            The Latest Edit
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
            New Arrivals
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
            Discover the latest silhouettes from ÉLAN.
            Sculptural heels, refined details, and timeless
            designs created for the modern woman.
          </motion.p>

        </div>

      </section>


      {/* =====================================
          PRODUCT SECTION
      ===================================== */}

      <section className="px-6 pb-28 md:px-10 lg:px-16">

        <div className="mx-auto max-w-7xl">

          {/* Toolbar */}

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

            <p className="text-xs uppercase tracking-[0.15em] text-neutral-500">
              {newProducts.length}{" "}
              {newProducts.length === 1
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
              PRODUCTS GRID
          ================================= */}

          {newProducts.length > 0 ? (

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

              {newProducts.map((product, index) => (

                <NewArrivalCard
                  key={product.id}
                  product={product}
                  index={index}
                />

              ))}

            </div>

          ) : (

            /* EMPTY STATE */

            <div className="flex min-h-[400px] items-center justify-center rounded-2xl bg-white">

              <div className="text-center">

                <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A88952]">
                  Coming Soon
                </p>

                <h2 className="font-serif text-3xl text-[#171717]">
                  New Arrivals Are On Their Way
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500">
                  We're preparing something beautiful for
                  the next ÉLAN collection.
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
   NEW ARRIVAL PRODUCT CARD
========================================= */

function NewArrivalCard({ product, index }) {

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
          IMAGE
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


        {/* New Badge */}

        <div
          className="
            absolute
            left-4
            top-4
            rounded-full
            bg-white/90
            px-3
            py-1.5
            backdrop-blur-sm
          "
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.18em]
              text-[#171717]
            "
          >
            New
          </span>
        </div>

      </Link>


      {/* =====================================
          PRODUCT INFORMATION
      ===================================== */}

      <div className="pt-5">

        <p className="text-[10px] uppercase tracking-[0.18em] text-[#A88952]">
          {product.category}
        </p>


        <div className="mt-2 flex items-start justify-between gap-4">

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


          <p className="shrink-0 text-sm text-[#171717]">
            ₹{product.price.toLocaleString("en-IN")}
          </p>

        </div>


        {/* Rating */}

        {product.rating && (
          <div className="mt-3 flex items-center gap-2">

            <span className="text-xs text-[#A88952]">
              ★
            </span>

            <span className="text-xs text-neutral-500">
              {product.rating}
            </span>

          </div>
        )}

      </div>

    </motion.article>
  );
}