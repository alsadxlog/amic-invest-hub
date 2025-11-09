import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-serif font-bold mb-4 text-primary">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with our team for any inquiries
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-accent/20">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        required
                        placeholder="Your name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleChange("subject", e.target.value)}
                        required
                        placeholder="Message subject"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        placeholder="Your message..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-accent hover:bg-accent/90"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-accent/20">
                  <CardHeader>
                    <CardTitle className="font-serif text-2xl">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Headquarters</p>
                        <p className="text-sm text-muted-foreground">Muscat, Oman</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Turkey Office</p>
                        <p className="text-sm text-muted-foreground">Istanbul, Turkey</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Email</p>
                        <a
                          href="mailto:info@alsaladin.com"
                          className="text-sm text-muted-foreground hover:text-accent transition-colors"
                        >
                          info@alsaladin.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-primary">Phone</p>
                        <p className="text-sm text-muted-foreground">+968 XXXX XXXX</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-accent/20 bg-muted/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Office Hours</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      Sunday - Thursday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">Friday - Saturday: Closed</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
