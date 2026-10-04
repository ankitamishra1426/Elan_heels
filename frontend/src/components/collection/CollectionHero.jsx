import { motion } from "framer-motion";

export default function CollectionHero() {
  return (
    <section className="bg-[#F9F6F3] px-6 pb-20 pt-36 md:px-10 md:pb-24 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-xs
            uppercase
            tracking-[0.35em]
            text-[#A88952]
          "
        >
          ÉLAN Footwear
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-6
            font-serif
            text-5xl
            leading-tight
            text-[#171717]
            md:text-6xl
            lg:text-7xl
          "
        >
          The Collection
        </motion.h1>

        {/* Decorative Line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 64, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.5,
          }}
          className="mx-auto mt-8 h-px bg-[#A88952]"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="
            mx-auto
            mt-8
            max-w-xl
            text-sm
            leading-8
            text-neutral-500
            md:text-base
          "
        >
          Explore our collection of refined silhouettes, sculptural heels,
          and timeless designs created to elevate every occasion.
        </motion.p>

      </div>
    </section>
  );
}