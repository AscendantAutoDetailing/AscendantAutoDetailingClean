"use client";

import { useMemo, useState } from "react";

const packages = [
  {
    id: "ascendant-care",
    name: "Ascendant Care",
    description:
      "A refined maintenance detail for clients who want their vehicle kept consistently clean, sharp, and presentable.",
    prices: {
      small: 174.99,
      medium: 209.99,
      large: 249.99,
    },
    badge: "Essential",
  },
  {
    id: "ascendant-elite",
    name: "Ascendant Elite",
    description:
      "A deeper interior and exterior detailing experience designed for a noticeably more elevated finish.",
    prices: {
      small: 274.99,
      medium: 309.99,
      large: 349.99,
    },
    badge: "Most Popular",
  },
  {
    id: "ascendant-signature",
    name: "Ascendant Signature",
    description:
      "Our most premium detailing package, built for clients who want the most complete and luxurious result.",
    prices: {
      small: 374.99,
      medium: 409.99,
      large: 449.99,
    },
    badge: "Premium",
  },
];

const vehicleSizes = [
  { id: "small", name: "Small Vehicle", description: "Coupe / Sedan" },
  { id: "medium", name: "Medium Vehicle", description: "SUV / Crossover" },
  { id: "large", name: "Large Vehicle", description: "Truck / Large SUV / 3-Row SUV" },
];

const addOns = [
  { id: "pet-hair", name: "Pet Hair Removal", price: 35 },
  { id: "seat-shampoo", name: "Seat Shampoo", price: 45 },
  { id: "carpet-shampoo", name: "Carpet Shampoo", price: 50 },
  { id: "salt-removal", name: "Salt / Stain Removal", price: 40 },
  { id: "engine-bay", name: "Engine Bay Detail", price: 60 },
  { id: "headlight", name: "Headlight Restoration", price: 90 },
  { id: "odor-treatment", name: "Odor Treatment", price: 55 },
  { id: "leather-condition", name: "Leather Conditioning", price: 40 },
];
export default function PackagesPage() {
  const [selectedPackage, setSelectedPackage] = useState("ascendant-elite");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const activePackage = useMemo(
    () => packages.find((pkg) => pkg.id === selectedPackage),
    [selectedPackage]
  );

  const basePrice = activePackage?.prices?.[selectedSize] || 0;

  const addOnTotal = useMemo(() => {
    return selectedAddOns.reduce((total, addOnId) => {
      const addOn = addOns.find((item) => item.id === addOnId);
      return total + (addOn?.price || 0);
    }, 0);
  }, [selectedAddOns]);

  const total = basePrice + addOnTotal;

  function toggleAddOn(id) {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return (
    <main className="min-h-screen bg-[#06070a] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_30%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#d4af37]">
              Book Now
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A premium booking
              <span className="block text-[#d4af37]">experience for premium detailing.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Choose your package, select your vehicle size, add optional upgrades,
              and view your estimated total before confirming your appointment.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_0.75fr] lg:px-8 lg:py-16">
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]/80">Step 1</p>
              <h2 className="mt-2 text-2xl font-semibold">Choose your package</h2>
            </div>

            <div className="grid gap-4">
              {packages.map((pkg) => {
                const isActive = selectedPackage === pkg.id;

                return (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPackage(pkg.id)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-[#d4af37] bg-[#d4af37]/10 shadow-[0_0_0_1px_rgba(212,175,55,0.2)]"
                        : "border-white/10 bg-[#0d1016] hover:border-white/20"
                    }`}
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-xl font-semibold">{pkg.name}</h3>
                          <span className="rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-3 py-1 text-xs font-medium text-[#e7c766]">
                            {pkg.badge}
                          </span>
                        </div>
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/65">
                          {pkg.description}
                        </p>
                      </div>

                      <div className="shrink-0 sm:text-right">
                        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                          Starting at
                        </p>
                        <p className="mt-1 text-2xl font-semibold text-[#d4af37]">
                          ${pkg.prices.small}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]/80">Step 2</p>
              <h2 className="mt-2 text-2xl font-semibold">Select vehicle size</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {vehicleSizes.map((size) => {
                const isActive = selectedSize === size.id;

                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      isActive
                        ? "border-[#d4af37] bg-[#d4af37]/10"
                        : "border-white/10 bg-[#0d1016] hover:border-white/20"
                    }`}
                  >
                    <p className="text-base font-semibold">{size.name}</p>
                    <p className="mt-1 text-sm text-white/55">{size.description}</p>
                    <p className="mt-4 text-lg font-semibold text-[#d4af37]">
                      ${activePackage?.prices?.[size.id] || 0}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-8">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]/80">Step 3</p>
              <h2 className="mt-2 text-2xl font-semibold">Select add-ons</h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {addOns.map((addOn) => {
                const isActive = selectedAddOns.includes(addOn.id);

                return (
                  <button
                    key={addOn.id}
                    type="button"
                    onClick={() => toggleAddOn(addOn.id)}
                    className={`flex items-center justify-between rounded-2xl border p-4 text-left transition ${
                      isActive
                        ? "border-[#d4af37] bg-[#d4af37]/10"
                        : "border-white/10 bg-[#0d1016] hover:border-white/20"
                    }`}
                  >
                    <div>
                      <p className="font-medium">{addOn.name}</p>
                      <p className="mt-1 text-sm text-white/50">Optional enhancement</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-[#d4af37]">+${addOn.price}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-3xl border border-[#d4af37]/20 bg-gradient-to-b from-[#11151d] to-[#090b10] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-8">
            <p className="text-sm uppercase tracking-[0.25em] text-[#d4af37]/80">
              Booking Summary
            </p>
            <h2 className="mt-2 text-2xl font-semibold">Your selection</h2>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Package</p>
                <p className="mt-2 text-lg font-semibold">{activePackage?.name}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Vehicle Size</p>
                <p className="mt-2 text-lg font-semibold">
                  {vehicleSizes.find((item) => item.id === selectedSize)?.name}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-white/40">Add-Ons</p>

                {selectedAddOns.length === 0 ? (
                  <p className="mt-2 text-sm text-white/55">No add-ons selected</p>
                ) : (
                  <div className="mt-3 space-y-2">
                    {selectedAddOns.map((id) => {
                      const addOn = addOns.find((item) => item.id === id);
                      if (!addOn) return null;

                      return (
                        <div key={id} className="flex items-center justify-between text-sm">
                          <span className="text-white/75">{addOn.name}</span>
                          <span className="font-medium text-[#d4af37]">+${addOn.price}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 p-5">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Base package</span>
                <span>${basePrice}</span>
              </div>
              <div className="mt-2 flex items-center justify-between text-sm text-white/70">
                <span>Add-ons</span>
                <span>${addOnTotal}</span>
              </div>
              <div className="my-4 h-px bg-white/10" />
              <div className="flex items-end justify-between">
                <span className="text-base font-medium text-white/85">Estimated total</span>
                <span className="text-3xl font-semibold text-[#d4af37]">${total}</span>
              </div>
              <p className="mt-3 text-xs leading-5 text-white/50">
                Final price may vary depending on vehicle condition, level of contamination,
                staining, pet hair, or specialty requests.
              </p>
            </div>

            <a
              href="https://calendly.com/YOUR-LINK-HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-6 py-3.5 text-sm font-semibold text-black transition hover:opacity-90"
            >
              Continue to Booking
            </a>

            <p className="mt-4 text-center text-xs text-white/45">
              Premium detailing. Transparent selection. Luxury presentation.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
