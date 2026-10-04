const categories = [
  "All",
  "Stilettos",
  "Pumps",
  "Block Heels",
  "Sandals",
  "Boots",
  "Mules",
  "Kitten Heels",
];

export default function CategoryFilter({
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <section className="bg-[#F9F6F3] px-6 pb-16">

      <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-4">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`
              rounded-full
              px-7
              py-3
              transition

              ${
                selectedCategory === category
                  ? "bg-[#171717] text-white"
                  : "bg-white hover:bg-[#C7A45A] hover:text-white"
              }
            `}
          >
            {category}
          </button>

        ))}

      </div>

    </section>
  );
}