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
  title: "Politique de Confidentialité – AVH Garden",
  description: "Politique de confidentialité et protection des données personnelles d'AVH Garden",
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
            Protection des données
          </div>
          <h1
            class="text-4xl sm:text-5xl font-bold text-foreground leading-tight"
          >
            Politique de Confidentialité
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
              Qui sommes-nous ?
            </h2>
            <p class="text-foreground/80">
              L'adresse de notre site Web est : <strong>https://avh-garden.be</strong>
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Responsable du traitement
            </h2>
            <p class="text-foreground/80 mb-4">
              Le responsable du traitement des données personnelles collectées via le site AVH Garden (le « Site ») est :
            </p>
            <p class="text-foreground/80">
              <strong>Entreprise :</strong> Avh-garden<br>
              <strong>Statut :</strong> Indépendant<br>
              <strong>Numéro BCE / TVA :</strong> 0776.249.824 actif depuis 1997<br>
              <strong>Adresse :</strong> Avenue de ninove 5, 5580 Rochefort<br><br>
              <strong>E-mail de contact :</strong> avh-garden@hotmail.com<br>
              <strong>Téléphone :</strong> +32 494 80 15 96<br><br>
              <strong>Hébergeur :</strong> O2Switch<br>
              <strong>Adresse hébergeur :</strong> Chemin des Pardiaux, 63000 Clermont-Ferrand, France<br>
              <strong>Site web hébergeur :</strong> <a href="https://www.o2switch.fr" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">https://www.o2switch.fr</a>
            </p>
            <p class="text-foreground/80 mt-4">
              AVH Garden s'engage à protéger la vie privée des visiteurs et à respecter la législation applicable, notamment le Règlement Général sur la Protection des Données (RGPD) et la législation belge liée à la protection des données.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Données personnelles collectées
            </h2>
            
            <p class="text-foreground/80 mb-4">
              Via le formulaire de contact, nous collectons :
            </p>
            <ul class="text-foreground/80 list-disc pl-6 space-y-2">
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone (si fourni)</li>
              <li>Message</li>
            </ul>
            <p class="text-foreground/80 mt-3">
              Ces données sont utilisées uniquement pour répondre à votre demande.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Cookies
            </h2>
            <p class="text-foreground/80 mb-3">
              Le site utilise uniquement des cookies essentiels, nécessaires pour améliorer le confort de navigation et se souvenir d'éventuelles préférences d'affichage.
            </p>
            <p class="text-foreground/80 mt-4">
              Aucun cookie publicitaire, analytique ou de suivi n'est installé.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Utilisation et transmission de vos données personnelles
            </h2>
            <p class="text-foreground/80 mb-3">
              Les données collectées via le formulaire de contact :
            </p>
            <ul class="text-foreground/80 list-disc pl-6 space-y-2">
              <li>ne sont jamais vendues</li>
              <li>ne sont pas utilisées à des fins de marketing</li>
              <li>ne sont transmises à aucun tiers, sauf nécessité technique (hébergeur, service anti-spam) ou obligation légale</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Durées de stockage de vos données
            </h2>
            <ul class="text-foreground/80 list-disc pl-6 space-y-2">
              <li><strong>Formulaire de contact :</strong> les données sont conservées uniquement le temps nécessaire au traitement de votre demande.</li>
              <li>Aucun compte utilisateur n'étant disponible, aucune donnée de profil n'est conservée.</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Vos droits (RGPD)
            </h2>
            <p class="text-foreground/80 mb-3">
              Vous disposez des droits suivants :
            </p>
            <ul class="text-foreground/80 list-disc pl-6 space-y-2">
              <li><strong>Droit d'accès :</strong> connaître les données personnelles que nous possédons sur vous</li>
              <li><strong>Droit de rectification</strong></li>
              <li><strong>Droit à la suppression</strong> (droit à l'oubli)</li>
              <li><strong>Droit d'opposition</strong></li>
              <li><strong>Droit de limitation</strong></li>
              <li><strong>Droit à la portabilité</strong> de vos données</li>
            </ul>
            <p class="text-foreground/80 mt-4">
              Pour exercer vos droits, contactez-nous à : <strong>avh-garden@hotmail.com</strong>
            </p>
            <p class="text-foreground/80 mt-3">
              Nous répondrons dans un délai maximum de 30 jours.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Sécurité des données
            </h2>
            <p class="text-foreground/80 mb-3">
              Nous mettons en place différentes mesures pour protéger vos données :
            </p>
            <ul class="text-foreground/80 list-disc pl-6 space-y-2">
              <li>certificat SSL (HTTPS)</li>
              <li>mises à jour régulières de sécurité</li>
              <li>accès limité à l'administration</li>
              <li>protection anti-spam pour les formulaires</li>
              <li>hébergeur sécurisé basé en Europe (o2switch)</li>
            </ul>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Transmission de vos données
            </h2>
            <p class="text-foreground/80">
              Les données de formulaire peuvent être envoyées par e-mail à l'adresse de contact fournie par AVH Garden.
              Certaines données techniques (logs serveurs, adresses IP) sont traitées par notre hébergeur pour assurer la sécurité du site.
            </p>
          </section>

          <section>
            <h2 class="text-2xl font-bold text-foreground mb-4">
              Contact
            </h2>
            <p class="text-foreground/80">
              Pour toute question relative à la protection de vos données personnelles :
            </p>
            <p class="text-foreground/80 mt-4">
              <strong>avh-garden@hotmail.com</strong><br>
              Avenue de ninove 5<br>
              5580 Rochefort<br>
              0494 80 15 96
            </p>
          </section>
        </div>

        <!-- Bouton retour -->
        <div class="flex justify-center pt-8">
          <NuxtLink
            to="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary-hover text-white font-medium transition-colors hover:scale-105"
          >
            <span aria-hidden="true">←</span>
            Retour à l'accueil
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
