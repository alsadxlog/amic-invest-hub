import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Percent, DollarSign, Building2, FileCheck, Globe, Shield } from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: Percent,
      title: "Competitive Interest Rate",
      description: "Industry-leading rate of 2.85% for qualified applicants",
    },
    {
      icon: DollarSign,
      title: "Flexible Loan Amounts",
      description: "From $100,000 to over $1 Billion USD",
    },
    {
      icon: Building2,
      title: "SPV/SPE Options",
      description: "Special Purpose Vehicle/Entity collateral for non-citizens",
    },
    {
      icon: FileCheck,
      title: "Streamlined Process",
      description: "Fast approval and transparent documentation",
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Serving clients across Oman, Turkey, and beyond",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your investments are protected with robust safeguards",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-serif font-bold mb-6 text-primary text-center">
                Investment & Loan Services
              </h1>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                Comprehensive financial solutions tailored to your business needs
              </p>

              <Card className="border-accent/20 mb-12">
                <CardHeader className="text-center">
                  <CardTitle className="text-3xl font-serif text-primary">
                    Our Loan Program
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Flexible financing for your growth ambitions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-6 bg-muted/50 rounded-lg">
                      <Percent className="h-8 w-8 mx-auto mb-3 text-accent" />
                      <p className="text-3xl font-bold text-primary mb-2">2.85%</p>
                      <p className="text-sm text-muted-foreground">Annual Interest Rate</p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-lg">
                      <DollarSign className="h-8 w-8 mx-auto mb-3 text-accent" />
                      <p className="text-3xl font-bold text-primary mb-2">$100K</p>
                      <p className="text-sm text-muted-foreground">Minimum Loan</p>
                    </div>
                    <div className="p-6 bg-muted/50 rounded-lg">
                      <DollarSign className="h-8 w-8 mx-auto mb-3 text-accent" />
                      <p className="text-3xl font-bold text-primary mb-2">$1B+</p>
                      <p className="text-sm text-muted-foreground">Maximum Loan</p>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4 text-primary">
                      Loan Requirements
                    </h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Minimum loan amount: $100,000 USD (suitable for small to large-scale
                          projects)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Maximum loan amount: $1 Billion USD+ (for enterprise-level investments)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          For non-citizens: SPV (Special Purpose Vehicle) or SPE (Special Purpose
                          Entity) collateral required
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Comprehensive business plan and financial documentation
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span>
                          Proof of business registration and operational history
                        </span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="mb-12">
                <h2 className="text-3xl font-serif font-bold mb-8 text-primary text-center">
                  Why Choose Us
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card
                        key={index}
                        className="border-accent/20 hover:border-accent transition-colors"
                      >
                        <CardHeader>
                          <Icon className="h-10 w-10 text-accent mb-2" />
                          <CardTitle className="text-lg font-serif">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div className="text-center bg-muted/50 p-12 rounded-lg">
                <h3 className="text-2xl font-serif font-bold mb-4 text-primary">
                  Ready to Apply?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Start your application today and one of our financial experts will contact you
                  within 24-48 hours to discuss your requirements.
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/register">Start Your Application</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
