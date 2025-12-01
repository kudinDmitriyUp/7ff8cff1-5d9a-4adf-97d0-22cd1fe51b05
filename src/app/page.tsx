"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTen from '@/components/sections/feature/FeatureCardTen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, Clock, Droplets, Glasses, Leaf, Thermometer } from "lucide-react";

export default function VineyardPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="medium"
      background="radialGradient"
      cardStyle="solid-bordered"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="minimal"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Vineyard Estate"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Wines", id: "product" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Order Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Premium Wines from Our Estate"
          description="Discover carefully crafted wines that embody generations of vineyard tradition and excellence"
          tag="Estate Since 1985"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764602244824-3un1scf9.jpg"
          imageAlt="Wine vineyard landscape"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Shop Collection", href: "product" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Story"
          description={[
            "Our vineyard has been producing exceptional wines for nearly four decades. What began as a passion for winemaking has evolved into a renowned estate recognized throughout the region.",
            "Every bottle reflects our commitment to quality, sustainability, and the art of winemaking. We work hand in hand with nature to produce wines that tell the story of our land.",
            "From the careful selection of grapes to the precise aging process, each vintage represents our dedication to perfection and tradition."
          ]}
          showBorder={true}
          buttons={[
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTen
          title="What Sets Us Apart"
          description="Excellence in every aspect of winemaking"
          features={[
            {
              id: "1",
              title: "Traditional Methods",
              description: "We blend time-honored winemaking techniques with modern quality control",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764602245506-if0pynn9.jpg"
              },
              items: [
                { icon: Leaf, text: "Organic vineyard practices" },
                { icon: Droplets, text: "Natural fermentation process" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Perfect Aging",
              description: "Our temperature-controlled cellars ensure optimal development of every vintage",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-barrel-cellar-storage-aging-1764602247137-198e6f01.jpg"
              },
              items: [
                { icon: Clock, text: "Carefully monitored aging" },
                { icon: Thermometer, text: "Ideal storage conditions" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Expert Tasting",
              description: "Our master sommeliers curate each release with precision and passion",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-tasting-room-vineyard-1764602248624-02eb52a8.jpg"
              },
              items: [
                { icon: Glasses, text: "Expert tasting panels" },
                { icon: Award, text: "Award-winning selections" }
              ],
              reverse: false
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardThree
          title="Our Collection"
          description="Explore our carefully curated selection of premium wines"
          products={[
            {
              id: "1",
              name: "Reserve Cabernet Sauvignon 2019",
              price: "$58.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/red-wine-bottle-premium-label-1764602249924-e2c7fdcd.jpg",
              imageAlt: "Cabernet Sauvignon wine bottle"
            },
            {
              id: "2",
              name: "Estate Merlot 2020",
              price: "$42.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-bottle-cabernet-sauvignon-1764602251443-f09ffbf4.jpg",
              imageAlt: "Merlot wine bottle"
            },
            {
              id: "3",
              name: "Signature Red Blend 2021",
              price: "$35.00",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-bottle-merlot-dark-red-1764602252998-6326d4f4.jpg",
              imageAlt: "Red blend wine bottle"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Wine Lover Stories"
          description="Hear from enthusiasts who cherish our wines"
          testimonials={[
            {
              id: "1",
              name: "Michael Richardson",
              role: "Wine Collector",
              testimonial: "The complexity and elegance of these wines is unmatched. Each bottle tells a story of the vineyard's dedication to excellence.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-man-wine-enthusias-1764602254279-8d4d4496.jpg",
              imageAlt: "Michael Richardson"
            },
            {
              id: "2",
              name: "Sarah Mitchell",
              role: "Sommelier",
              testimonial: "I recommend these wines to all my clients. The quality is consistently exceptional year after year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-woman-sommelier-1764602255654-fbba9d3a.jpg",
              imageAlt: "Sarah Mitchell"
            },
            {
              id: "3",
              name: "James Chen",
              role: "Restaurant Owner",
              testimonial: "Our guests love featuring these wines on our list. They represent the pinnacle of winemaking artistry.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-man-wine-collector-1764602256917-b07cbb7a.jpg",
              imageAlt: "James Chen"
            },
            {
              id: "4",
              name: "Elena Rossi",
              role: "Wine Enthusiast",
              testimonial: "From the first sip, I knew these were wines worth savoring. Truly a treasure from the vineyard.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-woman-wine-lover-1764602258400-43d838ac.jpg",
              imageAlt: "Elena Rossi"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get In Touch"
          description="Reach out to us for wine orders, vineyard visits, or any inquiries about our collection"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your wine preferences or inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Vineyard Estate"
          columns={[
            {
              items: [
                { label: "Home", href: "hero" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Shop", href: "product" },
                { label: "Reviews", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Visit Us", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}