import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Banknote, CreditCard } from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import { submitOrderToSheet, type OrderData } from "@/lib/googleSheets";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { indianStates } from "@/lib/indianStates";

interface OrderDetails {
  product: string;
  size: string;
  quantity: number;
  price: number;
  originalPrice: number;
}

const Checkout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [paymentMode, setPaymentMode] = useState<"online" | "cod">("cod");
  
  // Force COD mode (online payment disabled)
  useEffect(() => {
    if (paymentMode === "online") {
      setPaymentMode("cod");
    }
  }, [paymentMode]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  useEffect(() => {
    const stored = localStorage.getItem("orderDetails");
    if (stored) {
      setOrder(JSON.parse(stored));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.phone.trim() || form.phone.length < 10) return "Please enter a valid phone number";
    if (!form.address.trim()) return "Please enter your address";
    if (!form.city.trim()) return "Please enter your city";
    if (!form.state.trim()) return "Please select your state";
    if (!form.pincode.trim() || form.pincode.length < 6) return "Please enter a valid pincode";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast({ title: "Missing Information", description: error, variant: "destructive" });
      return;
    }

    if (!order) return;

    setIsSubmitting(true);

    const orderData: OrderData = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
      state: form.state.trim(),
      pincode: form.pincode.trim(),
      product: order.product,
      size: order.size,
      quantity: order.quantity,
      price: order.price,
      paymentMode,
      timestamp: new Date().toISOString(),
    };

    try {
      await submitOrderToSheet(orderData);
      localStorage.setItem("completedOrder", JSON.stringify(orderData));
      localStorage.removeItem("orderDetails");
      navigate("/thank-you");
    } catch {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!order) return null;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <AnnouncementBar />

      <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
        {/* Back button */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to product
        </button>

        <h1 className="text-2xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
            <h2 className="text-lg font-semibold mb-2">Shipping Details</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={form.name}
              onChange={handleChange}
              className="checkout-input"
              maxLength={100}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={form.phone}
              onChange={handleChange}
              className="checkout-input"
              maxLength={15}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              value={form.email}
              onChange={handleChange}
              className="checkout-input"
              maxLength={255}
            />

            <textarea
              name="address"
              placeholder="Full Address *"
              value={form.address}
              onChange={handleChange}
              className="checkout-input min-h-[80px] resize-none"
              maxLength={500}
              required
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="city"
                placeholder="City *"
                value={form.city}
                onChange={handleChange}
                className="checkout-input"
                maxLength={100}
                required
              />
              <Select
                value={form.state}
                onValueChange={(value) => setForm((prev) => ({ ...prev, state: value }))}
                required
              >
                <SelectTrigger className="checkout-input h-auto py-3">
                  <SelectValue placeholder="Select State *" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {indianStates.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <input
              type="text"
              name="pincode"
              placeholder="Pincode *"
              value={form.pincode}
              onChange={handleChange}
              className="checkout-input"
              maxLength={10}
              required
            />

            {/* Payment Mode */}
            <div className="pt-4">
              <h2 className="text-lg font-semibold mb-3">Payment Method</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMode("cod")}
                  className={`payment-card ${paymentMode === "cod" ? "active" : ""}`}
                >
                  <div className="flex flex-col items-center gap-2">
                    <Banknote className="w-6 h-6" />
                    <span className="text-sm font-semibold">Cash on Delivery</span>
                    <span className="text-xs text-muted-foreground">
                      Pay when you receive
                    </span>
                  </div>
                </button>

                <div className="payment-card opacity-60 cursor-not-allowed relative">
                  <div className="absolute top-2 right-2 bg-muted text-muted-foreground text-xs px-2 py-1 rounded">
                    Coming Soon
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <CreditCard className="w-6 h-6" />
                    <span className="text-sm font-semibold">Online Payment</span>
                    <span className="text-xs text-muted-foreground text-center">
                      Online payment will be available soon
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-3 text-center">
                Currently, only Cash on Delivery (COD) is available. Online payment options will be available soon.
              </p>
            </div>


            <button
              type="submit"
              disabled={isSubmitting}
              className="buy-now-btn mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Placing Order..." : "Place Order"}
            </button>
          </form>

          {/* Order Summary */}
          <div className="md:col-span-2">
            <div className="border rounded-xl p-5 sticky top-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

              <div className="flex gap-3 mb-4">
                <img
                  src="/images/t1.jpeg"
                  alt="Vedsutra Detox Foot Patch"
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium leading-tight">
                    {order.product}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Size: {order.size}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Qty: {order.quantity}
                  </p>
                </div>
              </div>

              <div className="border-t pt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="original-price">
                    Rs. {order.originalPrice.toLocaleString("en-IN")}.00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Discount</span>
                  <span className="text-success font-medium">
                    - Rs.{" "}
                    {(order.originalPrice - order.price).toLocaleString("en-IN")}
                    .00
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-success font-medium">FREE</span>
                </div>
                <div className="flex justify-between text-base font-bold border-t pt-2 mt-2">
                  <span>Total</span>
                  <span className="sale-price">
                    Rs. {order.price.toLocaleString("en-IN")}.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
