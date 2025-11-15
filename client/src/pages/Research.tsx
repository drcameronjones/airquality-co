import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Our Research
              </h1>
              <p className="text-xl text-gray-600">
                Science-backed approach to respiratory risk forecasting
              </p>
            </div>
          </div>
        </section>

        {/* Scientific Foundation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Scientific Foundation</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our platform is grounded in the <strong>hygiene hypothesis</strong>, which suggests that exposure 
                to non-pathogenic bioaerosols such as mould spores and pollen can condition immune responses. 
                Research has demonstrated an inverse correlation between bioaerosol levels and respiratory 
                viruses like influenza-like illnesses (ILIs) and COVID-19.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                By monitoring environmental bioaerosol proxies including PM2.5, PM10, and pollen counts, 
                combined with meteorological variables and social media trend analysis, we can forecast 
                respiratory health risks without deploying new physical sensors.
              </p>
            </div>
          </div>
        </section>

        {/* Key Research Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Key Research Studies</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Shah et al. (2021)</CardTitle>
                    <CardDescription>Chicago Emergency Department Study</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Demonstrated inverse correlations between pollen and mould spore counts with 
                      ILI and COVID-19 emergency department visits in Chicago. The research proposed 
                      that bioaerosols compete with respiratory viruses for innate immune receptors 
                      such as Toll-like receptor 4 (TLR4).
                    </p>
                    <a 
                      href="https://doi.org/10.3390/pathogens10091204" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-2"
                    >
                      View Publication <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hoogeveen et al. (2021)</CardTitle>
                    <CardDescription>Netherlands Pollen Threshold Research</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Showed that pollen concentrations inversely predict flu-like illness including 
                      COVID-19 in the Netherlands, with distinct thresholds marking epidemic transitions. 
                      Solar radiation was identified as a co-inhibitor in this relationship.
                    </p>
                    <a 
                      href="https://doi.org/10.1016/j.scitotenv.2020.143182" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-2"
                    >
                      View Publication <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ladau et al. (2021)</CardTitle>
                    <CardDescription>USA Mycobiome Analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">
                      Found that greater indoor-outdoor fungal beta-diversity was associated with 
                      lower COVID-19 infection fatality ratios across the United States, suggesting 
                      that environmental fungal exposures may condition immune responses.
                    </p>
                    <a 
                      href="https://www.medrxiv.org/content/10.1101/2021.12.14.21267549v2" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline inline-flex items-center gap-2"
                    >
                      View Publication <ExternalLink className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Research Paper */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Our Research Paper</h2>
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    AI-Enabled Respiratory Risk Forecasting: Leveraging Public IAQ Data 
                    and Bioaerosol Signals for Predictive Health Intelligence
                  </CardTitle>
                  <CardDescription className="text-base">
                    Cameron Jones & Bhavya Raj | 2025 Clean Indoor Air for ALL Conference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3">Abstract</h3>
                  <p className="text-gray-700 mb-6">
                    This project describes an API-driven, web-based system that integrates real-time 
                    outdoor bioaerosol proxies including PM2.5, PM10, pollen, and other meteorological 
                    variables to model local illness risk without deploying new physical sensors. 
                    Grounded in research identifying inverse associations between bioaerosol concentrations 
                    and influenza-like illnesses (ILIs), our approach uses multiple public APIs and 
                    infodemiology techniques to deliver risk stratification via a green/yellow/red 
                    exposure model.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/research-paper.pdf" download>
                      <Button className="inline-flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download Paper (PDF)
                      </Button>
                    </a>
                    <a href="/research-presentation.pptx" download>
                      <Button variant="outline" className="inline-flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        Download Presentation (PPTX)
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pitch Deck */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Investor Pitch Deck</h2>
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    AirQuality.co: AI-Enabled Respiratory Risk Forecasting Platform
                  </CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive overview for investors and partners
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-3">Overview</h3>
                  <p className="text-gray-700 mb-6">
                    Our investor pitch deck provides a comprehensive overview of the AirQuality.co platform, 
                    including our technology stack, market opportunity, business model, DeSci integration 
                    strategy, and funding roadmap. Learn how we're leveraging blockchain technology and 
                    token-based funding mechanisms to democratize respiratory health research.
                  </p>
                  <div className="space-y-3 mb-6">
                    <h4 className="font-semibold text-sm">Key Topics Covered:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                      <li>Platform architecture and AI-powered forecasting methodology</li>
                      <li>Market analysis for Australia and Southeast Asia</li>
                      <li>DeSci and Solana blockchain integration strategy</li>
                      <li>Token-based R&D funding mechanisms</li>
                      <li>Revenue model and commercialization pathway</li>
                      <li>Team expertise and scientific committee</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <p className="text-gray-600 font-medium mb-2">
                      Pitch Deck Available Upon Request
                    </p>
                    <p className="text-sm text-gray-500">
                      Please contact us at{" "}
                      <a href="mailto:cameron@drcameronjones.com" className="text-blue-600 hover:underline">
                        cameron@drcameronjones.com
                      </a>
                      {" "}to request access to our investor pitch deck.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Melbourne Case Study */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Melbourne Case Study</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our pilot project in Melbourne demonstrated the practical application of our forecasting 
                system. By analyzing data from the City of Melbourne's sensor network, we observed a 
                decline in PM2.5 and PM10 levels that correlated with increasing influenza-like illness 
                reports from the Victorian Department of Health.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Google Trends data showed rising search volumes for respiratory symptoms during the 
                same period, validating our infodemiology approach. This inverse relationship between 
                bioaerosol levels and illness incidence supports the hygiene hypothesis and demonstrates 
                the predictive power of our platform.
              </p>
              <Card>
                <CardHeader>
                  <CardTitle>Key Findings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>PM decline over the study period correlated with increasing ILI and COVID-19 cases</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Google Trends showed statistically significant increases in fever (+73%), headache (+43%), and muscle pain (+25%) searches</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Real-time API integration successfully aggregated data from multiple sensor networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>Risk visualization system provided accessible public health communication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Demo Video */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Platform in Action</h2>
              <p className="text-center text-gray-600 mb-8">
                See our AI-enabled respiratory risk forecasting system in action
              </p>
              <Card>
                <CardContent className="p-6">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                    <video 
                      controls 
                      className="w-full h-full"
                      poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect fill='%23f3f4f6' width='800' height='450'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='24' fill='%236b7280'%3EAirQuality.co Demo%3C/text%3E%3C/svg%3E"
                    >
                      <source src="/platform-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Our Methodology</h2>
              
              <h3 className="text-2xl font-semibold mb-4 mt-8">Bioaerosol Proxy Calculations</h3>
              <p className="text-lg text-gray-700 mb-6">
                We use bioaerosol coefficients derived from peer-reviewed studies to isolate biological 
                components from total particulate matter. The coefficients (0.024 for PM2.5 and 0.048 
                for PM10) represent the mass fractions of biological particles including bacteria, fungi, 
                and pollen within particulate matter measurements.
              </p>

              <h3 className="text-2xl font-semibold mb-4 mt-8">API Integration</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our platform integrates data from multiple sources:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-6">
                <li><strong>Ambee API:</strong> PM2.5, PM10, pollen counts, temperature, humidity, precipitation, wind speed, NO2, CO</li>
                <li><strong>City of Melbourne Open Data:</strong> Local PM and weather data</li>
                <li><strong>OpenWeatherMap:</strong> Meteorological variables</li>
                <li><strong>Google Trends:</strong> ILI proxy searches (fever, cough, sore throat, muscle ache, fatigue)</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Risk Classification System</h3>
              <p className="text-lg text-gray-700 mb-4">
                Our green/yellow/red risk stratification system provides intuitive health communication:
              </p>
              <ul className="space-y-2 text-gray-700 mb-6 ml-6">
                <li><strong className="text-green-600">Green Zone:</strong> Low respiratory risk due to high bioaerosol exposure (immune priming effect)</li>
                <li><strong className="text-yellow-600">Yellow Zone:</strong> Moderate respiratory risk</li>
                <li><strong className="text-red-600">Red Zone:</strong> High respiratory risk due to low bioaerosol exposure</li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-8">Development Approach</h3>
              <p className="text-lg text-gray-700 mb-6">
                We employed "vibe coding" – an AI-assisted development methodology using large language 
                models (ChatGPT, Claude, Gemini, DeepSeek, Grok, Perplexity) for conversational system 
                design. This approach enabled rapid prototyping and iterative refinement of our dashboard 
                and forecasting algorithms.
              </p>
            </div>
          </div>
        </section>

        {/* DeSci & Blockchain Innovation */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">
                Powered by DeSci & Blockchain Innovation
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                We're pioneering the use of <strong>Decentralized Science (DeSci)</strong> and token-based 
                funding mechanisms to democratize respiratory health research. By leveraging the Solana 
                blockchain and token seed platforms, we enable transparent, community-driven R&D that 
                aligns incentives across researchers, investors, and users.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Transparent Funding</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Token-based mechanisms ensure clear allocation of R&D resources with community governance
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Fractional Ownership</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Early supporters can participate in research outcomes and platform success
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Open Science</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
                      Decentralized approach enables global collaboration without traditional barriers
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

