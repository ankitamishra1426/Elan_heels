import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import { useParams } from "react-router-dom";

import heels from "@/data/products";

export default function ProductGallery({selectedColor,}) {

  const { id } = useParams();

  const product = heels.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    setSelectedImage(0);
  }, [selectedColor]);


  if (!product) {
    return (
      <div className="flex min-h-[500px] items-center justify-center rounded-3xl bg-white">
        <p className="text-neutral-500">
          Product not found
        </p>
      </div>
    );
  }

  /*
    Find the selected color
  */
  const selectedColorData = product.colors?.find(
    (color) => color.name === selectedColor
  );

  /*
    If selected color has images,
    use those images.

    Otherwise use the normal product images.
  */
  const images =
    selectedColorData?.images?.length > 0
      ? selectedColorData.images
      : product.images || [];

 

  return (
    <div className="space-y-6">
      {/* ========================= */}
      {/* IMAGE GALLERY */}
      {/* ========================= */}

      <div className="grid gap-5 md:grid-cols-[90px_1fr]">

        {/* Thumbnails */}

        <div className="order-2 flex gap-3 overflow-x-auto md:order-1 md:flex-col">

          {images.map((image, index) => (
            <button
              key={`${selectedColor}-${index}`}
              type="button"
              onClick={() => setSelectedImage(index)}
              className={`
                relative
                h-20
                min-w-20
                overflow-hidden
                rounded-xl
                border
                bg-white
                transition-all
                duration-300
                md:h-24
                md:min-w-0

                ${
                  selectedImage === index
                    ? "border-[#A88952] ring-1 ring-[#A88952]"
                    : "border-transparent hover:border-[#D8D0C6]"
                }
              `}
            >
              <img
                src={image}
                alt={`${product.name} ${selectedColor} view ${
                  index + 1
                }`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}

        </div>

        {/* Main Image */}

        <div className="order-1 md:order-2">

          <div className="relative overflow-hidden rounded-3xl bg-white">

            {/* Wishlist */}

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                setIsWishlisted(!isWishlisted)
              }
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-white/90
                shadow-lg
                backdrop-blur-sm
              "
              aria-label="Add to wishlist"
            >
              <Heart
                size={20}
                strokeWidth={1.6}
                className={
                  isWishlisted
                    ? "fill-[#C7A45A] text-[#C7A45A]"
                    : "text-[#171717]"
                }
              />
            </motion.button>

            {/* Main Product Image */}

            {images.length > 0 ? (
              <AnimatePresence mode="wait">

                <motion.img
                  key={`${selectedColor}-${selectedImage}`}
                  src={images[selectedImage]}
                  alt={`${product.name} - ${selectedColor}`}
                  initial={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    scale: 1.04,
                  }}
                  className="
                    h-[550px]
                    w-full
                    cursor-zoom-in
                    object-cover
                    md:h-[650px]
                  "
                />

              </AnimatePresence>
            ) : (
              <div className="flex h-[550px] items-center justify-center md:h-[650px]">
                <p className="text-sm text-neutral-400">
                  No images available
                </p>
              </div>
            )}

          </div>

          {/* Image Counter */}

          <div className="mt-4 flex justify-end">

            <p className="text-xs tracking-[0.2em] text-neutral-400">
              {images.length > 0
                ? String(selectedImage + 1).padStart(2, "0")
                : "00"}

              {" / "}

              {String(images.length).padStart(2, "0")}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}