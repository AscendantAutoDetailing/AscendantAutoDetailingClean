"use client";

export default function PackagesPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid md:grid-cols-2 border border-[#2a2a2a] rounded-3xl overflow-hidden">

          {/* LEFT */}
          <div className="p-12">
            <p className="text-xs tracking-[0.3em] text-[#d4af37]">PRICING</p>

            <h1 className="text-5xl font-semibold mt-4">
              Services & Pricing
            </h1>

            <p className="text-white/60 mt-6 max-w-md">
              Premium detailing packages designed for every level of care — from regular maintenance to full interior and exterior transformation.
            </p>

            <div className="flex gap-3 mt-6 flex-wrap">
              <span className="border border-white/10 px-4 py-2 rounded-full text-sm">Premium Finish</span>
              <span className="border border-white/10 px-4 py-2 rounded-full text-sm">Luxury Care</span>
              <span className="border border-white/10 px-4 py-2 rounded-full text-sm">Interior & Exterior</span>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1600&q=80"
              className="w-full h-full object-cover brightness-50"
            />
          </div>

        </div>
      </section>

      {/* PACKAGES */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">

        {/* CARE */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-semibold">Ascendant Care</h2>
          <p className="text-[#d4af37] mt-1">Refined Maintenance</p>

          <p className="text-white/60 mt-4 text-sm">
            Ideal for clients who want to keep their vehicle consistently clean, fresh, and well-presented.
          </p>

          <div className="border border-white/10 rounded-xl mt-6 p-4">
            <p className="text-xs text-white/40 tracking-widest">STARTING AT</p>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between"><span>Sedan</span><span className="text-[#d4af37]">$174.99</span></div>
              <div className="flex justify-between"><span>SUV</span><span className="text-[#d4af37]">$209.99</span></div>
              <div className="flex justify-between"><span>Large SUV / Truck</span><span className="text-[#d4af37]">$249.99</span></div>
            </div>
            <p className="text-white/40 text-sm mt-4">Approx. 2 Hours</p>
          </div>
        </div>

        {/* ELITE */}
        <div className="bg-[#1a1205] border border-[#d4af37] rounded-3xl p-8 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
          <span className="text-xs border border-[#d4af37] px-3 py-1 rounded-full text-[#d4af37]">
            MOST REQUESTED
          </span>

          <h2 className="text-xl font-semibold mt-4">Ascendant Elite</h2>
          <p className="text-[#d4af37] mt-1">Interior & Exterior Enhancement</p>

          <p className="text-white/60 mt-4 text-sm">
            Perfect for clients looking for a more complete detail with deeper cleaning and protection.
          </p>

          <div className="border border-[#d4af37]/30 rounded-xl mt-6 p-4">
            <p className="text-xs text-white/40 tracking-widest">STARTING AT</p>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between"><span>Sedan</span><span className="text-[#d4af37]">$274.99</span></div>
              <div className="flex justify-between"><span>SUV</span><span className="text-[#d4af37]">$309.99</span></div>
              <div className="flex justify-between"><span>Large SUV / Truck</span><span className="text-[#d4af37]">$349.99</span></div>
            </div>
            <p className="text-white/40 text-sm mt-4">Approx. 4 Hours</p>
          </div>
        </div>

        {/* SIGNATURE */}
        <div className="bg-[#0b0b0b] border border-white/10 rounded-3xl p-8">
          <h2 className="text-xl font-semibold">Ascendant Signature</h2>
          <p className="text-[#d4af37] mt-1">Complete Transformation</p>

          <p className="text-white/60 mt-4 text-sm">
            Our most comprehensive package for vehicles that need full restoration-level attention.
          </p>

          <div className="border border-white/10 rounded-xl mt-6 p-4">
            <p className="text-xs text-white/40 tracking-widest">STARTING AT</p>
            <div className="mt-3 space-y-2">
              <div className="flex justify-between"><span>Sedan</span><span className="text-[#d4af37]">$374.99</span></div>
              <div className="flex justify-between"><span>SUV</span><span className="text-[#d4af37]">$409.99</span></div>
              <div className="flex justify-between"><span>Large SUV / Truck</span><span className="text-[#d4af37]">$449.99</span></div>
            </div>
            <p className="text-white/40 text-sm mt-4">Approx. 6 Hours</p>
          </div>
        </div>

      </section>

      {/* ENHANCEMENTS */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="border border-white/10 rounded-3xl p-10 bg-[#0b0b0b]">

          <p className="text-xs tracking-[0.3em] text-[#d4af37]">ADDITIONAL SERVICES</p>

          <h2 className="text-3xl mt-4 font-semibold">Popular Enhancements</h2>

          <p className="text-white/60 mt-4">
            Optional services recommended during inspection based on your vehicle’s condition.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Interior & Condition</h3>
              <p className="text-white/60 text-sm">Pet Hair Removal — $75 / $125+</p>
              <p className="text-white/60 text-sm">Targeted Stain Removal — $80–$150+</p>
              <p className="text-white/60 text-sm">Ozone Odor Treatment — $150</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Protection & Longevity</h3>
              <p className="text-white/60 text-sm">Interior Fabric Protection — $120–$180</p>
              <p className="text-white/60 text-sm">Leather Protection Treatment — $150–$250</p>
              <p className="text-white/60 text-sm">Windshield Coating — $80–$120</p>
              <p className="text-white/60 text-sm">Wheel Coating — $150–$275</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-6">
              <h3 className="font-semibold mb-4">Specialized Services</h3>
              <p className="text-white/60 text-sm">Engine Bay Detail — $80–$120</p>
              <p className="text-white/60 text-sm">Iron Decontamination — $50–$80</p>
              <p className="text-white/60 text-sm">Undercarriage Flush — $60–$100</p>
              <p className="text-white/60 text-sm">Paint Correction — $800–$1,500</p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER NOTE */}
      <section className="max-w-7xl mx-auto px-6 mt-10 pb-20">
        <div className="border border-[#d4af37]/40 bg-[#1a1205] rounded-2xl p-6">
          <p>
            A <span className="text-[#d4af37] font-semibold">$50 retainer fee</span> is required to secure your appointment.
          </p>
          <p className="text-white/50 text-sm mt-2">
            Starting prices assume average vehicle condition.
          </p>
        </div>
      </section>

    </main>
  );
}
