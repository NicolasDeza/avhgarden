<script setup>

const canonical = useCanonical();

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
        "@type": "ContactPage",
        name: "Contact AVH Garden",
        url: "https://avh-garden.be/contact",
        description: "Contactez AVH Garden pour votre projet d'aménagement extérieur ou de rénovation intérieure en Belgique.",
        mainEntity: {
          "@type": "LocalBusiness",
          name: "AVH Garden",
          telephone: "+32494414994",
          email: "avh-garden@hotmail.com",
           address: {
          "@type": "PostalAddress",
          addressCountry: "BE",
        },
        },
      }),
    },
  ],
}));

useSeoMeta({
  title: "Contact – Devis gratuit pour vos travaux",
  description:
    "Contactez AVH Garden pour votre projet d'aménagement extérieur, pavage, terrasse ou rénovation intérieure en Brabant Wallon et Province de Namur. Devis gratuit sous 48h.",

  robots: "index, follow",

  ogTitle: "Contactez AVH Garden – Devis gratuit",
  ogDescription:
    "Besoin d'un devis pour vos travaux d'aménagement extérieur ou de rénovation ? Contactez AVH Garden, spécialiste en Brabant Wallon et Province de Namur.",
  ogImage: "https://www.avh-garden.be/og-avhgarden.jpg",
  ogUrl: canonical,
  ogType: "website",

  twitterCard: "summary_large_image",
  twitterTitle: "Contact AVH Garden – Devis gratuit",
  twitterDescription:
    "Contactez AVH Garden pour votre projet d'aménagement extérieur ou rénovation intérieure. Devis gratuit sous 48h en Belgique.",
  twitterImage: "https://www.avh-garden.be/og-avhgarden.jpg",
});
</script>
<template>
  <div>
  

    <ContactForm />
  </div>
</template>