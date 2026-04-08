"use client";

import { usePathname } from "next/navigation";

export default function PricingSection() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  if (isEnglish) {
    return (
      <section className="bg-black px-4 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
            <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_1fr]">
              <div className="p-8 md:p-12">
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400/80">
                  Pricing
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                  Services & Pricing
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                  Premium detailing packages designed for every level of care —
                  from regular maintenance to full interior and exterior
                  transformation.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                    Premium Finish
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                    Luxury Care
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                    Interior & Exterior
                  </div>
                </div>
              </div>

              <div className="relative min-h-[280px]">
                <img
                  src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1600&q=80"
                  alt="Vehicle being professionally detailed"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent lg:bg-gradient-to-l" />
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Ascendant Care
                </h2>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  Essential
                </span>
              </div>

              <p className="mt-2 text-yellow-400">Refined Maintenance</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Ideal for clients who want to keep their vehicle consistently
                clean, fresh, and well-presented. This package focuses on
                essential interior and exterior maintenance.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Starting at
                </div>
                <ul className="mt-3 space-y-2 text-white/90">
                  <li className="flex items-center justify-between gap-4">
                    <span>Sedan</span>
                    <span className="font-semibold text-yellow-400">$174.99</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>SUV</span>
                    <span className="font-semibold text-yellow-400">$209.99</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>Large SUV / Truck</span>
                    <span className="font-semibold text-yellow-400">$249.99</span>
                  </li>
                </ul>
                <div className="mt-4 border-t border-white/10 pt-4 text-sm text-white/60">
                  Approx. 2 Hours
                </div>
              </div>

              <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white">
                What’s Included
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                <li>• Safe foam hand wash (two-bucket method)</li>
                <li>• Deep wheel & brake dust cleaning</li>
                <li>• Tire dressing (satin finish)</li>
                <li>• Full interior vacuum</li>
                <li>• Dashboard, console & panel wipe-down</li>
                <li>• Door jamb cleaning</li>
                <li>• Interior & exterior glass cleaning</li>
              </ul>
            </div>

            <div className="relative rounded-[2rem] border border-yellow-500/40 bg-gradient-to-b from-[#17120a] via-black to-[#120f09] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
              <div className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-yellow-300">
                Most Requested
              </div>

              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Ascendant Elite
                </h2>
                <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-200">
                  Premium
                </span>
              </div>

              <p className="mt-2 text-yellow-400">
                Interior & Exterior Enhancement
              </p>
              <p className="mt-4 text-sm leading-7 text-white/75">
                Perfect for clients looking for a more complete detail with
                deeper interior cleaning, stain treatment, and added exterior
                protection for a more elevated finish.
              </p>

              <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Starting at
                </div>
                <ul className="mt-3 space-y-2 text-white/95">
                  <li className="flex items-center justify-between gap-4">
                    <span>Sedan</span>
                    <span className="font-semibold text-yellow-400">$274.99</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>SUV</span>
                    <span className="font-semibold text-yellow-400">$309.99</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>Large SUV / Truck</span>
                    <span className="font-semibold text-yellow-400">$349.99</span>
                  </li>
                </ul>
                <div className="mt-4 border-t border-yellow-500/15 pt-4 text-sm text-white/60">
                  Approx. 4 Hours
                </div>
              </div>

              <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white">
                What’s Included
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
                <li>• Everything in Ascendant Care</li>
                <li>• Steam cleaning (high-touch areas)</li>
                <li>• Carpet & seat spot extraction</li>
                <li>• Light stain treatment</li>
                <li>• Deep wheel detailing</li>
                <li>• Trim & plastic conditioning</li>
                <li>• 4–6 month hydrophobic paint sealant</li>
                <li>• Detailed vent & seam cleaning</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-white">
                  Ascendant Signature
                </h2>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                  Signature
                </span>
              </div>

              <p className="mt-2 text-yellow-400">Complete Transformation</p>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Our most comprehensive package for vehicles that need full
                restoration-level attention. Best for heavily soiled interiors,
                neglected paint, salt buildup, and clients seeking the highest
                level of finish.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                  Starting at
                </div>
                <ul className="mt-3 space-y-2 text-white/90">
                  <li className="flex items-center justify-between gap-4">
                    <span>Sedan</span>
                    <span className="font-semibold text-yellow-400">$374.99</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>SUV</span>
                    <span className="font-semibold text-yellow-400">$409.99</span>
                  </li>
                  <li className="flex items-center justify-between gap-4">
                    <span>Large SUV / Truck</span>
                    <span className="font-semibold text-yellow-400">$449.99</span>
                  </li>
                </ul>
                <div className="mt-4 border-t border-white/10 pt-4 text-sm text-white/60">
                  Approx. 6 Hours
                </div>
              </div>

              <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white">
                What’s Included
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
                <li>• Everything in Ascendant Elite</li>
                <li>• Full carpet & upholstery extraction</li>
                <li>• Advanced salt & heavy stain remediation</li>
                <li>• Leather deep clean & conditioning</li>
                <li>• Iron particle removal treatment</li>
                <li>• Clay bar paint decontamination</li>
                <li>• 6–12 month premium sealant protection</li>
                <li>• Engine bay detailing</li>
                <li>• Exterior trim restoration</li>
              </ul>
            </div>
          </div>

          <div className="mt-16 rounded-[2rem] border border-white/10 bg-neutral-950 p-8 md:p-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/80">
                  Additional Services
                </p>
                <h3 className="mt-3 text-3xl font-semibold text-white">
                  Popular Enhancements
                </h3>
                <p className="mt-3 max-w-2xl text-white/70">
                  Optional services recommended during inspection based on your
                  vehicle’s condition and your goals.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Interior & Condition
                </h4>
                <ul className="space-y-3 text-sm leading-6 text-white/75">
                  <li>Pet Hair Removal — $75 / $125+</li>
                  <li>Targeted Stain Removal — $80–$150+</li>
                  <li>Ozone Odor Treatment — $150</li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Protection & Longevity
                </h4>
                <ul className="space-y-3 text-sm leading-6 text-white/75">
                  <li>Interior Fabric Protection — $120–$180</li>
                  <li>Leather Protection Treatment — $150–$250</li>
                  <li>Windshield Hydrophobic Coating — $80–$120</li>
                  <li>Wheel Protection Coating — $150–$275</li>
                </ul>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
                <h4 className="mb-4 text-lg font-semibold text-white">
                  Specialized Services
                </h4>
                <ul className="space-y-3 text-sm leading-6 text-white/75">
                  <li>Engine Bay Detail — $80–$120</li>
                  <li>Iron Decontamination — $50–$80</li>
                  <li>Undercarriage Winter Flush — $60–$100</li>
                  <li>Multi-Stage Paint Correction — $800–$1,500</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/[0.03] to-yellow-500/10 p-6 text-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
            <p className="text-base leading-7">
              A{" "}
              <span className="font-semibold text-yellow-400">
                $50 retainer fee
              </span>{" "}
              is required to secure your appointment. The retainer is applied to
              your total service cost.
            </p>
            <p className="mt-3 text-sm text-white/55">
              Starting prices assume average vehicle condition. Excessive
              contamination or heavy soiling may require additional time.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-black px-4 py-20 text-white md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-gradient-to-br from-neutral-950 via-black to-neutral-900 shadow-[0_0_40px_rgba(0,0,0,0.45)]">
          <div className="grid items-stretch gap-0 lg:grid-cols-[1.15fr_1fr]">
            <div className="p-8 md:p-12">
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-yellow-400/80">
                Tarifs
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Services et tarifs
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70">
                Des forfaits haut de gamme conçus pour chaque niveau d’entretien
                — de la maintenance régulière à la transformation complète
                intérieure et extérieure.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Finition haut de gamme
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Soin de luxe
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                  Intérieur & extérieur
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?auto=format&fit=crop&w=1600&q=80"
                alt="Véhicule en cours d’esthétique automobile"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent lg:bg-gradient-to-l" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                Ascendant Care
              </h2>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                Essentiel
              </span>
            </div>

            <p className="mt-2 text-yellow-400">Entretien raffiné</p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Idéal pour les clients qui veulent garder leur véhicule propre,
              frais et bien présenté au quotidien. Ce forfait se concentre sur
              l’entretien essentiel de l’intérieur et de l’extérieur.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                À partir de
              </div>
              <ul className="mt-3 space-y-2 text-white/90">
                <li className="flex items-center justify-between gap-4">
                  <span>Berline</span>
                  <span className="font-semibold text-yellow-400">$179</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>VUS</span>
                  <span className="font-semibold text-yellow-400">$199</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Grand VUS / Camion</span>
                  <span className="font-semibold text-yellow-400">$219</span>
                </li>
              </ul>
              <div className="mt-4 border-t border-white/10 pt-4 text-sm text-white/60">
                Environ 2 heures
              </div>
            </div>

            <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Ce qui est inclus
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
              <li>• Lavage mousse sécuritaire à la main (méthode à deux seaux)</li>
              <li>
                • Nettoyage en profondeur des roues et de la poussière de freins
              </li>
              <li>• Finition satinée pour les pneus</li>
              <li>• Aspirateur complet de l’habitacle</li>
              <li>
                • Essuyage du tableau de bord, de la console et des panneaux
              </li>
              <li>• Nettoyage des jambages de portes</li>
              <li>• Nettoyage des vitres intérieures et extérieures</li>
            </ul>
          </div>

          <div className="relative rounded-[2rem] border border-yellow-500/40 bg-gradient-to-b from-[#17120a] via-black to-[#120f09] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent" />
            <div className="mb-4 inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-yellow-300">
              Le plus demandé
            </div>

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                Ascendant Elite
              </h2>
              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-yellow-200">
                Premium
              </span>
            </div>

            <p className="mt-2 text-yellow-400">
              Amélioration intérieure et extérieure
            </p>
            <p className="mt-4 text-sm leading-7 text-white/75">
              Parfait pour les clients qui recherchent un service plus complet
              avec un nettoyage intérieur plus poussé, un traitement des taches
              et une protection extérieure supplémentaire pour une finition plus
              soignée.
            </p>

            <div className="mt-6 rounded-2xl border border-yellow-500/20 bg-white/[0.03] p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                À partir de
              </div>
              <ul className="mt-3 space-y-2 text-white/95">
                <li className="flex items-center justify-between gap-4">
                  <span>Berline</span>
                  <span className="font-semibold text-yellow-400">$329</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>VUS</span>
                  <span className="font-semibold text-yellow-400">$359</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Grand VUS / Camion</span>
                  <span className="font-semibold text-yellow-400">$389</span>
                </li>
              </ul>
              <div className="mt-4 border-t border-yellow-500/15 pt-4 text-sm text-white/60">
                Environ 4 heures
              </div>
            </div>

            <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Ce qui est inclus
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/80">
              <li>• Tout ce qui est inclus dans Ascendant Care</li>
              <li>• Nettoyage à la vapeur des zones fréquemment touchées</li>
              <li>• Extraction localisée des tapis et des sièges</li>
              <li>• Traitement des taches légères</li>
              <li>• Détail approfondi des roues</li>
              <li>• Conditionnement des garnitures et plastiques</li>
              <li>• Scellant hydrophobe pour la peinture (4 à 6 mois)</li>
              <li>• Nettoyage détaillé des bouches d’aération et des joints</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-neutral-950 p-8 shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">
                Ascendant Signature
              </h2>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/60">
                Signature
              </span>
            </div>

            <p className="mt-2 text-yellow-400">Transformation complète</p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Notre forfait le plus complet pour les véhicules qui nécessitent
              une attention de niveau restauration. Idéal pour les intérieurs
              très sales, la peinture négligée, l’accumulation de sel et les
              clients qui recherchent le plus haut niveau de finition.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="text-xs uppercase tracking-[0.25em] text-white/50">
                À partir de
              </div>
              <ul className="mt-3 space-y-2 text-white/90">
                <li className="flex items-center justify-between gap-4">
                  <span>Berline</span>
                  <span className="font-semibold text-yellow-400">$599</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>VUS</span>
                  <span className="font-semibold text-yellow-400">$649</span>
                </li>
                <li className="flex items-center justify-between gap-4">
                  <span>Grand VUS / Camion</span>
                  <span className="font-semibold text-yellow-400">$699</span>
                </li>
              </ul>
              <div className="mt-4 border-t border-white/10 pt-4 text-sm text-white/60">
                Environ 6 heures
              </div>
            </div>

            <h3 className="mt-7 text-sm font-semibold uppercase tracking-[0.25em] text-white">
              Ce qui est inclus
            </h3>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-white/75">
              <li>• Tout ce qui est inclus dans Ascendant Elite</li>
              <li>• Extraction complète des tapis et de la sellerie</li>
              <li>• Traitement avancé du sel et des taches tenaces</li>
              <li>• Nettoyage en profondeur et conditionnement du cuir</li>
              <li>• Décontamination des particules ferreuses</li>
              <li>• Décontamination à la barre d’argile</li>
              <li>• Amélioration de la peinture en une étape à la machine</li>
              <li>• Protection haut de gamme de 6 à 12 mois</li>
              <li>• Détail du compartiment moteur</li>
              <li>• Restauration des garnitures extérieures</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-neutral-950 p-8 md:p-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-400/80">
                Services additionnels
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-white">
                Améliorations populaires
              </h3>
              <p className="mt-3 max-w-2xl text-white/70">
                Services optionnels recommandés lors de l’inspection selon
                l’état du véhicule et vos objectifs.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Intérieur et état du véhicule
              </h4>
              <ul className="space-y-3 text-sm leading-6 text-white/75">
                <li>Retrait de poils d’animaux — $75 / $125+</li>
                <li>Traitement ciblé des taches — $80 à $150+</li>
                <li>Traitement à l’ozone contre les odeurs — $150</li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Protection et longévité
              </h4>
              <ul className="space-y-3 text-sm leading-6 text-white/75">
                <li>Protection des tissus intérieurs — $120 à $180</li>
                <li>Traitement et protection du cuir — $150 à $250</li>
                <li>Traitement hydrophobe du pare-brise — $80 à $120</li>
                <li>Protection des roues — $150 à $275</li>
              </ul>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <h4 className="mb-4 text-lg font-semibold text-white">
                Services spécialisés
              </h4>
              <ul className="space-y-3 text-sm leading-6 text-white/75">
                <li>Détail du compartiment moteur — $80 à $120</li>
                <li>Décontamination ferreuse — $50 à $80</li>
                <li>Rinçage du dessous du véhicule en hiver — $60 à $100</li>
                <li>Correction de peinture multi-étapes — $800 à $1,500</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.75rem] border border-yellow-500/20 bg-gradient-to-r from-yellow-500/10 via-white/[0.03] to-yellow-500/10 p-6 text-white/80 shadow-[0_12px_40px_rgba(0,0,0,0.25)]">
          <p className="text-base leading-7">
            Des{" "}
            <span className="font-semibold text-yellow-400">
              frais de rétention de 50 $
            </span>{" "}
            sont requis pour réserver votre rendez-vous. Les frais sont
            appliqués au coût total du service.
          </p>
          <p className="mt-3 text-sm text-white/55">
            Les prix de départ supposent un véhicule dans un état moyen. Une
            contamination excessive ou un niveau élevé de saleté peut nécessiter
            plus de temps.
          </p>
        </div>
      </div>
    </section>
  );
}
