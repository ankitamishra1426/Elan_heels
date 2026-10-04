import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

// Hero Images
import hero1 from "@/assets/images/hero/hero.png";
import hero2 from "@/assets/images/hero/hero2.png";
import hero3 from "@/assets/images/hero/hero3.png";
import hero4 from "@/assets/images/hero/hero4.png";

const heroImages = [
  hero1,
  hero2,
  hero3,
  hero4,
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically change background image
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <AnimatePresence mode="sync">
        <motion.img
          key={currentImage}
          src={heroImages[currentImage]}
          alt="Luxury ÉLAN heels"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              ease: "easeInOut",
            },
            scale: {
              duration: 5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
          "
        />
      </AnimatePresence>

      {/* Dark Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: 0.2,
        }}
        className="absolute inset-0 bg-black/35"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="max-w-xl"
        >

          {/* Limited Edition */}
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.6,
            }}
            className="
              inline-block
              rounded-full
              border
              border-[#C7A45A]
              px-6
              py-2
              text-xs
              uppercase
              tracking-[0.25em]
              text-[#D4AF37]
            "
          >
            Limited Edition
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-8
              font-serif
              text-5xl
              leading-tight
              text-white
              md:text-6xl
            "
          >
            The Autumn /
            <br />
            Winter Collection
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
            className="
              mt-6
              max-w-lg
              text-base
              leading-8
              text-neutral-200
              md:text-lg
            "
          >
            Sculptural silhouettes crafted for the modern woman.
            Discover timeless elegance and luxurious comfort.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.4,
            }}
            className="mt-10 flex gap-5"
          >

            {/* Shop Collection */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Button
                className="
                  rounded-full
                  bg-[#C7A45A]
                  px-8
                  py-7
                  text-black
                  transition-colors
                  hover:bg-[#D4AF37]
                "
              >
                Shop Collection
              </Button>
            </motion.div>

            {/* Explore */}
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Button
                variant="outline"
                className="
                  rounded-full
                  border-white
                  bg-transparent
                  px-8
                  py-7
                  text-white
                  hover:bg-white
                  hover:text-black
                "
              >
                Explore
              </Button>
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

      {/* Slide Indicators */}
      <div
        className="
          absolute
          bottom-8
          right-8
          z-20
          flex
          items-center
          gap-2
        "
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              h-[2px]
              transition-all
              duration-500
              ${
                currentImage === index
                  ? "w-10 bg-white"
                  : "w-5 bg-white/40 hover:bg-white/70"
              }
            `}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          z-10
          -translate-x-1/2
        "
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center gap-3"
        >
          <span
            className="
              text-[9px]
              uppercase
              tracking-[0.3em]
              text-white/70
            "
          >
            Scroll
          </span>

          <div className="h-10 w-px bg-white/40" />
        </motion.div>
      </motion.div>

    </section>
  );
}