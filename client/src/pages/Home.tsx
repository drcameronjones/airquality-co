import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Activity, Cloud, TrendingUp, Zap } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      toast.error("Please provide your name and email");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/submit-interest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          organization: '',
          areaOfInterest: 'general',
          message: 'Signed up via homepage waitlist',
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || "Thank you! We'll be in touch soon.");
        setName("");
        setEmail("");
      } else {
        toast.error(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Predict Your Asthma & Influenza Risk with AI
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Combining bioaerosol monitoring, weather data, and social media trends 
                to forecast respiratory health risks in real-time
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-involved">
                  <Button size="lg" className="text-lg px-8">
                    Get Early Access
                  </Button>
                </Link>
                <Link href="/research">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    View Research
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why AirQuality.co?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Activity className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Real-Time Forecasting</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    AI-powered predictions that combine multiple data sources for accurate respiratory risk assessment
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Cloud className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>No New Sensors</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Leverages existing air quality infrastructure and public APIs for scalable monitoring
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Science-Backed</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Grounded in peer-reviewed research on bioaerosols and respiratory health
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 text-blue-600 mb-2" />
                  <CardTitle>Accessible Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Free and paid options to check weather and get personalized asthma and ILI risk forecasts
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Monitor Air Quality Metrics</h3>
                  <p className="text-gray-600">
                    We continuously track PM2.5, PM10, pollen counts, temperature, and weather parameters from public APIs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Analyzes Bioaerosol Patterns</h3>
                  <p className="text-gray-600">
                    Our algorithms process environmental data to identify bioaerosol exposure levels and their relationship to respiratory health
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cross-Reference with Social Trends</h3>
                  <p className="text-gray-600">
                    We analyze Google Trends data for influenza-like illness signals to validate and enhance predictions
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Deliver Personalized Risk Forecasts</h3>
                  <p className="text-gray-600">
                    Get easy-to-understand Green/Yellow/Red zone risk assessments for your location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Highlights */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cutting-Edge Technology
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines the hygiene hypothesis with modern AI and infodemiology 
                to create a robust forecasting system for respiratory health risks.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">API-Driven</div>
                  <div className="text-sm text-gray-600">Real-time data integration</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">AI-Powered</div>
                  <div className="text-sm text-gray-600">Machine learning models</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Validated</div>
                  <div className="text-sm text-gray-600">Peer-reviewed research</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">Scalable</div>
                  <div className="text-sm text-gray-600">Global coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Stay Informed About Your Respiratory Health
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Join our waitlist to get early access to the platform and receive updates on our progress
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="bg-white text-gray-900"
                  required
                />
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white text-gray-900"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Get Updates"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

