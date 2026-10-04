import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Heart, Star, ThumbsUp } from "lucide-react";
import { useParams } from "react-router-dom";

import products from "@/data/products";

const reviews = [
  {
    id: 1,
    name: "Sophia Williams",
    rating: 5,
    date: "12 June 2026",
    title: "Absolutely beautiful",
    comment:
      "The silhouette is stunning and the finish looks even better in person. They feel elegant without being uncomfortable.",
    verified: true,
    helpful: 12,
  },
  {
    id: 2,
    name: "Aarohi Mehta",
    rating: 5,
    date: "28 May 2026",
    title: "Perfect for special occasions",
    comment:
      "I wore these to an evening event and received so many compliments. The craftsmanship and detailing are beautiful.",
    verified: true,
    helpful: 9,
  },
  {
    id: 3,
    name: "Emma Carter",
    rating: 4,
    date: "16 May 2026",
    title: "Elegant and stylish",
    comment:
      "The design is gorgeous and the quality feels premium. I would definitely consider buying another pair from ÉLAN.",
    verified: true,
    helpful: 7,
  },
];

const ratingBreakdown = [
  {
    stars: 5,
    percentage: 82,
    count: 24,
  },
  {
    stars: 4,
    percentage: 12,
    count: 4,
  },
  {
    stars: 3,
    percentage: 3,
    count: 1,
  },
  {
    stars: 2,
    percentage: 0,
    count: 0,
  },
  {
    stars: 1,
    percentage: 3,
    count: 1,
  },
];

function Stars({ rating = 5, size = 15 }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          size={size}
          strokeWidth={1.5}
          className={
            star <= rating
              ? "fill-[#C7A45A] text-[#C7A45A]"
              : "text-[#D8D0C6]"
          }
        />
      ))}
    </div>
  );
}

export default function ProductReviews() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [helpfulReviews, setHelpfulReviews] = useState([]);

  if (!product) {
    return null;
  }

  const rating = product.rating || 4.9;
  const totalReviews = 30;

  const toggleHelpful = (reviewId) => {
    setHelpfulReviews((current) =>
      current.includes(reviewId)
        ? current.filter((id) => id !== reviewId)
        : [...current, reviewId]
    );
  };

  return (
    <section className="border-t border-[#E5DED5] bg-[#F9F6F3] px-6 py-20 md:px-10 lg:px-16">

      <div className="mx-auto max-w-7xl">

        {/* Header */}

        <div className="mb-14 text-center">

          <p className="text-xs uppercase tracking-[0.3em] text-[#A88952]">
            Customer Love
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[#171717] md:text-5xl">
            Reviews
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-neutral-500">
            Discover what our customers have to say about
            their ÉLAN experience.
          </p>

        </div>

        {/* Rating Summary */}

        <div className="grid gap-10 rounded-3xl bg-white p-8 md:p-10 lg:grid-cols-[280px_1fr]">

          {/* Overall Rating */}

          <div className="flex flex-col items-center justify-center border-b border-[#E5DED5] pb-8 text-center lg:border-b-0 lg:border-r lg:pb-0 lg:pr-10">

            <p className="font-serif text-6xl text-[#171717]">
              {rating}
            </p>

            <div className="mt-4">
              <Stars rating={5} size={18} />
            </div>

            <p className="mt-4 text-sm text-neutral-500">
              Based on {totalReviews} reviews
            </p>

          </div>

          {/* Rating Breakdown */}

          <div className="flex flex-col justify-center gap-4">

            {ratingBreakdown.map((item) => (

              <div
                key={item.stars}
                className="flex items-center gap-4"
              >

                <div className="flex w-14 items-center gap-1">

                  <span className="text-sm text-[#171717]">
                    {item.stars}
                  </span>

                  <Star
                    size={13}
                    className="fill-[#C7A45A] text-[#C7A45A]"
                  />

                </div>

                {/* Progress */}

                <div className="h-2 flex-1 overflow-hidden rounded-full bg-[#EEE9E3]">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${item.percentage}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-[#C7A45A]"
                  />

                </div>

                <span className="w-8 text-right text-xs text-neutral-400">
                  {item.count}
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Review Header */}

        <div className="mt-16 flex flex-col justify-between gap-5 border-b border-[#E5DED5] pb-6 sm:flex-row sm:items-center">

          <div>

            <h3 className="font-serif text-2xl text-[#171717]">
              Customer Reviews
            </h3>

            <p className="mt-1 text-sm text-neutral-500">
              {totalReviews} verified reviews
            </p>

          </div>

          <button
            className="
              rounded-full
              border
              border-[#171717]
              px-6
              py-3
              text-xs
              uppercase
              tracking-[0.15em]
              text-[#171717]
              transition
              hover:bg-[#171717]
              hover:text-white
            "
          >
            Write a Review
          </button>

        </div>

        {/* Reviews */}

        <div className="divide-y divide-[#E5DED5]">

          {reviews.map((review, index) => {

            const isHelpful = helpfulReviews.includes(
              review.id
            );

            return (
              <motion.article
                key={review.id}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="grid gap-6 py-10 md:grid-cols-[200px_1fr]"
              >

                {/* Customer */}

                <div>

                  <div className="flex items-center gap-3">

                    <div className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#E8DED2]
                      font-serif
                      text-lg
                      text-[#171717]
                    ">
                      {review.name.charAt(0)}
                    </div>

                    <div>

                      <p className="text-sm font-medium text-[#171717]">
                        {review.name}
                      </p>

                      {review.verified && (
                        <div className="mt-1 flex items-center gap-1">

                          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#A88952]">
                            <Check
                              size={10}
                              className="text-white"
                            />
                          </span>

                          <span className="text-[10px] uppercase tracking-wider text-neutral-400">
                            Verified
                          </span>

                        </div>
                      )}

                    </div>

                  </div>

                  <p className="mt-4 text-xs text-neutral-400">
                    {review.date}
                  </p>

                </div>

                {/* Review Content */}

                <div>

                  <Stars rating={review.rating} />

                  <h4 className="mt-4 font-serif text-xl text-[#171717]">
                    {review.title}
                  </h4>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-neutral-500">
                    {review.comment}
                  </p>

                  {/* Helpful */}

                  <button
                    onClick={() => toggleHelpful(review.id)}
                    className={`
                      mt-6
                      flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      px-4
                      py-2
                      text-xs
                      transition

                      ${
                        isHelpful
                          ? "border-[#C7A45A] bg-[#C7A45A] text-white"
                          : "border-[#D8D0C6] text-neutral-500 hover:border-[#171717] hover:text-[#171717]"
                      }
                    `}
                  >

                    {isHelpful ? (
                      <Heart
                        size={14}
                        className="fill-white"
                      />
                    ) : (
                      <ThumbsUp size={14} />
                    )}

                    Helpful

                    <span>
                      {review.helpful +
                        (isHelpful ? 1 : 0)}
                    </span>

                  </button>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* Load More */}

        <div className="mt-8 flex justify-center">

          <button
            className="
              rounded-full
              border
              border-[#171717]
              px-8
              py-3
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#171717]
              transition
              hover:bg-[#171717]
              hover:text-white
            "
          >
            Load More Reviews
          </button>

        </div>

      </div>

    </section>
  );
}