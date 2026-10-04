import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingBag, ArrowRight, X } from "lucide-react";

import products from "@/data/products";

import SecondaryNavbar from "@/components/layout/SecondaryNavbar"; 
import Footer from "@/components/layout/Footer";

export default function Wishlist() {

  // Temporary wishlist
  // Later we will replace this with WishlistContext
  const wishlistIds = [1, 2, 3];

  const wishlistProducts = products.filter((product) =>
    wishlistIds.includes(product.id)
  );

  return (
    <>
      {/* =========================================
          NAVBAR
      ========================================= */}

      <SecondaryNavbar />


      {/* =========================================
          MAIN CONTENT
      ========================================= */}

      <main className="min-h-screen bg-[#F9F6F3]">

        {/* PAGE HEADER */}

        <section className="px-6 pb-12 pt-36 md:px-10 lg:px-16">

          <div className="mx-auto max-w-7xl">

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
              Your ÉLAN Edit
            </motion.p>


            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                font-serif
                text-5xl
                leading-tight
                text-[#171717]
                md:text-6xl
              "
            >
              Your Wishlist
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-neutral-500
              "
            >
              Keep the pieces you love close.
              Your favorite ÉLAN silhouettes are
              saved here for whenever you're ready.
            </motion.p>

          </div>

        </section>


        {/* WISHLIST */}

        <section className="px-6 pb-28 md:px-10 lg:px-16">

          <div className="mx-auto max-w-7xl">

            {wishlistProducts.length > 0 ? (

              <>

                {/* TOOLBAR */}

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
                    {wishlistProducts.length}{" "}
                    {wishlistProducts.length === 1
                      ? "Saved Piece"
                      : "Saved Pieces"}
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
                    Continue Shopping

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


                {/* PRODUCT GRID */}

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

                  {wishlistProducts.map((product, index) => (

                    <WishlistCard
                      key={product.id}
                      product={product}
                      index={index}
                    />

                  ))}

                </div>

              </>

            ) : (

              <EmptyWishlist />

            )}

          </div>

        </section>

      </main>


      {/* =========================================
          FOOTER
      ========================================= */}

      <Footer />
    </>
  );
}


/* ==================================================
   WISHLIST CARD
================================================== */

function WishlistCard({ product, index }) {

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

      {/* IMAGE */}

      <div
        className="
          relative
          overflow-hidden
          rounded-xl
          bg-[#EEE8E1]
        "
      >

        <Link
          to={`/product/${product.id}`}
          className="block"
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

        </Link>


        {/* REMOVE BUTTON */}

        <button
          type="button"
          aria-label={`Remove ${product.name} from wishlist`}
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
            text-neutral-700
            shadow-sm
            backdrop-blur-sm
            transition
            hover:bg-white
            hover:text-black
          "
        >
          <X size={15} />
        </button>


        {/* ADD TO BAG */}

        <button
          type="button"
          className="
            absolute
            bottom-4
            left-4
            right-4
            flex
            items-center
            justify-center
            gap-2
            rounded-full
            bg-white/95
            py-3
            text-[10px]
            uppercase
            tracking-[0.18em]
            text-[#171717]
            opacity-0
            backdrop-blur-sm
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >

          <ShoppingBag size={14} />

          Add to Bag

        </button>

      </div>


      {/* PRODUCT DETAILS */}

      <div className="pt-5">

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


        {/* RATING */}

        {product.rating && (

          <div className="mt-3 flex items-center gap-2">

            <Heart
              size={12}
              fill="currentColor"
              className="text-[#A88952]"
            />

            <span className="text-xs text-neutral-500">
              {product.rating}
            </span>

          </div>

        )}

      </div>

    </motion.article>
  );
}


/* ==================================================
   EMPTY WISHLIST
================================================== */

function EmptyWishlist() {

  return (
    <div
      className="
        flex
        min-h-[520px]
        items-center
        justify-center
        rounded-2xl
        bg-white
        px-6
        py-20
        shadow-sm
      "
    >

      <div className="flex max-w-lg flex-col items-center text-center">

        {/* HEART */}

        <div
          className="
            mb-8
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-[#F5F1ED]
          "
        >

          <Heart
            size={30}
            strokeWidth={1.2}
            className="text-[#A88952]"
          />

        </div>


        <p
          className="
            mb-4
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-[#A88952]
          "
        >
          Your ÉLAN Edit
        </p>


        <h2
          className="
            font-serif
            text-4xl
            leading-tight
            text-[#171717]
            md:text-5xl
          "
        >
          Your Wishlist
          <br />
          Is Empty
        </h2>


        <p
          className="
            mt-5
            max-w-md
            text-sm
            leading-7
            text-neutral-500
          "
        >
          Save the silhouettes that catch your eye
          and create your own carefully curated
          collection.
        </p>


        <Link
          to="/collections"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-3
            rounded-full
            bg-[#C7A45A]
            px-8
            py-4
            text-xs
            uppercase
            tracking-[0.16em]
            text-white
            transition
            hover:bg-[#B4914D]
          "
        >

          Explore Collection

          <ArrowRight
            size={15}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />

        </Link>

      </div>

    </div>
  );
}