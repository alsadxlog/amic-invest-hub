import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4 text-accent">
              Al Saladin Al Muscat
            </h3>
            <p className="text-sm text-primary-foreground/80">
              Empowering Global Growth Through Investment and Strategic Lending.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-accent transition-colors">
                Home
              </Link>
              <Link to="/about" className="block hover:text-accent transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block hover:text-accent transition-colors">
                Services
              </Link>
              <Link to="/contact" className="block hover:text-accent transition-colors">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Headquarters: Muscat, Oman<br />
                  Office: Istanbul, Turkey
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a
                  href="mailto:info@alsaladin.com"
                  className="hover:text-accent transition-colors text-primary-foreground/80"
                >
                  info@alsaladin.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">+968 XXXX XXXX</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} Al Saladin Al Muscat Investment Company.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
