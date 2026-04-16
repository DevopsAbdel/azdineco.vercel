import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Azdine Éco — Formation Comptabilité Pratique au Maroc" },
      {
        name: "description",
        content:
          "Formez-vous en comptabilité pratique avec le Prof. Azdine Éco. Formation 100% pratique, cas réels, attestation et certificat. Packs 3 mois et 6 mois.",
      },
      { property: "og:title", content: "Azdine Éco — Formation Comptabilité Pratique" },
      {
        property: "og:description",
        content:
          "Formation en comptabilité pratique au Maroc. Cas réels, attestation de formation et certificat de réussite.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const WA_LINK = "https://wa.me/212701117636";
const WA_MSG_INSCRIPTION = `${WA_LINK}?text=${encodeURIComponent("Bonjour Prof. Azdine, je souhaite m'inscrire à la formation en comptabilité pratique. Merci de me fournir plus de détails.")}`;
const WA_MSG_INFO = `${WA_LINK}?text=${encodeURIComponent("Bonjour, je souhaite avoir plus d'informations sur vos formations en comptabilité. Merci.")}`;
const WA_MSG_PACK1 = `${WA_LINK}?text=${encodeURIComponent("Bonjour Prof. Azdine, je suis intéressé(e) par le Pack 3 mois (Bases + Pratique). Merci de me donner plus de détails.")}`;
const WA_MSG_PACK2 = `${WA_LINK}?text=${encodeURIComponent("Bonjour Prof. Azdine, je suis intéressé(e) par le Pack 6 mois (Formation Complète). Merci de me donner plus de détails.")}`;

const YOUTUBE_URL = "https://www.youtube.com/@Azdineeco";
const INSTAGRAM_URL = "https://www.instagram.com/azdine_eco";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100064903716436";

/* ─── Icons (inline SVG) ─── */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function CertificateIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  );
}

