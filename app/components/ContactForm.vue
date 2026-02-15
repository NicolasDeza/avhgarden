<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue"
import { Mail, MapPin, Send, ShieldCheck, User, MessageSquare, Phone, Facebook } from "lucide-vue-next"
import { useContactForm } from "~/composables/useContactForm"

const { form, errors, loading, success, submit } = useContactForm()
const config = useRuntimeConfig()

const widgetId = ref<string | null>(null)

declare global {
  interface Window {
    turnstile?: {
      render: (selector: string, options: { sitekey: string; callback: (token: string) => void }) => string
      remove: (widgetId: string) => void
    }
  }
}

onMounted(() => {
  const state = useState<string | null>("turnstile")

  const renderWidget = () => {
    if (window.turnstile && !widgetId.value) {
      try {
        widgetId.value = window.turnstile.render("#cf-turnstile-container", {
          sitekey: config.public.turnstileSiteKey,
          callback: (token: string) => {
            state.value = token
          },
        })
      } catch (e) {
        console.error("Erreur rendu Turnstile:", e)
      }
    }
  }

  // Attendre que Turnstile soit chargé
  if (window.turnstile) {
    renderWidget()
  } else {
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval)
        renderWidget()
      }
    }, 100)

    setTimeout(() => clearInterval(interval), 5000)
  }
})

onBeforeUnmount(() => {
  if (widgetId.value && window.turnstile) {
    try {
      window.turnstile.remove(widgetId.value)
    } catch {
      // Ignorer les erreurs de nettoyage
    }
  }
})
</script>


