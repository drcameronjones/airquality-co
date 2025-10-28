import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";
import { Users, TrendingUp, Briefcase } from "lucide-react";

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interestArea: "general" as "collaboration" | "investment" | "commercialization" | "general",
    message: "",
  });

  const createLead = trpc.leads.create.useMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please provide your name and email");
      return;
    }

    try {
      await createLead.mutateAsync(formData);
      toast.success("Thank you! We'll be in touch soon.");
      setFormData({
        name: "",
        email: "",
        organization: "",
        interestArea: "general",
        message: "",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Get Involved
              </h1>
              <p className="text-xl text-gray-600">
                Join us in revolutionizing respiratory health intelligence
              </p>
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="border-2 hover:border-blue-400 transition-colors">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mb-4" />
                    <CardTitle>Collaboration</CardTitle>
                    <CardDescription>Research partnerships and data sharing</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Research partnerships</li>
                      <li>• Academic institutions</li>
                      <li>• Data sharing initiatives</li>
                      <li>• Joint publications</li>
                      <li>• Technology integration</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-green-400 transition-colors">
                  <CardHeader>
                    <TrendingUp className="h-12 w-12 text-green-600 mb-4" />
                    <CardTitle>Investment</CardTitle>
                    <CardDescription>Funding and growth opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Seed funding opportunities</li>
                      <li>• Blockchain/Solana integration</li>
                      <li>• Market expansion in Australia & SE Asia</li>
                      <li>• Scalable technology platform</li>
                      <li>• Global health impact</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-purple-400 transition-colors">
                  <CardHeader>
                    <Briefcase className="h-12 w-12 text-purple-600 mb-4" />
                    <CardTitle>Commercialization</CardTitle>
                    <CardDescription>Business and licensing opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Licensing opportunities</li>
                      <li>• White-label solutions</li>
                      <li>• Enterprise partnerships</li>
                      <li>• Distribution channels</li>
                      <li>• Strategic alliances</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Vision</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  We're building more than just a forecasting platform – we're creating a new paradigm 
                  for respiratory health intelligence that combines cutting-edge AI with accessible, 
                  real-time environmental data.
                </p>
                <p>
                  Our vision extends to <strong>Web3 and blockchain integration</strong>, exploring 
                  opportunities on the Solana blockchain for decentralized health data networks and 
                  incentivized monitoring systems. This approach could revolutionize how communities 
                  share and benefit from environmental health data.
                </p>
                <p>
                  We're particularly focused on regions like <strong>Australia and Southeast Asia</strong> 
                  where real-time mould monitoring infrastructure is limited. By leveraging existing 
                  sensor networks and public APIs, we can provide valuable health intelligence without 
                  the need for costly new infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DeSci & Token Funding */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">DeSci & Token-Based Funding</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  We're embracing <strong>Decentralized Science (DeSci)</strong> principles to democratize 
                  research funding and accelerate innovation in respiratory health intelligence. By leveraging 
                  blockchain technology and token-based funding mechanisms, we can create transparent, 
                  community-driven R&D pathways that align incentives across researchers, investors, and users.
                </p>
                <p>
                  Our approach includes exploring <strong>token seed platforms</strong> for strategic R&D funding, 
                  enabling fractional ownership and participation in our research outcomes. This model allows 
                  early supporters to contribute to specific research goals while sharing in the success of 
                  breakthrough discoveries and platform development.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>DeSci Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Transparent funding allocation</li>
                      <li>• Community governance of research priorities</li>
                      <li>• Open access to research outputs</li>
                      <li>• Incentivized data contribution</li>
                      <li>• Global collaboration without borders</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Token Funding Model</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Fractional research ownership</li>
                      <li>• Milestone-based token releases</li>
                      <li>• Governance rights for token holders</li>
                      <li>• Revenue sharing from commercialization</li>
                      <li>• Early access to platform features</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Strategic R&D Goals</h3>
                <p className="text-gray-700 mb-4">
                  Token-based funding will support key research initiatives including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Enhanced Bioaerosol Modeling:</strong> Developing more sophisticated algorithms for mould spore prediction</li>
                  <li><strong>IoT Sensor Integration:</strong> Creating decentralized networks of home air quality monitors</li>
                  <li><strong>Global Expansion:</strong> Extending coverage to underserved regions in Southeast Asia and beyond</li>
                  <li><strong>Clinical Validation:</strong> Conducting large-scale studies to validate predictive accuracy</li>
                  <li><strong>API Ecosystem:</strong> Building developer tools for third-party integrations</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Express Your Interest</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 48 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization</Label>
                      <Input
                        id="organization"
                        type="text"
                        placeholder="Your company or institution (optional)"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="interestArea">Area of Interest *</Label>
                      <Select
                        value={formData.interestArea}
                        onValueChange={(value: typeof formData.interestArea) =>
                          setFormData({ ...formData, interestArea: value })
                        }
                      >
                        <SelectTrigger id="interestArea">
                          <SelectValue placeholder="Select your area of interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="collaboration">Collaboration</SelectItem>
                          <SelectItem value="investment">Investment</SelectItem>
                          <SelectItem value="commercialization">Commercialization</SelectItem>
                          <SelectItem value="general">General Inquiry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your interest and how you'd like to get involved..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={createLead.isPending}
                    >
                      {createLead.isPending ? "Submitting..." : "Submit Your Interest"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-2">Prefer to email directly?</p>
                <a
                  href="mailto:cameron@drcameronjones.com"
                  className="text-blue-600 hover:underline font-medium"
                >
                  cameron@drcameronjones.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Why Partner With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Proven Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Our approach is grounded in peer-reviewed research and validated through 
                      real-world case studies in Melbourne and beyond.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Scalable Technology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      API-driven architecture that can scale globally without requiring new 
                      physical infrastructure or sensor deployment.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Market Opportunity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Addressing a critical gap in respiratory health monitoring, particularly 
                      in Australia and Southeast Asia where real-time data is limited.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Innovation Focus</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Exploring cutting-edge technologies including blockchain integration and 
                      decentralized health data networks for future growth.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