/* ─── Main Landing Page ─── */
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 bg-brand-dark shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-3">
            <img src="/logo-azdine-eco.jpg" alt="Logo Azdine Éco" className="h-12 w-auto object-contain" />
            <span className="text-lg font-bold text-brand-gold">Azdine Éco</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-brand-gold-light md:flex">
            <a href="#formation" className="transition hover:text-brand-gold">Formation</a>
            <a href="#packs" className="transition hover:text-brand-gold">Packs</a>
            <a href="#certification" className="transition hover:text-brand-gold">Certification</a>
            <a href="#videos" className="transition hover:text-brand-gold">Vidéos</a>
          </nav>
          <a
            href={WA_MSG_INSCRIPTION}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-gold px-4 py-2 text-sm font-bold text-brand-dark transition hover:bg-brand-gold-dark"
          >
            <WhatsAppIcon className="h-4 w-4" />
            S'inscrire
          </a>
        </div>
      </header>

      {/* ── Hero Section ── */}
      <section id="hero" className="relative overflow-hidden bg-brand-dark px-4 py-20 text-center md:py-32">
        <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 50% 0%, var(--brand-gold) 0%, transparent 60%)" }} />
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gold/30 bg-brand-gold/10 px-4 py-1.5 text-sm text-brand-gold">
            <StarIcon className="h-4 w-4" />
            Formation 100% Pratique
          </div>
          <h1 className="mb-6 text-3xl font-extrabold leading-tight text-brand-gold md:text-5xl lg:text-6xl">
            Maîtrisez la Comptabilité<br />
            <span className="text-brand-gold-light">et Lancez Votre Carrière</span>
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-brand-gold-light/80">
            Formez-vous avec le <strong className="text-brand-gold">Prof. Azdine Éco</strong> sur des cas réels du marché marocain.
            Obtenez une attestation de formation et un certificat de réussite.
          </p>
          <p className="mx-auto mb-8 max-w-xl text-base text-brand-gold-light/60" dir="rtl" lang="ar">
            تكوين عملي 100% فالمحاسبة 🎯 حالات واقعية من السوق المغربي، شهادة تكوين + شهادة نجاح
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WA_MSG_INSCRIPTION}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-brand-gold px-8 py-4 text-lg font-bold text-brand-dark shadow-lg transition hover:scale-105 hover:bg-brand-gold-dark"
            >
              <WhatsAppIcon className="h-5 w-5" />
              S'inscrire maintenant
            </a>
            <a
              href={WA_MSG_INFO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-brand-gold px-8 py-4 text-lg font-bold text-brand-gold transition hover:bg-brand-gold/10"
            >
              Demander plus d'informations
            </a>
          </div>
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-brand-gold-light/70">
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-brand-gold" />
              Attestation de formation
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-brand-gold" />
              Cas réels marocains
            </div>
            <div className="flex items-center gap-2">
              <CheckIcon className="h-5 w-5 text-brand-gold" />
              Accompagnement personnalisé
            </div>
          </div>
        </div>
      </section>

      {/* ── Problème / Solution ── */}
      <section id="formation" className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
              Pourquoi cette formation est <span className="text-primary">différente</span> ?
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Vous cherchez une formation en comptabilité qui va au-delà de la théorie ?
              Notre approche est 100% pratique, basée sur des cas réels du marché marocain.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                emoji: "📊",
                title: "Cas Réels",
                desc: "Travaillez sur de vrais dossiers comptables utilisés par les entreprises marocaines.",
              },
              {
                emoji: "🎯",
                title: "100% Pratique",
                desc: "Pas de théorie inutile. Chaque session est orientée compétences opérationnelles.",
              },
              {
                emoji: "📈",
                title: "Marché de l'Emploi",
                desc: "Compétences directement recherchées par les cabinets et entreprises au Maroc.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border bg-card p-8 text-center shadow-sm transition hover:shadow-md">
                <div className="mb-4 text-4xl">{item.emoji}</div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formateur ── */}
      <section className="bg-secondary/50 px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <img src="/logo-azdine-eco.jpg" alt="Prof. Azdine Éco" className="mx-auto mb-6 h-32 w-auto object-contain" />
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">Prof. Azdine Éco</h2>
          <p className="mx-auto mb-6 max-w-xl text-muted-foreground">
            Formateur expérimenté en comptabilité et gestion, spécialisé dans l'enseignement pratique.
            Des milliers d'étudiants formés avec succès, une pédagogie claire et adaptée au contexte marocain.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:shadow-md">
              <YouTubeIcon className="h-4 w-4 text-destructive" />
              YouTube
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:shadow-md">
              <InstagramIcon className="h-4 w-4 text-primary" />
              Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-card px-4 py-2 text-sm font-medium text-foreground shadow-sm transition hover:shadow-md">
              <FacebookIcon className="h-4 w-4 text-primary" />
              Facebook
            </a>
          </div>
        </div>
      </section>

      {/* ── Packs ── */}
      <section id="packs" className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
              Choisissez Votre <span className="text-primary">Pack</span>
            </h2>
            <p className="text-muted-foreground">Deux formules adaptées à vos objectifs et votre disponibilité.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Pack 1 */}
            <div className="relative rounded-2xl border bg-card p-8 shadow-sm transition hover:shadow-lg">
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Pack 3 Mois</h3>
              <p className="mb-6 text-sm text-primary font-semibold">Bases + Pratique</p>
              <ul className="mb-8 space-y-3">
                {[
                  "Les bases de la comptabilité générale",
                  "Exercices pratiques sur cas réels",
                  "Support pédagogique complet",
                  "Suivi personnalisé",
                  "Attestation de formation",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-card-foreground">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WA_MSG_PACK1}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-dark px-6 py-3 font-bold text-brand-gold transition hover:bg-brand-dark-light"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Choisir ce pack
              </a>
            </div>

            {/* Pack 2 — Recommandé */}
            <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-lg transition hover:shadow-xl">
              <div className="absolute -top-3 right-6 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                Recommandé ⭐
              </div>
              <h3 className="mb-2 text-xl font-bold text-card-foreground">Pack 6 Mois</h3>
              <p className="mb-6 text-sm text-primary font-semibold">Formation Complète Professionnelle</p>
              <ul className="mb-8 space-y-3">
                {[
                  "Tout le contenu du Pack 3 Mois",
                  "Comptabilité approfondie",
                  "Fiscalité marocaine pratique",
                  "Déclarations et liasses fiscales",
                  "Cas réels d'entreprises",
                  "Accompagnement intensif",
                  "Attestation + Certificat de réussite",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-card-foreground">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WA_MSG_PACK2}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-primary-foreground transition hover:opacity-90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Choisir ce pack
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certification ── */}
      <section id="certification" className="bg-brand-dark px-4 py-16 text-center md:py-24">
        <div className="mx-auto max-w-4xl">
          <CertificateIcon className="mx-auto mb-6 h-16 w-16 text-brand-gold" />
          <h2 className="mb-4 text-2xl font-bold text-brand-gold md:text-4xl">
            Certification Officielle
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-brand-gold-light/80">
            À la fin de votre formation, vous recevez une <strong className="text-brand-gold">Attestation de formation</strong> ainsi qu'un <strong className="text-brand-gold">Certificat de réussite</strong>, valorisables auprès des employeurs.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-dark-light p-6">
              <div className="mb-3 text-3xl">📜</div>
              <h3 className="mb-2 text-lg font-bold text-brand-gold">Attestation de Formation</h3>
              <p className="text-sm text-brand-gold-light/70">Preuve officielle de suivi complet de la formation en comptabilité pratique.</p>
            </div>
            <div className="rounded-2xl border border-brand-gold/20 bg-brand-dark-light p-6">
              <div className="mb-3 text-3xl">🏆</div>
              <h3 className="mb-2 text-lg font-bold text-brand-gold">Certificat de Réussite</h3>
              <p className="text-sm text-brand-gold-light/70">Certificat attestant vos compétences acquises et votre réussite aux évaluations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section Darija (RTL) ── */}
      <section className="bg-secondary/50 px-4 py-16 md:py-24" dir="rtl" lang="ar">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            🎓 علاش تختار تكوين أزدين إيكو ؟
          </h2>
          <div className="grid gap-6 text-right sm:grid-cols-2">
            {[
              { icon: "✅", text: "تكوين عملي 100% — ماشي غير نظري" },
              { icon: "📊", text: "حالات واقعية من شركات مغربية" },
              { icon: "📱", text: "متابعة شخصية عبر واتساب" },
              { icon: "📜", text: "شهادة تكوين + شهادة نجاح" },
              { icon: "💼", text: "كفاءات مطلوبة فسوق الشغل" },
              { icon: "🎯", text: "مناسب للمبتدئين والمحترفين" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-xl bg-card p-4 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-medium text-card-foreground">{item.text}</span>
              </div>
            ))}
          </div>
          <a
            href={WA_MSG_INSCRIPTION}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-primary-foreground transition hover:opacity-90"
            dir="ltr"
          >
            <WhatsAppIcon className="h-5 w-5" />
            سجّل دابا — S'inscrire maintenant
          </a>
        </div>
      </section>

      {/* ── YouTube Videos ── */}
      <section id="videos" className="bg-background px-4 py-16 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-4xl">
              Découvrez nos <span className="text-primary">Vidéos</span>
            </h2>
            <p className="text-muted-foreground">Suivez notre chaîne YouTube pour des cours gratuits et des aperçus de la formation.</p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-2xl shadow-xl">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/GKyJHYWKZks"
                title="Azdine Éco — Introduction à la comptabilité"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Réseaux Sociaux ── */}
      <section className="bg-secondary/50 px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">Suivez-nous</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md">
              <YouTubeIcon className="h-10 w-10 text-destructive" />
              <span className="text-sm font-bold text-card-foreground">YouTube</span>
              <span className="text-xs text-muted-foreground">@Azdineeco</span>
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md">
              <InstagramIcon className="h-10 w-10 text-primary" />
              <span className="text-sm font-bold text-card-foreground">Instagram</span>
              <span className="text-xs text-muted-foreground">@azdine_eco</span>
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md">
              <FacebookIcon className="h-10 w-10 text-primary" />
              <span className="text-sm font-bold text-card-foreground">Facebook</span>
              <span className="text-xs text-muted-foreground">Azdine Éco</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-brand-dark px-4 py-20 text-center md:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-brand-gold md:text-4xl">
            Commencez Votre Carrière<br />en Comptabilité Aujourd'hui
          </h2>
          <p className="mx-auto mb-4 max-w-xl text-brand-gold-light/80">
            Ne laissez pas passer cette opportunité. Inscrivez-vous maintenant et rejoignez des centaines d'étudiants qui ont transformé leur avenir professionnel.
          </p>
          <p className="mx-auto mb-8 text-brand-gold-light/60" dir="rtl" lang="ar">
            ما تضيّعش الفرصة — سجّل دابا وبدا مشوارك المهني فالمحاسبة 🚀
          </p>
          <a
            href={WA_MSG_INSCRIPTION}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-2xl bg-brand-gold px-10 py-5 text-xl font-extrabold text-brand-dark shadow-2xl transition hover:scale-105 hover:bg-brand-gold-dark"
          >
            <WhatsAppIcon className="h-6 w-6" />
            S'inscrire maintenant via WhatsApp
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-brand-dark border-t border-brand-gold/10 px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <img src="/logo-azdine-eco.jpg" alt="Logo Azdine Éco" className="h-12 w-auto object-contain" />
                <span className="text-lg font-bold text-brand-gold">Azdine Éco</span>
              </div>
              <p className="text-sm text-brand-gold-light/60">
                Formation en comptabilité pratique au Maroc. Votre réussite professionnelle commence ici.
              </p>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-brand-gold">Contact</h4>
              <div className="space-y-2 text-sm text-brand-gold-light/70">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition hover:text-brand-gold">
                  <WhatsAppIcon className="h-4 w-4" />
                  +212 701 117 636
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-bold text-brand-gold">Réseaux Sociaux</h4>
              <div className="flex gap-4">
                <a href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer" className="text-brand-gold-light/70 transition hover:text-brand-gold">
                  <YouTubeIcon className="h-5 w-5" />
                </a>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-gold-light/70 transition hover:text-brand-gold">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="text-brand-gold-light/70 transition hover:text-brand-gold">
                  <FacebookIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-brand-gold/10 pt-6 text-center text-xs text-brand-gold-light/40">
            © {new Date().getFullYear()} Azdine Éco — Tous droits réservés
          </div>
        </div>
      </footer>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={WA_MSG_INFO}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110"
        aria-label="Contacter sur WhatsApp"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </div>
  );
}
