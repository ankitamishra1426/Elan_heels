import { motion } from "framer-motion";

import stilettos from "@/assets/images/categories/stilettos.png";
import pumps from "@/assets/images/categories/pumps.png";
import blockHeels from "@/assets/images/categories/block-heels.png";
import sandals from "@/assets/images/categories/sandals.png";
import boots from "@/assets/images/categories/boots.png";
import mules from "@/assets/images/categories/mules.png";
import kittenHeels from "@/assets/images/categories/kitten-heels.png";

const categories = [
  {
    name: "Boots",
    image: boots,
    className: "md:col-start-1 md:row-start-1 md:row-span-2",
  },
  {
    name: "Pumps",
    image: pumps,
    className: "md:col-start-2 md:row-start-1",
  },
  {
    name: "Sandals",
    image: sandals,
    className: "md:col-start-3 md:row-start-1 md:row-span-2",
  },
  {
    name: "Block Heels",
    image: blockHeels,
    className: "md:col-start-2 md:row-start-2",
  },
  {
    name: "Stilettos",
    image: stilettos,
    className: "md:col-start-1 md:row-start-3",
  },
  {
    name: "Mules",
    image: mules,
    className: "md:col-start-2 md:row-start-3",
  },
  {
    name: "Kitten Heels",
    image: kittenHeels,
    className: "md:col-start-3 md:row-start-3",
  },
];

export default function FeaturedCollection() {
  return (
    <section className="bg-[#F9F6F3] px-6 py-24 md:px-10 lg:px-16">

      {/* Section Header */}
      <div className="mx-auto mb-12 flex max-w-7xl items-end justify-between">

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#A88952]">
            Explore
          </p>

          <h2 className="font-serif text-4xl text-[#171717] md:text-5xl">
            Curated by Style
          </h2>
        </div>

        <button
          className="
            hidden
            border-b
            border-[#171717]
            pb-1
            text-xs
            uppercase
            tracking-[0.2em]
            text-[#171717]
            transition-opacity
            hover:opacity-50
            md:block
          "
        >
          View All
        </button>

      </div>

      {/* Category Grid */}
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-4
          sm:grid-cols-2
          md:grid-cols-3
          md:grid-rows-[220px_220px_180px]
        "
      >

        {categories.map((category, index) => (
          <motion.div
            key={category.name}
            className={`
              group
              relative
              min-h-[220px]
              overflow-hidden
              rounded-2xl
              ${category.className}
            `}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >

            {/* Category Image */}
            <img
              src={category.image}
              alt={`${category.name} heels`}
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-transform
                duration-700
                ease-out
                group-hover:scale-105
              "
            />

            {/* Dark Overlay */}
            <div
              className="
                absolute
                inset-0
                bg-black/10
                transition-all
                duration-500
                group-hover:bg-black/30
              "
            />

            {/* Category Name */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <h3
                className="
                  font-serif
                  text-2xl
                  text-white
                  drop-shadow-lg
                  transition-transform
                  duration-500
                  group-hover:scale-110
                  md:text-3xl
                "
              >
                {category.name}
              </h3>
            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}