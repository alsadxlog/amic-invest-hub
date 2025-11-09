import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroMuscat from "@/assets/hero-muscat.jpg";
import heroHandshake from "@/assets/hero-handshake.jpg";
import heroOffice from "@/assets/hero-office.jpg";
import heroGrowth from "@/assets/hero-growth.jpg";

const HeroSlider = () => {
  const heroImages = [
    { src: heroMuscat, alt: "Muscat City Skyline" },
    { src: heroHandshake, alt: "Business Partnership" },
    { src: heroOffice, alt: "Modern Office" },
    { src: heroGrowth, alt: "Financial Growth" },
  ];

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent>
          {heroImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[600px] w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50 flex items-center">
                  <div className="container mx-auto px-4">
                    <div className="max-w-2xl text-primary-foreground animate-fade-in">
                      <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Empowering Global Growth Through Investment
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
                        From Oman to the world — offering secure, large-scale financial solutions.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button
                          asChild
                          size="lg"
                          className="bg-accent hover:bg-accent/90 text-accent-foreground"
                        >
                          <Link to="/register">Apply for Loan</Link>
                        </Button>
                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                          <Link to="/register">Join as Member</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default HeroSlider;
