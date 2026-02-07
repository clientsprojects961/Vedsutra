import { Star } from "lucide-react";
import { reviews, reviewImages } from "@/lib/productData";

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 star-rating">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star
        key={s}
        className="w-3.5 h-3.5"
        fill={s <= rating ? "currentColor" : "none"}
      />
    ))}
  </div>
);

const RatingBar = ({ stars, count, total }: { stars: number; count: number; total: number }) => (
  <div className="flex items-center gap-2 text-sm">
    <span className="w-3 text-right">{stars}</span>
    <Star className="w-3 h-3 star-rating" fill="currentColor" />
    <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
      <div
        className="h-full bg-star rounded-full transition-all"
        style={{ width: `${total > 0 ? (count / total) * 100 : 0}%` }}
      />
    </div>
    <span className="w-6 text-right text-muted-foreground">{count}</span>
  </div>
);

const CustomerReviews = () => {
  const totalReviews = 127;
  const avgRating = 4.8;
  const ratingCounts = [0, 2, 5, 20, 100];

  return (
    <div className="mt-12 border-t pt-10">
      <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>

      {/* Summary */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-4xl font-bold">{avgRating}</div>
          <div className="text-sm text-muted-foreground">out of 5</div>
          <div className="flex gap-0.5 star-rating">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className="w-5 h-5"
                fill={s <= Math.round(avgRating) ? "currentColor" : "none"}
              />
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Based on {totalReviews} reviews
          </p>
        </div>

        <div className="flex-1 space-y-1.5 max-w-sm">
          {[5, 4, 3, 2, 1].map((stars) => (
            <RatingBar
              key={stars}
              stars={stars}
              count={ratingCounts[stars - 1]}
              total={totalReviews}
            />
          ))}
        </div>
      </div>

      {/* Customer Photos */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold mb-3">Customer photos & videos</h3>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {reviewImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Customer review photo ${i + 1}`}
              className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review, i) => (
          <div key={i} className="border-b pb-5 last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="font-medium text-sm">{review.name}</p>
                {review.verified && (
                  <p className="text-xs text-success">✓ Verified Purchase</p>
                )}
              </div>
              <span className="text-xs text-muted-foreground">
                {review.date}
              </span>
            </div>
            <StarRating rating={review.rating} />
            <p className="text-sm text-muted-foreground mt-2">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
