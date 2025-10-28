import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Building2 } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Team
              </h1>
              <p className="text-xl text-gray-600">
                Experts in bioaerosols, AI, and environmental health
              </p>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Core Team</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Founder */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      CJ
                    </div>
                    <CardTitle className="text-center">Dr Cameron Jones</CardTitle>
                    <CardDescription className="text-center font-semibold text-blue-600">
                      Founder
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Biological Health Services</p>
                          <p className="text-gray-600">Australia</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">National Institute of Integrative Medicine</p>
                          <p className="text-gray-600">Australia</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <Building2 className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">BioMedix Co. Ltd.</p>
                          <p className="text-gray-600">Thailand</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Expert in bioaerosols, indoor air quality, and respiratory health forecasting. 
                      Leading research on AI-enabled predictive health intelligence.
                    </p>
                    <a 
                      href="mailto:cameron@drcameronjones.com"
                      className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
                    >
                      <Mail className="h-4 w-4" />
                      cameron@drcameronjones.com
                    </a>
                  </CardContent>
                </Card>

                {/* Research Associate */}
                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      BR
                    </div>
                    <CardTitle className="text-center">Bhavya Raj</CardTitle>
                    <CardDescription className="text-center font-semibold text-green-600">
                      Research Associate
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Biological Health Services</p>
                        <p className="text-gray-600">Australia</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">
                      Co-developer of the AI-enabled respiratory risk forecasting platform. 
                      Specializes in data analysis, API integration, and bioaerosol modeling.
                    </p>
                  </CardContent>
                </Card>

                {/* Business Development */}
                <Card>
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      ML
                    </div>
                    <CardTitle className="text-center">Meow Meow Ludo</CardTitle>
                    <CardDescription className="text-center font-semibold text-purple-600">
                      Business Development
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm font-medium">Environmental Consultant</p>
                    <p className="text-sm text-gray-700">
                      Driving commercialization strategy and strategic partnerships. 
                      Focused on bringing respiratory health intelligence to market and 
                      exploring blockchain integration opportunities.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Scientific Committee */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Scientific Committee</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Dr Heike Neumeister-Kemp */}
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      HN
                    </div>
                    <CardTitle className="text-center">Dr Heike Neumeister-Kemp</CardTitle>
                    <CardDescription className="text-center font-semibold text-green-600">
                      Scientific Advisor
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Leading aerobiologist with extensive expertise in bioaerosol research, 
                      mould identification, and environmental health. Provides scientific guidance 
                      on bioaerosol modeling and validation methodologies.
                    </p>
                  </CardContent>
                </Card>

                {/* Mr Aron Gingis */}
                <Card className="border-2 border-purple-200">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      AG
                    </div>
                    <CardTitle className="text-center">Mr Aron Gingis</CardTitle>
                    <CardDescription className="text-center font-semibold text-purple-600">
                      Scientific Advisor
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Expert in environmental science and data analytics. Contributes to 
                      research methodology, data interpretation, and scientific validation 
                      of forecasting models.
                    </p>
                  </CardContent>
                </Card>

                {/* Peter Eng */}
                <Card className="border-2 border-orange-200">
                  <CardHeader>
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                      PE
                    </div>
                    <CardTitle className="text-center">Peter Eng</CardTitle>
                    <CardDescription className="text-center font-semibold text-orange-600">
                      Blockchain Consultant
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700">
                      Blockchain technology expert specializing in decentralized science (DeSci) 
                      and token-based funding mechanisms. Advises on Solana integration, smart 
                      contract development, and Web3 strategy for the platform.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Join Our Network</h2>
              <Card>
                <CardHeader>
                  <CardTitle>We're Looking for Collaborators</CardTitle>
                  <CardDescription>
                    Expanding our research and development network
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-700">
                    We're actively seeking partnerships with researchers, academic institutions, 
                    healthcare organizations, and technology partners who share our vision of 
                    democratizing respiratory health intelligence.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Research Collaborators</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Aerobiology researchers</li>
                        <li>• Environmental health scientists</li>
                        <li>• AI and machine learning experts</li>
                        <li>• Public health researchers</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-2">Institutional Partners</h3>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li>• Universities and research institutes</li>
                        <li>• Healthcare organizations</li>
                        <li>• Environmental monitoring agencies</li>
                        <li>• Technology companies</li>
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4">
                    <a href="/get-involved" className="text-blue-600 hover:underline font-medium">
                      Learn more about collaboration opportunities →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Bioaerosol Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Deep understanding of mould spores, pollen, and particulate matter 
                      interactions with respiratory health, grounded in the hygiene hypothesis 
                      and peer-reviewed research.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>AI & Machine Learning</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Advanced AI-assisted development methodologies and machine learning 
                      models for predictive health intelligence and risk stratification.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Environmental Data Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Expertise in API integration, real-time data processing, and synthesis 
                      of multiple environmental data sources for comprehensive analysis.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Infodemiology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Application of social media trends and Google Trends analysis for 
                      real-time disease surveillance and validation of predictive models.
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

