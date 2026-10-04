import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import Footer from "@/components/layout/Footer";

import CartItem from "@/components/cart/CartItem";
import OrderSummary from "@/components/cart/OrderSummary";
import ConciergeCard from "@/components/cart/ConciergeCard";
import EmptyCart from "@/components/cart/EmptyCart";

import { useCart } from "@/context/CartContext";

export default function Cart() {
  const {
    items: cartItems,
    subtotal,
    loading,
    updateItem,
    removeItem,
  } = useCart();
console.log("cart item:", cartItems);
  /*
    -----------------------------------------
    SHIPPING
    -----------------------------------------
  */

  const shipping = 0;

  /*
    -----------------------------------------
    TAX
    -----------------------------------------
  */

  const tax = Math.round(subtotal * 0.08);

  /*
    -----------------------------------------
    TOTAL
    -----------------------------------------
  */

  const total = subtotal + shipping + tax;

  /*
    -----------------------------------------
    UPDATE QUANTITY
    -----------------------------------------
  */

  const updateQuantity = async (id, newQuantity) => {
    if (newQuantity < 1) {
      await removeItem(id);
      return;
    }

    await updateItem(id, newQuantity);
  };

  /*
    -----------------------------------------
    REMOVE ITEM
    -----------------------------------------
  */

  const handleRemoveItem = async (id) => {
    await removeItem(id);
  };

  return (
    <>
      <SecondaryNavbar />

      <main className="min-h-screen bg-[#F9F6F3] pt-[72px]">

        {/* =====================================
            PAGE HEADER
        ===================================== */}

        <section className="px-2 pb-12 md:px-10 lg:px-16">

          <div className="mx-auto max-w-7xl">

            <p className="mb-3 text-xs uppercase tracking-[0.25em] text-[#A88952]">
              Your Selection
            </p>

            <h1 className="font-serif text-5xl leading-none text-[#171717] md:text-6xl lg:text-7xl">
              Your Shopping Bag
            </h1>

            <p className="mt-4 text-sm text-neutral-500">
              Review your curated selection for the upcoming season.
            </p>

          </div>

        </section>

        {/* =====================================
            CART CONTENT
        ===================================== */}

        <section className="px-6 pb-24 md:px-10 lg:px-16">

          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1fr_264px]">

            {/* =================================
                LEFT SIDE
            ================================= */}

            <div>

              {loading && cartItems.length === 0 ? (

                <div className="flex min-h-[300px] items-center justify-center">
                  <p className="text-sm uppercase tracking-[0.15em] text-neutral-400">
                    Loading your bag...
                  </p>
                </div>

              ) : cartItems.length > 0 ? (

                <div className="space-y-5">

                  {cartItems.map((item) => (

                    <CartItem
                      key={item._id}
                      item={item}
                      onUpdateQuantity={updateQuantity}
                      onRemove={handleRemoveItem}
                    />

                  ))}

                </div>

              ) : (

                <EmptyCart />

              )}

              {/* Continue Shopping */}

              {cartItems.length > 0 && (
                <Link
                  to="/collections"
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    text-xs
                    uppercase
                    tracking-[0.15em]
                    text-[#383838]
                    transition-opacity
                    hover:opacity-50
                  "
                >
                  <ArrowLeft size={14} />
                  Continue Shopping
                </Link>
              )}

            </div>

            {/* =================================
                RIGHT SIDE
            ================================= */}

            <div className="space-y-6">

              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                tax={tax}
                total={total}
                itemCount={cartItems.length}
              />

              <ConciergeCard />

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}