import { useAuth } from "@/_core/hooks/useAuth";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { trpc } from "@/lib/trpc";
import { Badge } from "@/components/ui/badge";
import { getLoginUrl } from "@/const";
import { Button } from "@/components/ui/button";

export default function AdminLeads() {
  const { user, loading } = useAuth();
  const { data: leads, isLoading } = trpc.leads.list.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Authentication Required</CardTitle>
            <CardDescription>Please log in to view leads</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <a href={getLoginUrl()}>Log In</a>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (user.role !== "admin") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
            <CardDescription>You don't have permission to view this page</CardDescription>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const interestAreaColors = {
    collaboration: "bg-blue-100 text-blue-800",
    investment: "bg-green-100 text-green-800",
    commercialization: "bg-purple-100 text-purple-800",
    general: "bg-gray-100 text-gray-800",
  };

  const interestAreaLabels = {
    collaboration: "Collaboration",
    investment: "Investment",
    commercialization: "Commercialization",
    general: "General Inquiry",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Lead Management</h1>
              <p className="text-gray-600">
                All form submissions from AirQuality.co website
              </p>
            </div>

            {!leads || leads.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-600">No leads yet</p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-4 mb-4">
                  <p className="text-sm font-semibold text-gray-700">
                    Total Leads: {leads.length}
                  </p>
                </div>

                {leads.map((lead) => (
                  <Card key={lead.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl">{lead.name}</CardTitle>
                          <CardDescription className="mt-1">
                            <a 
                              href={`mailto:${lead.email}`}
                              className="text-blue-600 hover:underline"
                            >
                              {lead.email}
                            </a>
                          </CardDescription>
                        </div>
                        <Badge className={interestAreaColors[lead.interestArea as keyof typeof interestAreaColors]}>
                          {interestAreaLabels[lead.interestArea as keyof typeof interestAreaLabels]}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {lead.organization && (
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Organization:</p>
                          <p className="text-sm text-gray-600">{lead.organization}</p>
                        </div>
                      )}
                      
                      {lead.message && (
                        <div>
                          <p className="text-sm font-semibold text-gray-700">Message:</p>
                          <p className="text-sm text-gray-600 whitespace-pre-wrap">{lead.message}</p>
                        </div>
                      )}
                      
                      <div className="pt-2 border-t">
                        <p className="text-xs text-gray-500">
                          Submitted: {new Date(lead.createdAt).toLocaleString('en-AU', {
                            dateStyle: 'medium',
                            timeStyle: 'short',
                          })}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

