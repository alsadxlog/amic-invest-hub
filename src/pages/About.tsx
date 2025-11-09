import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-serif font-bold mb-6 text-primary text-center">
                About Al Saladin Al Muscat
              </h1>
              <p className="text-xl text-muted-foreground text-center mb-12 leading-relaxed">
                A trusted partner in global investment and strategic financial solutions
              </p>

              <div className="prose prose-lg max-w-none mb-16">
                <p className="text-muted-foreground leading-relaxed">
                  Al Saladin Al Muscat Investment Company is a premier financial institution
                  headquartered in the heart of Muscat, Oman, with strategic operations extending
                  to Istanbul, Turkey. Since our establishment, we have been dedicated to providing
                  comprehensive investment and lending solutions to businesses and individuals
                  seeking to expand their horizons and achieve their financial goals.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Our commitment to excellence, transparency, and client satisfaction has
                  positioned us as a trusted partner for those seeking secure, large-scale
                  financial solutions. We specialize in offering competitive interest rates and
                  flexible loan structures that cater to diverse investment needs across the
                  Middle East and beyond.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <Card className="border-accent/20 hover:border-accent transition-colors">
                  <CardHeader>
                    <Target className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="font-serif">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      To empower global growth by providing secure, transparent, and strategic
                      financial solutions that enable our clients to achieve their investment
                      objectives.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 hover:border-accent transition-colors">
                  <CardHeader>
                    <Eye className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="font-serif">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      To become the leading investment company in the Middle East, recognized for
                      innovation, integrity, and exceptional client service.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 hover:border-accent transition-colors">
                  <CardHeader>
                    <Award className="h-10 w-10 text-accent mb-2" />
                    <CardTitle className="font-serif">Our Values</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Integrity, transparency, client-centricity, and excellence in everything we
                      do. We build lasting relationships based on trust and mutual success.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-3xl font-serif font-bold mb-6 text-primary">
                  Our Leadership
                </h2>
                <p className="text-muted-foreground mb-8">
                  Our team comprises seasoned financial professionals with decades of combined
                  experience in investment banking, corporate finance, and strategic lending. We
                  bring together local expertise and global perspectives to deliver unparalleled
                  service to our clients.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
