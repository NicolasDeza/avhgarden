<script setup>
const canonical = useCanonical();

useHead(() => ({
  link: [
    {
      rel: "canonical",
      href: canonical.value,
    },
  ],
}));

useSeoMeta({
  title: "Mentions Légales – AVH Garden",
  description: "Informations légales et mentions obligatoires du site AVH Garden",
  robots: "noindex, follow",
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-white to-slate-50/50 py-20">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="space-y-8">
        <!-- En-tête -->
        <div class="space-y-4">
          <div
            class="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
          >
            Informations légales
          </div>
          <h1
            class="text-4xl sm:text-5xl font-bold text-foreground leading-tight"
          >
            Mentions Légales
          </h1>
          <p class="text-lg text-foreground/70">
            Dernière mise à jour : 15 février 2026
          </p>
        </div>

        <!-- Contenu -->
        <div
          class="prose prose-slate max-w-none p-8 rounded-2xl bg-white border border-foreground/10 shadow-xl"
        >
          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Éditeur du site
            </h2>
            <p class="text-foreground/80 mb-4">
              Le présent site est édité par :
            </p>
            <p class="text-foreground/80">
              <strong>AVH Garden</strong><br>
              <strong>Statut :</strong> Indépendant<br>
              <strong>Numéro BCE / TVA :</strong> 0776.249.824 actif depuis 1997<br>
              <strong>Siège social :</strong> Avenue de ninove 5, 5580 Rochefort<br>
              <strong>Téléphone :</strong> +32 494 80 15 96<br>
              <strong>E-mail :</strong> avh-garden@hotmail.com
            </p>
            <p class="text-foreground/80 mt-4">
              <strong>Responsable de la publication :</strong> Léonard Frédéric<br>
              <strong>Contact :</strong> avh-garden@hotmail.com
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Hébergement du site
            </h2>
            <p class="text-foreground/80 mb-3">
              Le site est hébergé par :
            </p>
            <p class="text-foreground/80">
              <strong>O2Switch</strong><br>
              <strong>Adresse :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France<br>
              <strong>Site web :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://www.o2switch.fr</a><br>
              <strong>Téléphone :</strong> +33 (0)4 44 44 60 40
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Propriété intellectuelle
            </h2>
            <p class="text-foreground/80">
              L’ensemble du contenu du site (textes, images, graphismes, logos, vidéos, documents, ainsi que la structure générale du site) est protégé par le droit d’auteur et les lois belges relatives à la propriété intellectuelle.
            </p>
            <p class="text-foreground/80 mt-3">
              Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, est interdite sans l’autorisation écrite préalable d’AVH Garden.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Protection des données personnelles
            </h2>
            <p class="text-foreground/80">
              Pour les informations concernant la collecte et le traitement des données personnelles, veuillez consulter notre Politique de confidentialité, disponible ici :
            </p>
            <p class="text-foreground/80 mt-3">
              <NuxtLink to="/legal/politique-confidentialite" class="text-primary hover:underline font-semibold">
                Politique de confidentialité
              </NuxtLink>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Cookies
            </h2>
            <p class="text-foreground/80">
              Le site peut utiliser des cookies techniques nécessaires à son fonctionnement.
            </p>
            <p class="text-foreground/80 mt-3">
              Pour plus d'informations, veuillez consulter notre 
              <NuxtLink to="/legal/politique-confidentialite" class="text-primary hover:underline font-semibold">
                Politique de confidentialité
              </NuxtLink>.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Responsabilité
            </h2>
            <p class="text-foreground/80">
              AVH Garden s’efforce de fournir une information fiable et mise à jour, mais ne peut garantir l’absence totale d’erreurs, d’omissions ou d’indisponibilité du site.
            </p>
            <p class="text-foreground/80 mt-3">
              Le site peut contenir des liens vers des sites tiers : AVH Garden n’exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Contact
            </h2>
            <p class="text-foreground/80 mb-3">
              Pour toute question ou demande concernant ces mentions légales, vous pouvez contacter :
            </p>
            <p class="text-foreground/80">
              <strong>Email :</strong> avh-garden@hotmail.com<br>
              <strong>Téléphone :</strong> +32 494 80 15 96
            </p>
          </section>
        </div>

        <!-- Bouton retour -->
        <div class="flex justify-center pt-8">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors hover:scale-105 "
          >
            <span aria-hidden="true">←</span>
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>