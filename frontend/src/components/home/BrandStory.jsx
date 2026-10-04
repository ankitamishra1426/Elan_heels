import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import brandImage from "@/assets/images/brand/brand-story.png";

export default function BrandStory() {
  return (
    <section className="bg-white px-6 py-24 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Brand Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl"
        >
          <img
            src={brandImage}
            alt="ÉLAN luxury footwear"
            className="
              h-[520px]
              w-full
              object-cover
              transition-transform
              duration-1000
              hover:scale-105
              md:h-[620px]
            "
          />

          {/* Small label */}
          <div
            className="
              absolute
              bottom-6
              left-6
              rounded-full
              bg-white/90
              px-5
              py-2
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-[#171717]
              backdrop-blur-md
            "
          >
            ÉLAN · Since 2026
          </div>
        </motion.div>

        {/* Brand Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="max-w-xl"
        >
          {/* Eyebrow */}
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#A88952]">
            The ÉLAN Story
          </p>

          {/* Heading */}
          <h2 className="font-serif text-4xl leading-tight text-[#171717] md:text-5xl lg:text-6xl">
            Designed to make
            <br />
            <span className="italic">every step</span> unforgettable.
          </h2>

          {/* Divider */}
          <div className="my-8 h-px w-16 bg-[#A88952]" />

          {/* Description */}
          <div className="space-y-5 text-sm leading-8 text-neutral-500 md:text-base">
            <p>
              ÉLAN was created for women who believe that elegance is not
              something you wear — it is something you carry.
            </p>

            <p>
              Every silhouette is thoughtfully designed to balance
              contemporary style, refined craftsmanship, and effortless
              femininity.
            </p>

            <p>
              From sculptural stilettos to timeless pumps, our collections
              celebrate confidence in every step.
            </p>
          </div>

          {/* CTA */}
          <button
            className="
              mt-10
              flex
              items-center
              gap-3
              border-b
              border-[#171717]
              pb-2
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#171717]
              transition-all
              duration-300
              hover:gap-5
            "
          >
            Discover Our Story
            <ArrowUpRight size={15} strokeWidth={1.5} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}