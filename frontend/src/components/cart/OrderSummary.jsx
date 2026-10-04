import { useState } from "react";
import {
  ArrowRight,
  Building2,
  CreditCard,
  WalletCards,
} from "lucide-react";

export default function OrderSummary({
  subtotal,
  shipping,
  tax,
  total,
  itemCount,
}) {
  const [promoCode, setPromoCode] = useState("");
  const [appliedCode, setAppliedCode] = useState("");

  const applyPromo = () => {
    if (!promoCode.trim()) {
      return;
    }

    setAppliedCode(promoCode.trim().toUpperCase());
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN")}`;
  };

  return (
    <aside className="rounded-2xl bg-white p-7 md:p-8">

      {/* =====================================
          TITLE
      ===================================== */}

      <h2 className="font-serif text-2xl text-[#171717]">
        Order Summary
      </h2>


      {/* =====================================
          SUMMARY
      ===================================== */}

      <div className="mt-10 space-y-5">

        <div className="flex items-center justify-between text-sm">

          <span className="text-neutral-500">
            Subtotal
          </span>

          <span className="text-[#171717]">
            {formatPrice(subtotal)}
          </span>

        </div>


        <div className="flex items-center justify-between text-sm">

          <span className="text-neutral-500">
            Estimated Shipping
          </span>

          <span className="text-[#171717]">
            {shipping === 0
              ? "Complimentary"
              : formatPrice(shipping)}
          </span>

        </div>


        <div className="flex items-center justify-between text-sm">

          <span className="text-neutral-500">
            VAT / Taxes
          </span>

          <span className="text-[#171717]">
            {formatPrice(tax)}
          </span>

        </div>

      </div>


      {/* Divider */}

      <div className="my-6 border-t border-[#E5DED5]" />


      {/* Total */}

      <div className="flex items-center justify-between">

        <span className="font-serif text-lg text-[#171717]">
          Total
        </span>

        <span className="font-serif text-lg text-[#171717]">
          {formatPrice(total)}
        </span>

      </div>


      {/* =====================================
          PROMO CODE
      ===================================== */}

      <div className="mt-10">

        <label className="text-[10px] uppercase tracking-[0.18em] text-[#171717]">
          Promo Code
        </label>

        <div className="mt-2 flex items-center">

          <input
            type="text"
            value={promoCode}
            onChange={(event) =>
              setPromoCode(event.target.value)
            }
            placeholder="ENTER CODE"
            className="
              min-w-0
              flex-1
              rounded-full
              bg-[#F5F1ED]
              px-4
              py-3
              text-[10px]
              uppercase
              tracking-[0.12em]
              outline-none
              placeholder:text-neutral-400
              focus:ring-1
              focus:ring-[#C7A45A]
            "
          />

          <button
            onClick={applyPromo}
            className="
              ml-3
              shrink-0
              text-xs
              text-[#171717]
              transition-opacity
              hover:opacity-50
            "
          >
            Apply
          </button>

        </div>

        {appliedCode && (
          <p className="mt-2 text-[10px] text-[#A88952]">
            {appliedCode} applied
          </p>
        )}

      </div>


      {/* =====================================
          CHECKOUT
      ===================================== */}

      <button
        disabled={itemCount === 0}
        className="
          mt-9
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-full
          bg-[#C9A760]
          px-5
          py-5
          text-xs
          font-medium
          uppercase
          tracking-[0.15em]
          text-white
          transition
          hover:bg-[#B8934D]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        Proceed to Checkout
        <ArrowRight size={15} />
      </button>


      {/* =====================================
          PAYMENT METHODS
      ===================================== */}

      <div className="mt-12 border-t border-[#E5DED5] pt-6">

        <p className="text-center text-[9px] uppercase tracking-[0.18em] text-neutral-400">
          Secure Payments Via
        </p>

        <div className="mt-5 flex items-center justify-center gap-7 text-neutral-500">

          <CreditCard
            size={22}
            strokeWidth={1.5}
          />

          <Building2
            size={22}
            strokeWidth={1.5}
          />

          <WalletCards
            size={22}
            strokeWidth={1.5}
          />

        </div>

      </div>

    </aside>
  );
}