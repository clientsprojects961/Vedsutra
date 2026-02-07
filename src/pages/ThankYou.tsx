import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Package, ArrowLeft } from "lucide-react";
import type { OrderData } from "@/lib/googleSheets";
import Navbar from "@/components/Navbar";

const ThankYou = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("completedOrder");
    if (stored) {
      setOrder(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-success" />
          </div>
        </div>

        <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
        <p className="text-muted-foreground mb-8">
          Thank you for your order. We'll process it shortly.
        </p>

        {order && (
          <div className="border rounded-xl p-5 text-left mb-8 bg-secondary/30">
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5" />
              <h2 className="font-semibold">Order Details</h2>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Product</span>
                <span className="font-medium">{order.product}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Size</span>
                <span>{order.size}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Quantity</span>
                <span>{order.quantity}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Payment</span>
                <span className="capitalize">
                  {order.paymentMode === "cod"
                    ? "Cash on Delivery"
                    : "Online Payment"}
                </span>
              </div>
              <div className="flex justify-between border-t pt-2 mt-2">
                <span className="font-semibold">Total</span>
                <span className="font-bold sale-price">
                  Rs. {order.price.toLocaleString("en-IN")}.00
                </span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t">
              <p className="text-xs text-muted-foreground">
                Shipping to: {order.name}, {order.address}, {order.city},{" "}
                {order.state} - {order.pincode}
              </p>
              {order.phone && (
                <p className="text-xs text-muted-foreground mt-1">
                  Phone: {order.phone}
                </p>
              )}
            </div>
          </div>
        )}

        {order?.paymentMode === "online" && (
          <div className="border rounded-xl p-4 mb-6 bg-star/5 border-star/20">
            <p className="text-sm font-medium">
              ⏳ Your payment is being verified
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              We'll confirm your order once payment is verified. You'll receive a
              confirmation via SMS.
            </p>
          </div>
        )}

        {order?.paymentMode === "cod" && (
          <div className="border rounded-xl p-4 mb-6 bg-success/5 border-success/20">
            <p className="text-sm font-medium">
              📦 Your order is being prepared
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Pay Rs. {order.price.toLocaleString("en-IN")}.00 at the time of delivery.
              Track your order via SMS.
            </p>
          </div>
        )}

        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Continue Shopping
        </button>
      </div>
      </div>
    </div>
  );
};

export default ThankYou;
