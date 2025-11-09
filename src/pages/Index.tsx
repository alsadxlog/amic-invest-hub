import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSlider from "@/components/HeroSlider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Shield, Globe, Users } from "lucide-react";

const Index = () => {
  const stats = [
    { label: "Interest Rate", value: "2.85%", icon: TrendingUp },
    { label: "Minimum Loan", value: "$100K", icon: Shield },
    { label: "Maximum Loan", value: "$1B+", icon: Globe },
    { label: "Global Reach", value: "Oman & Turkey", icon: Users },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1">
        <HeroSlider />

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="border-accent/20 hover:border-accent transition-colors">
                    <CardContent className="p-6 text-center">
                      <Icon className="h-10 w-10 mx-auto mb-4 text-accent" />
                      <p className="text-3xl font-serif font-bold text-primary mb-2">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-serif font-bold mb-6 text-primary">
                Welcome to Al Saladin Al Muscat
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We are a leading investment company headquartered in Muscat, Oman, with strategic
                operations in Istanbul, Turkey. Our mission is to empower businesses and
                individuals through secure, large-scale financial solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-serif font-bold mb-6">
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who trust us with their financial growth.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to="/register">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
