import { useState } from "react";
import ProductCard from "@/components/common/ProductCard";
import { Button } from "@/components/ui/button";
import { newArrivals } from "@/data/newArrivals";

const filters = [
  "All",
  "Luxury Heel",
  "Party Heel",
  "Bridal Heel",
  "Classic Heel",
];

export default function NewArrivals() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProducts =
    activeFilter === "All"
      ? newArrivals
      : newArrivals.filter(
          (product) => product.category === activeFilter
        );

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center">

          <span className="text-sm uppercase tracking-[0.3em] text-[#C7A45A]">
            New Arrivals
          </span>

          <h2 className="mt-4 font-serif text-5xl">
            Fresh Luxury Drops
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-500">
            Discover the newest additions to the ÉLAN collection,
            designed for elegance and confidence.
          </p>

        </div>

        {/* Filter Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">

          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className="rounded-full"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}

        </div>

        {/* Products */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              category={product.category}
              price={product.price}
            />
          ))}

        </div>

        {/* View More */}
        <div className="mt-16 flex justify-center">

          <Button
            size="lg"
            className="rounded-full bg-black px-10 hover:bg-neutral-800"
          >
            View More
          </Button>

        </div>

      </div>

    </section>
  );
}