import { ArrowRight, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <section className="flex min-h-[520px] items-center justify-center rounded-2xl bg-white px-6 py-20 shadow-sm">

      <div className="flex max-w-lg flex-col items-center text-center">

        {/* Icon */}

        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F1ED]">
          <ShoppingBag
            size={30}
            strokeWidth={1.2}
            className="text-[#A88952]"
          />
        </div>


        {/* Small Label */}

        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#A88952]">
          Your Collection Awaits
        </p>


        {/* Heading */}

        <h2 className="font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
          Your Shopping Bag
          <br />
          Is Empty
        </h2>


        {/* Description */}

        <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
          Your carefully curated selection is waiting
          for you. Discover elegant silhouettes crafted
          for the modern woman.
        </p>


        {/* Button */}

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
            font-medium
            uppercase
            tracking-[0.16em]
            text-white
            transition-all
            duration-300
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


        {/* Continue Shopping */}

        <Link
          to="/"
          className="
            mt-6
            text-xs
            uppercase
            tracking-[0.15em]
            text-neutral-500
            underline
            underline-offset-4
            transition-colors
            hover:text-black
          "
        >
          Return Home
        </Link>

      </div>

    </section>
  );
}