import { CheckCircle2, Leaf, Zap, Moon, Heart, Shield } from "lucide-react";
import { productDescription } from "@/lib/productData";

const ProductDescription = () => {
  return (
    <div className="mt-16 space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary/50 to-background rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {productDescription.heroSection.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {productDescription.heroSection.subtitle}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
            {productDescription.heroSection.benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-medium">
                <CheckCircle2 className="w-5 h-5 text-success flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Why Choose Vedsutra Detox Foot Patches?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {productDescription.features.map((feature, i) => (
            <div key={i} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-secondary/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          How Vedsutra Foot Patches Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productDescription.howItWorks.map((step) => (
            <div key={step.step} className="bg-background rounded-xl p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.step}
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Transform Your Health & Wellness
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productDescription.benefits.map((benefit, i) => (
            <div key={i} className="border rounded-xl p-6 hover:border-primary transition-colors">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ingredients */}
      <section className="bg-gradient-to-br from-secondary/50 to-background rounded-2xl p-8 md:p-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
            {productDescription.ingredients.title}
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            {productDescription.ingredients.description}
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {productDescription.ingredients.list.map((ingredient, i) => (
              <div key={i} className="bg-background rounded-xl p-6 border">
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-success" />
                  {ingredient.name}
                </h3>
                <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Simple Step-by-Step Instructions
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {productDescription.howToUse.map((step, i) => (
              <div key={i} className="flex gap-4 p-4 border rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="bg-secondary/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          {productDescription.results.title}
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {productDescription.results.timeline.map((result, i) => (
            <div key={i} className="bg-background rounded-xl p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-lg mb-2">{result.period}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{result.results}</p>
            </div>
          ))}
          <div className="bg-background/80 rounded-xl p-4 border border-success/20">
            <p className="text-sm text-muted-foreground italic text-center">
              {productDescription.results.note}
            </p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="border-t pt-12">
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col items-center gap-3">
            <Shield className="w-12 h-12 text-primary" />
            <h3 className="font-semibold">100% Authentic</h3>
            <p className="text-sm text-muted-foreground">Genuine Vedsutra products with quality guarantee</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Heart className="w-12 h-12 text-primary" />
            <h3 className="font-semibold">Natural & Safe</h3>
            <p className="text-sm text-muted-foreground">Made with 100% natural ingredients, no harmful chemicals</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <Zap className="w-12 h-12 text-primary" />
            <h3 className="font-semibold">Fast Results</h3>
            <p className="text-sm text-muted-foreground">See visible improvements in energy and wellness quickly</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="border-t pt-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {productDescription.faqs.map((faq, i) => (
            <div key={i} className="border rounded-xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-start gap-2">
                <span className="text-primary">Q{i + 1}.</span>
                <span>{faq.question}</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed pl-7">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shipping & Returns */}
      <section className="bg-secondary/30 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Shipping & Returns
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-xl p-6 space-y-4">
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {productDescription.shipping}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDescription;
