import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Wind, Activity, Users } from "lucide-react";

export default function WhyCleanAir() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why Clean Air Matters
              </h1>
              <p className="text-xl text-gray-600">
                Understanding the public health impact of air quality on respiratory health
              </p>
            </div>
          </div>
        </section>

        {/* Global Statistics */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">The Global Health Burden</h2>
              <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
                Air quality has a profound impact on respiratory health worldwide. The connection between 
                air pollution, bioaerosols, and respiratory diseases like asthma and influenza represents 
                one of the most significant public health challenges of our time.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {/* Asthma Statistics */}
                <Card className="border-2 border-blue-200">
                  <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Activity className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-2xl">Asthma</CardTitle>
                    <CardDescription>Global prevalence and impact</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-blue-600">262M</span>
                        <span className="text-gray-600">people affected</span>
                      </div>
                      <p className="text-sm text-gray-600">worldwide in 2019</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-blue-600">455K</span>
                        <span className="text-gray-600">deaths annually</span>
                      </div>
                      <p className="text-sm text-gray-600">Most common chronic disease among children</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold mb-2">Prevalence by age:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Children: <strong>9.1%</strong></li>
                        <li>Adolescents: <strong>11.0%</strong></li>
                        <li>Adults: <strong>6.6%</strong></li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Influenza Statistics */}
                <Card className="border-2 border-green-200">
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-2xl">Influenza</CardTitle>
                    <CardDescription>Seasonal respiratory illness burden</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-green-600">1B</span>
                        <span className="text-gray-600">cases annually</span>
                      </div>
                      <p className="text-sm text-gray-600">seasonal influenza worldwide</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-green-600">290K-650K</span>
                        <span className="text-gray-600">deaths</span>
                      </div>
                      <p className="text-sm text-gray-600">respiratory deaths annually from influenza</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm font-semibold mb-2">Infection rates:</p>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>Adults: <strong>5-10%</strong> annually</li>
                        <li>Children: <strong>20-30%</strong> annually</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                {/* Air Pollution Statistics */}
                <Card className="border-2 border-orange-200">
                  <CardHeader>
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                      <Wind className="h-8 w-8 text-orange-600" />
                    </div>
                    <CardTitle className="text-2xl">Air Pollution</CardTitle>
                    <CardDescription>The invisible killer</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-orange-600">8.1M</span>
                        <span className="text-gray-600">deaths annually</span>
                      </div>
                      <p className="text-sm text-gray-600">#2 risk factor for death globally</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-bold text-orange-600">99%</span>
                        <span className="text-gray-600">of people</span>
                      </div>
                      <p className="text-sm text-gray-600">breathe air that doesn't meet WHO standards</p>
                    </div>
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-700">
                        <strong>232 million</strong> healthy years of life lost worldwide in 2023
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Connection Statement */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Users className="h-8 w-8 text-blue-600" />
                    <CardTitle className="text-2xl">The Connection</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Air pollution and poor air quality are directly linked to increased asthma risk and 
                    respiratory infections. Exposure to particulate matter (PM2.5 and PM10), bioaerosols, 
                    and environmental allergens causes inflammation, oxidative stress, and immunosuppression 
                    in our respiratory systems. By understanding and predicting air quality patterns, we can 
                    help people with asthma and other respiratory conditions take preventive action, reducing 
                    emergency visits, hospitalizations, and improving quality of life. This is the public 
                    health benefit of applied science—using AI and data to forecast respiratory risks before 
                    they become health crises.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CASANZ 2025 Context */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Conversations on Clean Air and Public Health
              </h2>
              <p className="text-lg text-gray-700 mb-12 text-center max-w-4xl mx-auto">
                These recordings highlight discussions about air quality research and the application of 
                AI to forecast respiratory health risks, presented in the context of the CASANZ 2025 
                Clean Air Conference. Listen to how this applied science project aims to transform 
                public health outcomes through predictive intelligence.
              </p>

              {/* Podcast Section */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">The Inverse Hypothesis: AI and Air Pollution Data</CardTitle>
                  <CardDescription>
                    A podcast discussion exploring how AI uses air pollution data to forecast respiratory 
                    health risks and the public health implications of this research
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-6">
                    <audio 
                      controls 
                      className="w-full"
                      preload="metadata"
                    >
                      <source src="/media/podcast.m4a" type="audio/mp4" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </CardContent>
              </Card>

              {/* Video Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">The Air We Breathe Inside</CardTitle>
                  <CardDescription>
                    A NotebookLM-generated video exploring indoor air quality, bioaerosols, and the 
                    connection to respiratory health outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-black rounded-lg overflow-hidden">
                    <video 
                      controls 
                      className="w-full"
                      preload="metadata"
                    >
                      <source src="/media/The_Air_We_Breathe_Inside.mp4" type="video/mp4" />
                      Your browser does not support the video element.
                    </video>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join the Movement for Cleaner Air</h2>
              <p className="text-lg text-gray-700 mb-8">
                By combining bioaerosol monitoring, weather data, and AI-powered predictions, we're 
                building a platform that helps people with asthma and respiratory conditions stay one 
                step ahead of health risks. Clean air isn't just an environmental issue—it's a public 
                health imperative.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/get-involved">
                  <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Get Early Access
                  </button>
                </a>
                <a href="/research">
                  <button className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold">
                    View Our Research
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
