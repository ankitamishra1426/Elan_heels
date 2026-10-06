import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Lock } from "lucide-react";
import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import Footer from "@/components/layout/Footer";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    items,
    subtotal,
  } = useCart();

  const shipping = 0;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  // Prevent checkout with empty cart
  if (!items || items.length === 0) {
    return (
      <>
        <SecondaryNavbar />

        <main className="min-h-screen bg-[#F9F6F3] px-6 pt-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl text-neutral-900">
              Your cart is empty
            </h1>

            <p className="mt-4 text-sm text-neutral-500">
              Add something beautiful before proceeding to checkout.
            </p>

            <Link
              to="/collections"
              className="mt-8 inline-block bg-neutral-900 px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-neutral-700"
            >
              Continue Shopping
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  const handlePlaceOrder = () => {
    // Temporary navigation
    // Backend order functionality will be added next
    navigate("/order-success");
  };

  return (
    <>
      <SecondaryNavbar />

      <main className="min-h-screen bg-[#F9F6F3] px-6 pb-20 pt-32 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          {/* Back */}
          <Link
            to="/cart"
            className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-neutral-500 transition hover:text-neutral-900"
          >
            <ArrowLeft size={15} />
            Back to Cart
          </Link>

          {/* Heading */}
          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">
              Élan Heels
            </p>

            <h1 className="mt-3 font-serif text-4xl text-neutral-900 md:text-5xl">
              Checkout
            </h1>
          </div>

          <div className="grid gap-12 lg:grid-cols-[1fr_420px]">

            {/* LEFT SIDE */}
            <div className="space-y-8">

              {/* Contact */}
              <section className="rounded-2xl bg-white p-6 md:p-8">
                <h2 className="font-serif text-2xl text-neutral-900">
                  Contact Information
                </h2>

                <div className="mt-6 grid gap-5 md:grid-cols-2">

                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="First name"
                      className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Last name"
                      className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                    />
                  </div>

                </div>
              </section>

              {/* Shipping */}
              <section className="rounded-2xl bg-white p-6 md:p-8">
                <h2 className="font-serif text-2xl text-neutral-900">
                  Shipping Address
                </h2>

                <div className="mt-6 space-y-5">

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                      Address
                    </label>

                    <input
                      type="text"
                      placeholder="Street address"
                      className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                    />
                  </div>

                  <div className="grid gap-5 md:grid-cols-3">

                    <div>
                      <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                        City
                      </label>

                      <input
                        type="text"
                        placeholder="City"
                        className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                        State
                      </label>

                      <input
                        type="text"
                        placeholder="State"
                        className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                        PIN Code
                      </label>

                      <input
                        type="text"
                        placeholder="PIN code"
                        className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                      />
                    </div>

                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-[0.12em] text-neutral-500">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className="mt-2 w-full border border-neutral-200 bg-[#FAF9F7] px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
                    />
                  </div>

                </div>
              </section>

              {/* Payment */}
              <section className="rounded-2xl bg-white p-6 md:p-8">
                <h2 className="font-serif text-2xl text-neutral-900">
                  Payment
                </h2>

                <div className="mt-6 space-y-3">

                  <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-4">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                    />

                    <span className="text-sm text-neutral-700">
                      Cash on Delivery
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-center gap-3 border border-neutral-200 p-4">
                    <input
                      type="radio"
                      name="payment"
                    />

                    <span className="text-sm text-neutral-700">
                      Online Payment
                    </span>
                  </label>

                </div>
              </section>

            </div>

            {/* RIGHT SIDE */}
            <aside className="h-fit rounded-2xl bg-white p-6 md:p-8 lg:sticky lg:top-28">

              <h2 className="font-serif text-2xl text-neutral-900">
                Order Summary
              </h2>

              {/* Products */}
              <div className="mt-6 space-y-5">

                {items.map((item) => (
                  <div
                    key={item._id}
                    className="flex gap-4"
                  >
                    <div className="h-20 w-16 shrink-0 overflow-hidden bg-[#F5F2EF]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-neutral-900">
                        {item.name}
                      </p>

                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-neutral-500">
                        {item.color} / {item.size} EU
                      </p>

                      <p className="mt-1 text-xs text-neutral-400">
                        Qty: {item.quantity}
                      </p>
                    </div>

                    <p className="text-sm text-neutral-900">
                      ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}

              </div>

              <div className="my-6 border-t border-neutral-200" />

              {/* Totals */}
              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-neutral-500">
                    Subtotal
                  </span>

                  <span>
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">
                    Shipping
                  </span>

                  <span>
                    Free
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-500">
                    Tax
                  </span>

                  <span>
                    ₹{tax.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="my-4 border-t border-neutral-200" />

                <div className="flex justify-between text-base font-medium">
                  <span>
                    Total
                  </span>

                  <span>
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>

              </div>

              {/* Place Order */}
              <button
                type="button"
                onClick={handlePlaceOrder}
                className="mt-7 flex w-full items-center justify-center gap-2 bg-neutral-900 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-neutral-700"
              >
                <Lock size={14} />
                Place Order
              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-neutral-400">
                Your information is securely processed.
              </p>

            </aside>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}