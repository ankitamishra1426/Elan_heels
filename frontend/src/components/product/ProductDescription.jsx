import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams } from "react-router-dom";

import products from "@/data/products";

const details = [
  {
    title: "Description",
    content:
      "A refined expression of modern elegance, designed with sculptural proportions and sophisticated detailing. Every element is thoughtfully crafted to bring together timeless style, comfort, and effortless femininity.",
  },
  {
    title: "Materials",
    content:
      "Premium synthetic leather upper with a smooth luxury finish, cushioned interior lining, and a durable outsole designed for everyday elegance.",
  },
  {
    title: "Heel Height",
    content:
      "Designed with a carefully balanced heel profile that provides an elegant silhouette while maintaining comfortable wear throughout the day.",
  },
  {
    title: "Care Guide",
    content:
      "Store your heels in a cool, dry place away from direct sunlight. Keep them inside their dust bag when not in use. Clean gently with a soft, dry cloth and avoid prolonged exposure to moisture.",
  },
  {
    title: "Shipping & Returns",
    content:
      "Complimentary shipping is available on eligible orders. If your purchase is not quite right, you can request a return within 7 days, subject to the return policy.",
  },
];

export default function ProductDescription() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [openIndex, setOpenIndex] = useState(0);

  if (!product) {
    return null;
  }

  const toggleItem = (index) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="border-t border-[#E5DED5] bg-white px-6 py-20 md:px-10 lg:px-16">

      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">

        {/* Left Side */}

        <div className="lg:sticky lg:top-32 lg:h-fit">

          <p className="text-xs uppercase tracking-[0.3em] text-[#A88952]">
            Discover
          </p>

          <h2 className="mt-4 max-w-md font-serif text-4xl leading-tight text-[#171717] md:text-5xl">
            Designed for
            <br />
            unforgettable moments.
          </h2>

          <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
            Every ÉLAN piece is created with attention to
            silhouette, craftsmanship, and the details that
            make a beautiful pair feel truly special.
          </p>

        </div>

        {/* Right Side */}

        <div className="border-t border-[#E5DED5]">

          {details.map((item, index) => {

            const isOpen = openIndex === index;

            return (
              <div
                key={item.title}
                className="border-b border-[#E5DED5]"
              >

                {/* Header */}

                <button
                  onClick={() => toggleItem(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    py-6
                    text-left
                  "
                >

                  <div className="flex items-center gap-5">

                    <span className="text-xs tracking-[0.2em] text-[#A88952]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="font-serif text-xl text-[#171717]">
                      {item.title}
                    </h3>

                  </div>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown
                      size={20}
                      strokeWidth={1.5}
                      className="text-neutral-500"
                    />
                  </motion.div>

                </button>

                {/* Content */}

                <AnimatePresence initial={false}>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                      }}
                      className="overflow-hidden"
                    >

                      <p className="max-w-2xl pb-7 pl-10 text-sm leading-7 text-neutral-500 md:pl-12">
                        {item.content}
                      </p>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}