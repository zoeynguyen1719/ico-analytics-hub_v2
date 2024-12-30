import { Check } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const SubscriptionPage = () => {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);
  const [showSignupDialog, setShowSignupDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const tiers = [
    {
      name: "Basic",
      price: "Free",
      priceId: null,
      features: [
        "Access to basic ICO listings",
        "Limited portfolio tracking",
        "Basic calculator tools",
        "Public news feed"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Premium",
      price: "$19/month",
      priceId: "price_1QbOJzQjoDZWLsXdFOX1Ubk1",
      features: [
        "All Basic features",
        "Advanced portfolio analytics",
        "Priority ICO alerts",
        "Detailed project comparisons",
        "Premium news access"
      ],
      buttonText: "Subscribe Now",
      highlighted: true
    },
    {
      name: "Advanced",
      price: "$49/month",
      priceId: "price_1QbOKNQjoDZWLsXdnELR9mD5",
      features: [
        "All Premium features",
        "API access",
        "Custom alerts",
        "Priority support",
        "Early access to new features",
        "Advanced market analytics"
      ],
      buttonText: "Subscribe Now",
      highlighted: false
    }
  ];

  const handleBasicSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: Math.random().toString(36).slice(-8), // Generate a random password
        options: {
          data: {
            subscription_tier: 'basic'
          }
        }
      });

      if (error) throw error;

      toast.success("Welcome to Mericulum! Check your email to complete signup.");
      setShowSignupDialog(false);
      setSelectedTier("Basic");
    } catch (error) {
      toast.error("Error during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = async (priceId: string | null, tierName: string) => {
    setSelectedTier(tierName);
    
    if (!priceId) {
      // Handle free tier
      setShowSignupDialog(true);
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/create-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
          },
          body: JSON.stringify({ priceId })
        }
      );

      const { url, error } = await response.json();
      
      if (error) {
        toast.error('Error creating checkout session');
        return;
      }

      // Redirect to Stripe Checkout
      window.location.href = url;
    } catch (error) {
      toast.error('Error processing subscription');
      console.error('Subscription error:', error);
    }
  };

  return (
    <DashboardLayout>
      <div className="py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-crypto-blue mb-4">Choose Your Plan</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your needs. Upgrade or downgrade at any time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative p-8 rounded-xl border ${
                selectedTier === tier.name
                  ? "border-crypto-blue bg-crypto-dark"
                  : tier.highlighted
                  ? "border-crypto-blue bg-black/50"
                  : "border-crypto-gray bg-black/30"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-crypto-blue text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2 text-crypto-blue">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold mb-4 text-white">{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 text-crypto-blue mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleSubscribe(tier.priceId, tier.name)}
                className={`w-full ${
                  selectedTier === tier.name
                    ? "bg-crypto-blue hover:bg-crypto-blue/90"
                    : tier.highlighted
                    ? "bg-crypto-blue hover:bg-crypto-blue/90"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
              >
                {tier.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        <Dialog open={showSignupDialog} onOpenChange={setShowSignupDialog}>
          <DialogContent className="bg-crypto-dark border-crypto-gray">
            <DialogHeader>
              <DialogTitle className="text-2xl text-crypto-blue">Sign Up for Basic Plan</DialogTitle>
              <DialogDescription className="text-gray-300">
                Get started with our free tier and explore the basic features
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleBasicSignup} className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-white">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-crypto-gray text-white border-crypto-blue focus:border-crypto-green"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-crypto-blue hover:bg-crypto-blue/90 text-white"
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default SubscriptionPage;