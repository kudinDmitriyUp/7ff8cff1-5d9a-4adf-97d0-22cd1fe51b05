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
          brandName="Valle de Guadalupe"
          navItems={[
            { name: "Inicio", id: "hero" },
            { name: "Nosotros", id: "about" },
            { name: "Vinos", id: "product" },
            { name: "Testimonios", id: "testimonial" },
            { name: "Contacto", id: "contact" }
          ]}
          button={{
            text: "Ordena Ahora",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroOverlay
          title="Wine and Dine "
          description="Descubre vinos artesanales que encarnan generaciones de tradición vinícola y excelencia en Baja California"
          tag="Bodega Desde 1985"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764612962654-efg496cj.jpg"
          imageAlt="Paisaje de viñedos del Valle de Guadalupe"
          textPosition="bottom-left"
          showBlur={true}
          showDimOverlay={true}
          buttons={[
            { text: "Ver Colección", href: "product" },
            { text: "Conocer Más", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Nuestra Historia"
          description={[
            "Nuestro viñedo ha estado produciendo vinos excepcionales durante casi cuatro décadas en el corazón del Valle de Guadalupe. Lo que comenzó como una pasión por la vinificación se ha convertido en una bodega reconocida en toda Baja California.",
            "Cada botella refleja nuestro compromiso con la calidad, la sustentabilidad y el arte de la vinificación. Trabajamos de la mano con la naturaleza para producir vinos que cuentan la historia de nuestras tierras mexicanas.",
            "Desde la cuidadosa selección de uvas hasta el proceso preciso de envejecimiento, cada cosecha representa nuestra dedicación a la perfección y la tradición del Valle de Guadalupe."
          ]}
          showBorder={true}
          buttons={[
            { text: "Visítanos", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardTen
          title="Lo Que Nos Distingue"
          description="Excelencia en cada aspecto de la vinificación en Baja California"
          features={[
            {
              id: "1",
              title: "Métodos Tradicionales",
              description: "Combinamos técnicas de vinificación ancestrales con control de calidad moderno en el Valle de Guadalupe",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764602245506-if0pynn9.jpg"
              },
              items: [
                { icon: Leaf, text: "Prácticas orgánicas de viñedo" },
                { icon: Droplets, text: "Proceso natural de fermentación" }
              ],
              reverse: false
            },
            {
              id: "2",
              title: "Envejecimiento Perfecto",
              description: "Nuestras cavas con temperatura controlada aseguran el desarrollo óptimo de cada cosecha del Valle",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-barrel-cellar-storage-aging-1764602247137-198e6f01.jpg"
              },
              items: [
                { icon: Clock, text: "Envejecimiento monitoreado cuidadosamente" },
                { icon: Thermometer, text: "Condiciones ideales de almacenamiento" }
              ],
              reverse: true
            },
            {
              id: "3",
              title: "Cata Experta",
              description: "Nuestros maestros sommeliers curan cada lanzamiento con precisión y pasión mexicana",
              media: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-tasting-room-vineyard-1764602248624-02eb52a8.jpg"
              },
              items: [
                { icon: Glasses, text: "Paneles de cata experta" },
                { icon: Award, text: "Selecciones premiadas internacionalmente" }
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
          title="Nuestra Colección"
          description="Explora nuestra selección cuidadosamente curada de vinos premium del Valle de Guadalupe"
          products={[
            {
              id: "1",
              name: "Reserva Cabernet Sauvignon 2019",
              price: "$1,150 MXN",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXWBwMZaYtk/tmp/red-wine-bottle-premium-label-1764602249924-e2c7fdcd.jpg",
              imageAlt: "Botella de vino Cabernet Sauvignon del Valle de Guadalupe"
            },
            {
              id: "2",
              name: "Estate Merlot 2020",
              price: "$850 MXN",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-bottle-cabernet-sauvignon-1764602251443-f09ffbf4.jpg",
              imageAlt: "Botella de vino Merlot del Valle de Guadalupe"
            },
            {
              id: "3",
              name: "Mezcla Tinta Signature 2021",
              price: "$700 MXN",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/wine-bottle-merlot-dark-red-1764602252998-6326d4f4.jpg",
              imageAlt: "Botella de vino mezcla tinta del Valle de Guadalupe"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardTwo
          title="Historias de Amantes del Vino"
          description="Escucha a los entusiastas que aprecian nuestros vinos del Valle de Guadalupe"
          testimonials={[
            {
              id: "1",
              name: "Miguel Rodríguez",
              role: "Coleccionista de Vinos",
              testimonial: "La complejidad y elegancia de estos vinos del Valle de Guadalupe es incomparable. Cada botella cuenta la historia de la dedicación del viñedo a la excelencia.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-man-wine-enthusias-1764602254279-8d4d4496.jpg",
              imageAlt: "Miguel Rodríguez"
            },
            {
              id: "2",
              name: "María Fernández",
              role: "Sommelier",
              testimonial: "Recomiendo estos vinos de Baja California a todos mis clientes. La calidad es consistentemente excepcional año tras año.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-woman-sommelier-1764602255654-fbba9d3a.jpg",
              imageAlt: "María Fernández"
            },
            {
              id: "3",
              name: "Carlos Chen",
              role: "Propietario de Restaurante",
              testimonial: "A nuestros huéspedes les encanta que presentemos estos vinos en nuestra carta. Representan la cúspide del arte vinícola mexicano.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-man-wine-collector-1764602256917-b07cbb7a.jpg",
              imageAlt: "Carlos Chen"
            },
            {
              id: "4",
              name: "Elena Morales",
              role: "Enófila",
              testimonial: "Desde el primer sorbo, supe que estos eran vinos dignos de saborear. Verdaderamente un tesoro del Valle de Guadalupe.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/tmp/portrait-professional-woman-wine-lover-1764602258400-43d838ac.jpg",
              imageAlt: "Elena Morales"
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Ponte en Contacto"
          description="Contáctanos para pedidos de vino, visitas al viñedo, o cualquier consulta sobre nuestra colección del Valle de Guadalupe"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Tu Nombre",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Tu Email",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Cuéntanos sobre tus preferencias de vino o tu consulta...",
            rows: 5,
            required: true
          }}
          buttonText="Enviar Mensaje"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Valle de Guadalupe"
          columns={[
            {
              items: [
                { label: "Inicio", href: "hero" },
                { label: "Nosotros", href: "about" }
              ]
            },
            {
              items: [
                { label: "Tienda", href: "product" },
                { label: "Testimonios", href: "testimonial" }
              ]
            },
            {
              items: [
                { label: "Contacto", href: "contact" },
                { label: "Visítanos", href: "contact" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}