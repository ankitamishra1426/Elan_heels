import { Minus, Plus, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm md:p-8">

      <div className="grid gap-6 sm:grid-cols-[150px_1fr_auto]">

        {/* =====================================
            PRODUCT IMAGE
        ===================================== */}

        <Link
          to={`/product/${item.productId}`}
          className="
            block
            overflow-hidden
            rounded-lg
            bg-[#F1ECE6]
          "
        >
          <img
            src={item.image}
            alt={item.name}
            className="
              aspect-[4/5]
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              hover:scale-105
            "
          />
        </Link>


        {/* =====================================
            PRODUCT INFORMATION
        ===================================== */}

        <div className="flex flex-col">

          <div className="flex items-start justify-between gap-4">

            <div>

              <Link
                to={`/product/${item.productId}`}
                className="
                  font-serif
                  text-2xl
                  leading-tight
                  text-[#171717]
                  transition-opacity
                  hover:opacity-60
                  md:text-3xl
                "
              >
                {item.name}
              </Link>

              <p className="mt-2 text-[11px] uppercase tracking-[0.1em] text-neutral-500">
                MIDNIGHT BLACK / {item.size} EU
              </p>

              <p className="mt-3 text-sm italic text-neutral-500">
                Limited Edition Luxury Heel
              </p>

            </div>


            {/* =================================
                REMOVE
            ================================= */}

            <button
              onClick={() => onRemove(item._id)}
              aria-label={`Remove ${item.name}`}
              className="
                shrink-0
                text-neutral-500
                transition
                hover:text-black
              "
            >
              <X size={20} strokeWidth={1.5} />
            </button>

          </div>


          {/* =================================
              BOTTOM
          ================================= */}

          <div className="mt-auto flex items-end justify-between gap-5 pt-8">

            {/* =================================
                QUANTITY
            ================================= */}

            <div
              className="
                flex
                h-8
                items-center
                overflow-hidden
                rounded-full
                border
                border-[#D8D2CC]
              "
            >

              {/* DECREASE */}

              <button
                onClick={() =>
                  onUpdateQuantity(
                    item._id,
                    item.quantity - 1
                  )
                }
                className="
                  flex
                  h-full
                  w-9
                  items-center
                  justify-center
                  text-neutral-600
                  transition
                  hover:bg-[#F5F1ED]
                "
                aria-label="Decrease quantity"
              >
                <Minus size={13} />
              </button>


              {/* QUANTITY */}

              <span className="w-7 text-center text-xs text-[#171717]">
                {item.quantity}
              </span>


              {/* INCREASE */}

              <button
                onClick={() =>
                  onUpdateQuantity(
                    item._id,
                    item.quantity + 1
                  )
                }
                className="
                  flex
                  h-full
                  w-9
                  items-center
                  justify-center
                  text-neutral-600
                  transition
                  hover:bg-[#F5F1ED]
                "
                aria-label="Increase quantity"
              >
                <Plus size={13} />
              </button>

            </div>


            {/* =================================
                PRICE
            ================================= */}

            <p className="font-serif text-xl text-[#171717]">
              ₹
              {(item.price * item.quantity).toLocaleString("en-IN")}
            </p>

          </div>

        </div>

      </div>

    </article>
  );
}