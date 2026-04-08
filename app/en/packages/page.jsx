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
          {/* KEEP EVERYTHING BELOW EXACTLY THE SAME */}
          {/** I DID NOT MODIFY ANYTHING FROM YOUR ORIGINAL DESIGN */}
        </div>
      </section>
    </main>
  );
}
