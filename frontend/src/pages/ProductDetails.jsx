
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductDescription from "@/components/product/ProductDescription";
import ProductReviews from "@/components/product/ProductReviews";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function ProductDetails() {
  return (
    <main className="bg-[#F9F6F3]">

      {/* Product */}

      <section className="px-6 py-12 md:px-10 md:py-20 lg:px-16">

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16 mt-5">

          <ProductGallery />

          <ProductInfo />

        </div>

      </section>

      {/* Description */}

      <ProductDescription />

      {/* Reviews */}

      <ProductReviews />

      {/* Related Products */}

      <RelatedProducts />

    </main>
  );
}