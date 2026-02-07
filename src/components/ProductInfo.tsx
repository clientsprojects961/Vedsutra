import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Minus, Plus, ShieldCheck, Truck, BadgeCheck } from "lucide-react";
import { sizeOptions, type SizeOption } from "@/lib/productData";

const ProductInfo = () => {
  const navigate = useNavigate();
  const [selectedSize, setSelectedSize] = useState<SizeOption>(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = () => {
    const orderDetails = {
      product: "Vedsutra Detox Foot Patch - 10 Patches",
      size: selectedSize.label,
      quantity,
      price: selectedSize.price * quantity,
      originalPrice: selectedSize.originalPrice * quantity,
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    navigate("/checkout");
  };

  const decreaseQty = () => setQuantity((q) => Math.max(1, q - 1));
  const increaseQty = () => setQuantity((q) => q + 1);

  const discount = Math.round(
    ((selectedSize.originalPrice - selectedSize.price) /
      selectedSize.originalPrice) *
      100
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Brand */}
      <p className="text-sm text-muted-foreground tracking-wide uppercase font-semibold">
        Vedsutra
      </p>

      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold leading-tight">
        Detox Foot Patch - Natural Fat Loss & Body Detoxification
      </h1>
      <p className="text-base text-muted-foreground mt-2">
        10 Premium Patches | Transform Your Health Overnight
      </p>

      {/* Price */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="sale-price text-2xl">
          Rs. {(selectedSize.price * quantity).toLocaleString("en-IN")}.00
        </span>
        <span className="original-price text-lg">
          Rs. {(selectedSize.originalPrice * quantity).toLocaleString("en-IN")}.00
        </span>
        <span className="inline-block bg-sale text-background text-xs font-bold px-2 py-1 rounded">
          {discount}% OFF
        </span>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-0.5 star-rating">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              className="w-4 h-4"
              fill={s <= 4.8 ? "currentColor" : "none"}
            />
          ))}
        </div>
        <span className="text-sm font-medium">4.8</span>
        <span className="text-sm text-muted-foreground">127 reviews</span>
      </div>

      {/* Package Info */}
      <div>
        <p className="text-sm font-medium mb-2">
          Package: <span className="font-normal">{selectedSize.label}</span>
        </p>
        <div className="bg-secondary/50 rounded-lg p-3 text-sm text-muted-foreground">
          <p>✓ 10 Premium Detox Foot Patches</p>
          <p>✓ Easy-to-follow instructions</p>
          <p>✓ 100% Natural Ingredients</p>
        </div>
      </div>

      {/* Stock */}
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-success inline-block" />
        <span className="text-sm stock-badge font-medium">
          In stock, ready to ship
        </span>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium">Quantity</span>
        <div className="flex items-center border rounded-md">
          <button
            onClick={decreaseQty}
            className="px-3 py-2 hover:bg-secondary transition-colors"
            aria-label="Decrease quantity"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="px-4 py-2 text-sm font-medium min-w-[40px] text-center">
            {quantity}
          </span>
          <button
            onClick={increaseQty}
            className="px-3 py-2 hover:bg-secondary transition-colors"
            aria-label="Increase quantity"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3">
        <button onClick={handleBuyNow} className="buy-now-btn">
          Buy it now
        </button>
        <button onClick={handleBuyNow} className="buy-outline-btn">
          Add to cart
        </button>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center justify-between gap-4 pt-2 border-t">
        <div className="trust-badge">
          <Truck className="w-5 h-5" />
          <span>Fast Shipping</span>
        </div>
        <div className="trust-badge">
          <ShieldCheck className="w-5 h-5" />
          <span>Secure Payment</span>
        </div>
        <div className="trust-badge">
          <BadgeCheck className="w-5 h-5" />
          <span>100% Authenticity</span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
