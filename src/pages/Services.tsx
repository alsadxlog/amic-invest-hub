import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedStat from "@/components/AnimatedStat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Percent, 
  DollarSign, 
  Building2, 
  FileCheck, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users, 
  Briefcase,
  Clock,
  Award,
  Handshake,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const Services = () => {
  const features = [
    {
      icon: Percent,
      title: "Competitive Interest Rate",
      description: "Industry-leading rate of 2.85% for qualified applicants with flexible repayment terms",
    },
    {
      icon: DollarSign,
      title: "Flexible Loan Amounts",
      description: "From $100,000 to over $1 Billion USD to match your project scale",
    },
    {
      icon: Building2,
      title: "SPV/SPE Options",
      description: "Special Purpose Vehicle/Entity collateral solutions for international investors",
    },
    {
      icon: FileCheck,
      title: "Streamlined Process",
      description: "Fast approval with transparent documentation and dedicated support",
    },
    {
      icon: Globe,
      title: "International Reach",
      description: "Serving clients across Oman, Turkey, GCC, and global markets",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Your investments are protected with robust regulatory safeguards",
    },
  ];

  const investmentTypes = [
    {
      icon: TrendingUp,
      title: "Corporate Expansion Loans",
      description: "Scale your business operations with substantial capital for expansion, acquisitions, and market penetration.",
      features: ["Up to $500M available", "5-15 year terms", "Flexible collateral options"],
    },
    {
      icon: Building2,
      title: "Real Estate Development",
      description: "Fund commercial and residential development projects with competitive rates and extended terms.",
      features: ["Project-based financing", "Construction to completion", "Joint venture options"],
    },
    {
      icon: Briefcase,
      title: "Infrastructure Projects",
      description: "Large-scale infrastructure financing for government and private sector initiatives.",
      features: ["PPP partnerships", "Long-term financing", "Sovereign guarantees accepted"],
    },
    {
      icon: Users,
      title: "Equity Partnerships",
      description: "Strategic equity investments for high-growth companies seeking expansion capital.",
      features: ["Minority stakes available", "Board advisory support", "Exit flexibility"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Submit your application and our team will schedule a confidential consultation to understand your needs.",
    },
    {
      step: "02",
      title: "Due Diligence",
      description: "Our analysts review your documentation, business plan, and conduct comprehensive financial assessment.",
    },
    {
      step: "03",
      title: "Term Negotiation",
      description: "We present tailored financing options and work with you to structure the optimal terms.",
    },
    {
      step: "04",
      title: "Approval & Funding",
      description: "Upon agreement, funds are disbursed efficiently to accelerate your project timeline.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjAzIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
                Premium Financial Solutions
              </span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Investment & Loan Services
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Comprehensive financial solutions designed for enterprises, governments, and high-net-worth individuals seeking substantial capital for transformative projects.
              </p>
            </div>
          </div>
        </section>

        {/* Key Stats Section */}
        <section className="py-16 bg-background relative -mt-12">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-accent/30 shadow-xl">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                    <AnimatedStat 
                      icon={Percent} 
                      end={2.85} 
                      suffix="%" 
                      label="Annual Interest Rate"
                      isDecimal
                    />
                    <AnimatedStat 
                      icon={DollarSign} 
                      end={100} 
                      prefix="$" 
                      suffix="K" 
                      label="Minimum Loan Amount"
                    />
                    <AnimatedStat 
                      icon={TrendingUp} 
                      end={1} 
                      prefix="$" 
                      suffix="B+" 
                      label="Maximum Loan Amount"
                    />
                    <AnimatedStat 
                      icon={Clock} 
                      end={48} 
                      suffix="hrs" 
                      label="Initial Response Time"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Investment Types Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4 text-primary">
                  Our Financial Products
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Tailored solutions for diverse investment needs across multiple sectors and geographies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {investmentTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <Card key={index} className="border-accent/20 hover:border-accent/50 transition-all hover:shadow-lg group">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                            <Icon className="h-8 w-8 text-accent" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-serif mb-2">{type.title}</CardTitle>
                            <CardDescription className="text-base">{type.description}</CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {type.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4 text-primary">
                  Why Partner With Us
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Decades of experience in global finance backed by regional expertise and unwavering commitment to client success
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="border-accent/20 hover:border-accent transition-all hover:shadow-md group"
                    >
                      <CardHeader>
                        <div className="p-3 bg-muted rounded-lg w-fit group-hover:bg-accent/10 transition-colors">
                          <Icon className="h-8 w-8 text-accent" />
                        </div>
                        <CardTitle className="text-lg font-serif mt-4">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Application Process Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-serif font-bold mb-4">
                  Simple Application Process
                </h2>
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                  From initial inquiry to funding, our streamlined process ensures efficient and transparent handling of your application
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground font-bold text-xl mb-6">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-3">{step.title}</h3>
                      <p className="text-primary-foreground/70 text-sm leading-relaxed">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-[60%] w-[80%]">
                        <ArrowRight className="h-6 w-6 text-accent/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-serif font-bold mb-6 text-primary">
                    Loan Requirements
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    We maintain clear and transparent requirements to ensure a smooth application process. Our team will guide you through each step.
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Minimum loan amount: $100,000 USD",
                      "Maximum loan amount: $1 Billion USD+",
                      "SPV/SPE collateral for non-citizens",
                      "Comprehensive business plan",
                      "Financial documentation and projections",
                      "Proof of business registration",
                      "Operational history (minimum 2 years preferred)",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <Card className="border-accent/30">
                    <CardHeader>
                      <Award className="h-10 w-10 text-accent mb-2" />
                      <CardTitle className="font-serif">For Citizens of Oman & Turkey</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        Citizens of Oman and Turkey enjoy streamlined documentation requirements and preferential consideration for local development projects.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/30">
                    <CardHeader>
                      <Handshake className="h-10 w-10 text-accent mb-2" />
                      <CardTitle className="font-serif">For International Investors</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        International clients can utilize SPV (Special Purpose Vehicle) or SPE (Special Purpose Entity) structures as collateral, enabling secure and compliant cross-border transactions.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-accent/10 via-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary">
                Ready to Transform Your Vision?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Start your application today and one of our senior financial advisors will contact you within 24-48 hours to discuss your requirements and explore tailored solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/register">
                    Start Your Application
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/contact">Contact Our Team</Link>
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
