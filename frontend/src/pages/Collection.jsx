import { useMemo, useState } from "react";

import SecondaryNavbar from "@/components/layout/SecondaryNavbar";
import Footer from "@/components/layout/Footer";

import CollectionHero from "@/components/collection/CollectionHero";
import CategoryFilter from "@/components/collection/CategoryFilter";
import ProductToolbar from "@/components/collection/ProductToolbar";
import ProductGrid from "@/components/collection/ProductGrid";

import productData from "@/data/collections";



export default function Collection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");

  const  products  = productData;

  const filteredProducts = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? [...products]
        : products.filter(
            (product) => product.category === selectedCategory
          );

    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "newest":
        filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;

      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy]);

  return (
    <>
      <SecondaryNavbar />

      <main>
        <CollectionHero />

        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductToolbar
          totalProducts={filteredProducts.length}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        <ProductGrid products={filteredProducts} />
      </main>

      <Footer />
    </>
  );
}