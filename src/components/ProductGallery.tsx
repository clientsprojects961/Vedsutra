import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { productImages } from "@/lib/productData";

const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToPrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setSelectedIndex((prev) =>
      prev === productImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square overflow-hidden rounded-lg bg-secondary">
        <img
          src={productImages[selectedIndex]}
          alt="Vedsutra Detox Foot Patch"
          className="w-full h-full object-cover"
        />
        <button
          onClick={goToPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center shadow-md hover:bg-background transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/80 flex items-center justify-center shadow-md hover:bg-background transition-colors"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {productImages.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`product-thumbnail flex-shrink-0 ${
              index === selectedIndex ? "active" : ""
            }`}
          >
            <img
              src={img}
              alt={`Vedsutra Foot Patch view ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
