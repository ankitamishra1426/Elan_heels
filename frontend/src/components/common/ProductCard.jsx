import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductCard({
  image,
  title,
  category,
  price,
}) {
  return (
    <div className="group overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#F8F8F8]">

        <img
          src={image}
          alt={title}
          className="h-[420px] w-full object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Wishlist */}
        <button className="absolute right-5 top-5 rounded-full bg-white p-2 shadow-md transition hover:bg-black hover:text-white">
          <Heart size={18} />
        </button>

      </div>

      {/* Content */}
      <div className="space-y-3 p-6">

        <p className="text-sm uppercase tracking-[0.2em] text-neutral-400">
          {category}
        </p>

        <h3 className="font-serif text-2xl">
          {title}
        </h3>

        <div className="flex items-center justify-between">

          <span className="text-lg font-semibold">
            ₹ {price}
          </span>

          <Button className="rounded-full">
            Shop Now
          </Button>

        </div>

      </div>

    </div>
  );
}