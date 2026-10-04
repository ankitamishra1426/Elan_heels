import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Newsletter() {
  return (
    <section className="bg-[#F9F6F3] px-6 py-24 md:px-10 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          mx-auto
          max-w-5xl
          rounded-3xl
          bg-[#171717]
          px-6
          py-16
          text-center
          md:px-12
          md:py-20
          lg:px-20
        "
      >
        {/* Eyebrow */}
        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#C7A45A]">
          Stay in the ÉLAN
        </p>

        {/* Heading */}
        <h2 className="font-serif text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
          A little luxury,
          <br />
          <span className="italic">in your inbox.</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-400 md:text-base">
          Be the first to discover new collections, exclusive releases,
          styling inspiration, and private offers from ÉLAN.
        </p>

        {/* Newsletter Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="
            mx-auto
            mt-10
            flex
            max-w-xl
            flex-col
            gap-3
            sm:flex-row
          "
        >
          <div className="relative flex-1">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="
                h-14
                w-full
                rounded-full
                border
                border-white/20
                bg-white/10
                px-6
                text-sm
                text-white
                outline-none
                placeholder:text-neutral-500
                transition
                focus:border-[#C7A45A]
                focus:bg-white/15
              "
            />
          </div>

          <button
            type="submit"
            className="
              flex
              h-14
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#C7A45A]
              px-7
              text-xs
              uppercase
              tracking-[0.15em]
              text-[#171717]
              transition-all
              duration-300
              hover:bg-[#D4AF37]
              hover:gap-3
            "
          >
            Subscribe
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </form>

        {/* Privacy Text */}
        <p className="mt-5 text-[10px] tracking-wide text-neutral-500">
          By subscribing, you agree to receive emails from ÉLAN. You can
          unsubscribe at any time.
        </p>
      </motion.div>
    </section>
  );
}