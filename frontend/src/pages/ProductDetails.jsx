import { useState } from "react";

import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";

import heels from "@/data/products";
import { useParams } from "react-router-dom";
import SecondaryNavbar from "@/components/layout/SecondaryNavbar";

export default function ProductDetails() {
  const { id } = useParams();

  const product = heels.find(
    (item) => item.id === Number(id)
  );

  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0]?.name || ""
  );

  return (
    <main className="bg-[#F9F6F3]">
<SecondaryNavbar/>
      <section className="px-6 py-12 md:px-10 md:py-20 lg:px-16">

        <div className="mx-auto mt-5 grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">

          <ProductGallery
            selectedColor={selectedColor}
          />

          <ProductInfo
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />

        </div>

      </section>

      <ProductDescription />

      <ProductReviews />

      <RelatedProducts />

    </main>
  );
}