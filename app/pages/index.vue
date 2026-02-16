<script setup>
import ServicesSection from '~/components/ServicesSection.vue';

const canonical = useCanonical()

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value,
    },
  ],
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "AVH Garden",
        url: "https://avh-garden.be",
        telephone: "+32494801596",
        email: "avh-garden@hotmail.com",
        priceRange: "€€",
        description:
          "Entreprise spécialisée en rénovation extérieure et intérieure en Belgique.",
        areaServed: ["Brabant Wallon", "Province de Namur"],
        address: {
          "@type": "PostalAddress",
          addressCountry: "BE",
          addressRegion: "Wallonie",
        },
      }),
    },
  ],
}))

useSeoMeta({
  title:
    "Aménagement extérieur & intérieur en Belgique",
  description:
     "Spécialiste en aménagement extérieur, pavage et terrasses et intérieur en Brabant Wallon et Namur. AVH Garden transforme vos projets. Devis gratuit.",

  robots: "index, follow",

  ogTitle:
      "AVH Garden – Aménagement extérieur et intérieur en Belgique",
  ogDescription:
      "Spécialiste en aménagement extérieur, pavage et terrasses en Brabant Wallon et Namur. AVH Garden transforme vos extérieurs avec précision et expertise. Devis gratuit.",
  ogImage: "https://www.avh-garden.be/og-avhgarden.jpg",
  ogUrl: canonical,
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "AVH Garden – Entreprise de rénovation",
  twitterDescription:
    "Aménagement extérieur, pavage et terrasses en Brabant Wallon & Namur. AVH Garden réalise vos projets avec précision. Devis gratuit.",
  twitterImage: "https://www.avh-garden.be/og-avhgarden.jpg",
});
</script>


<template>
  <div>
    <HeroSection />
    <WelcomeSection/>    
    <ServicesSection/>
    <FeaturesSection />
    <SplitSection/>
    <RealisationSection/>
  </div>
</template>
