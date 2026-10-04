import {
  Grid2X2,
  List,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductToolbar({
  totalProducts,
  sortBy,
  onSortChange,
}) {
  return (
    <section className="bg-[#F9F6F3] px-6 pb-10 md:px-10 lg:px-16">

      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-6
          rounded-2xl
          border
          border-[#E8E2DB]
          bg-white
          p-6
          md:flex-row
        "
      >

        {/* Left */}

        <div>

          <p className="text-sm uppercase tracking-[0.2em] text-[#A88952]">
            Collection
          </p>

          <h3 className="mt-2 font-serif text-3xl text-[#171717]">
            {totalProducts} Products
          </h3>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Sort */}

          <Select
            value={sortBy}
            onValueChange={onSortChange}
          >

            <SelectTrigger className="w-52 rounded-full border-[#D8D3CC]">

              <SelectValue />

            </SelectTrigger>

            <SelectContent>

              <SelectItem value="featured">
                Featured
              </SelectItem>

              <SelectItem value="newest">
                Newest
              </SelectItem>

              <SelectItem value="price-low">
                Price : Low → High
              </SelectItem>

              <SelectItem value="price-high">
                Price : High → Low
              </SelectItem>

            </SelectContent>

          </Select>

          {/* View Buttons */}

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#D8D3CC]
              transition
              hover:bg-[#171717]
              hover:text-white
            "
          >
            <Grid2X2 size={18} />
          </button>

          <button
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              border-[#D8D3CC]
              transition
              hover:bg-[#171717]
              hover:text-white
            "
          >
            <List size={18} />
          </button>

        </div>

      </div>

    </section>
  );
}