<template>
  <section
    class="w-full bg-gradient-to-b from-white to-slate-50/50 py-20"
    aria-label="Formulaire de contact"
  >
    <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <!-- Colonne gauche : Informations -->
        <div class="relative bg-[#1E1E1E] rounded-2xl p-8 md:p-10 shadow-2xl overflow-hidden">
          <!-- Texture de fond subtile -->
          
          <div class="relative z-10 space-y-8">
            <!-- Badge animé -->
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"/>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"/>
              </span>
              <span class="text-primary font-bold text-[10px] uppercase tracking-widest">Une question ? Contactez-nous</span>
            </div>

            <!-- Titre -->
            <div class="space-y-4">
              <h2 class="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight">
                Concrétisons votre projet <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">ensemble.</span>
              </h2>
              <p class="text-slate-400 text-lg leading-relaxed font-light">
                Vous avez un projet en tête ? Remplissez le formulaire et recevez votre devis personnalisé sous 48h.
              </p>
            </div>

            <!-- Informations de contact -->
            <div class="space-y-4 pt-4">
              <a
                href="mailto:avh-garden@hotmail.com"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div class="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Mail :size="22" class="text-primary" />
                </div>
                <div>
                  <p class="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">
                    Email
                  </p>
                  <p class="text-white font-semibold group-hover:text-primary transition-colors">
                    avh-garden@hotmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+32494414994"
                class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300 group"
              >
                <div class="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                  <Phone :size="22" class="text-primary" />
                </div>
                <div>
                  <p class="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">
                    Téléphone
                  </p>
                  <p class="text-white font-semibold group-hover:text-primary transition-colors">
                    +32 494 80 15 96
                  </p>
                </div>
              </a>

              <div class="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <div class="p-3 rounded-lg bg-primary/20">
                  <MapPin :size="22" class="text-primary" />
                </div>
                <div>
                  <p class="text-xs font-medium text-white/50 uppercase tracking-wide mb-1">
                    Zone d'intervention
                  </p>
                  <p class="text-white font-semibold">
                    Brabant Wallon et Province de Namur
                  </p>
                </div>
              </div>
            </div>

            <!-- Lien Facebook -->
            <div class="pt-4">
              <a 
                href="https://www.facebook.com/p/Avh-garden-100064966030686/" 
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300" 
                aria-label="Visitez notre page Facebook (ouvre dans un nouvel onglet)"
              >
                <Facebook :size="22" />
              </a>
            </div>

            <!-- Stats rapides -->
            <div class="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div class="text-center">
                <p class="text-3xl font-black text-primary">+25</p>
                <p class="text-xs text-slate-400 uppercase tracking-wide mt-1">Ans d'expérience</p>
              </div>
              <div class="text-center">
                <p class="text-3xl font-black text-primary">100%</p>
                <p class="text-xs text-slate-400 uppercase tracking-wide mt-1">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Colonne droite : Formulaire -->
        <form
          class="p-8 lg:p-10 rounded-2xl bg-white border border-foreground/10 shadow-xl space-y-6"
          @submit.prevent="submit"
        >
          <div
            v-if="errors.global"
            role="alert"
            aria-live="polite"
            class="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm"
          >
            {{ errors.global }}
          </div>

          <div class="space-y-2">
            <label
              for="name"
              class="text-sm font-semibold text-foreground flex items-center gap-2"
            >
              <User :size="16" class="text-primary" />
              Nom complet
              <span class="text-red-500">*</span>
            </label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              required
              :aria-invalid="!!errors.name"
              :aria-describedby="errors.name ? 'name-error' : undefined"
              class="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-foreground/10 transition-all text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(233,127,36,0.1)]"
              :class="errors.name ? 'border-red-500 focus:border-red-500' : ''"
            >
            <p
              v-if="errors.name"
              id="name-error"
              class="text-xs text-red-500 flex items-center gap-1"
              role="alert"
            >
              {{ errors.name }}
            </p>
          </div>

          <div class="space-y-2">
            <label
              for="email"
              class="text-sm font-semibold text-foreground flex items-center gap-2"
            >
              <Mail :size="16" class="text-primary" />
              Email
              <span class="text-red-500">*</span>
            </label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="votre@email.com"
              required
              :aria-invalid="!!errors.email"
              :aria-describedby="errors.email ? 'email-error' : undefined"
              class="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-foreground/10 transition-all text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(233,127,36,0.1)]"
              :class="errors.email ? 'border-red-500 focus:border-red-500' : ''"
            >
            <p
              v-if="errors.email"
              id="email-error"
              class="text-xs text-red-500 flex items-center gap-1"
              role="alert"
            >
              {{ errors.email }}
            </p>
          </div>

          <div class="space-y-2">
            <label
              for="phone"
              class="text-sm font-semibold text-foreground flex items-center gap-2"
            >
              <Phone :size="16" class="text-primary" />
              Téléphone
            </label>
            <input
              id="phone"
              v-model="form.phone"
              type="tel"
              placeholder="+32 475 12 34 56"
              :aria-invalid="!!errors.phone"
              :aria-describedby="errors.phone ? 'phone-error' : undefined"
              class="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-foreground/10 transition-all text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(233,127,36,0.1)]"
              :class="errors.phone ? 'border-red-500 focus:border-red-500' : ''"
            >
            <p
              v-if="errors.phone"
              id="phone-error"
              class="text-xs text-red-500 flex items-center gap-1"
              role="alert"
            >
              {{ errors.phone }}
            </p>
          </div>

          <div class="space-y-2">
            <label
              for="message"
              class="text-sm font-semibold text-foreground flex items-center gap-2"
            >
              <MessageSquare :size="16" class="text-primary" />
              Message
              <span class="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              placeholder="Décrivez votre projet..."
              required
              :aria-invalid="!!errors.message"
              :aria-describedby="errors.message ? 'message-error' : undefined"
              class="w-full px-4 py-3.5 rounded-xl bg-white border-2 border-foreground/10 resize-none transition-all text-foreground placeholder:text-foreground/40 outline-none focus:border-primary focus:shadow-[0_0_0_3px_rgba(233,127,36,0.1)]"
              :class="errors.message ? 'border-red-500 focus:border-red-500' : ''"
            />
            <p
              v-if="errors.message"
              id="message-error"
              class="text-xs text-red-500 flex items-center gap-1"
              role="alert"
            >
              {{ errors.message }}
            </p>
          </div>

                    <!-- Turnstile widget (rendu forcé manuellement) -->
 <div class="mb-4">
  <div
    id="cf-turnstile-container"
    class="min-h-[70px] flex items-center"
  />
</div>

          <div
            class="flex items-center justify-center gap-2 text-xs text-foreground/50 mb-2"
          >
            <ShieldCheck :size="14" class="text-primary" />
            <span>Formulaire protégé contre le spam</span>
          </div>

          <button
            type="submit"
            :disabled="loading"
            class="group relative w-full px-6 py-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-3 overflow-hidden"
          >
            <span class="relative z-10">
              {{ loading ? "Envoi en cours..." : "Envoyer le message" }}
            </span>
            <Send v-if="!loading" :size="20" class="relative z-10 group-hover:translate-x-0.5 transition-transform" />
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>

          <p
            v-if="success"
            role="status"
            aria-live="polite"
            class="p-4 rounded-lg bg-green-50 border border-green-200 text-green-600 text-sm text-center font-medium"
          >
            ✓ Message envoyé avec succès !
          </p>
        </form>
      </div>
    </div>
  </section>
</template>
