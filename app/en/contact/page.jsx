"use client";

export default function ContactPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="relative h-[420px] w-full">
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury detailing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-400">CONTACT</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Get In Touch
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-20 space-y-20">

        {/* INTRO PARAGRAPH */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-300 leading-relaxed text-lg">
            Whether you're ready to book a premium detailing service or simply
            have a question, we offer multiple ways to connect with us. Reach out
            directly by phone or email, or stay connected through our social
            platforms including Facebook, Instagram, and TikTok. Every inquiry is
            handled with the same level of precision and care as our services.
          </p>
        </div>

        {/* CONTACT METHODS */}
        <div className="grid md:grid-cols-2 gap-10">

          <div className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-b from-gray-900 to-black">
            <h2 className="text-2xl font-semibold mb-6">
              Direct Contact
            </h2>

            <div className="space-y-6 text-gray-300">

              <div>
                <p className="text-sm text-gray-500">PHONE</p>
                <p className="text-lg text-white">YOUR PHONE NUMBER</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">EMAIL</p>
                <p className="text-lg text-white">YOUR EMAIL</p>
              </div>

            </div>
          </div>

          <div className="border border-gray-800 rounded-2xl p-8 bg-gradient-to-b from-gray-900 to-black">
            <h2 className="text-2xl font-semibold mb-6">
              Social Platforms
            </h2>

            <div className="space-y-5 text-gray-300">

              <a href="#" className="flex justify-between items-center hover:text-white transition">
                <span>Facebook</span>
                <span className="text-gray-500">→</span>
              </a>

              <a href="#" className="flex justify-between items-center hover:text-white transition">
                <span>Instagram</span>
                <span className="text-gray-500">→</span>
              </a>

              <a href="#" className="flex justify-between items-center hover:text-white transition">
                <span>TikTok</span>
                <span className="text-gray-500">→</span>
              </a>

            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="border border-gray-800 rounded-2xl p-10 bg-gradient-to-b from-gray-900 to-black max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold mb-6 text-center">
            Request a Service
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-white outline-none transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-white outline-none transition"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your vehicle & needs..."
              className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 focus:border-white outline-none transition"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Submit Request
            </button>

          </form>
        </div>

        {/* MAP SECTION */}
        <div className="space-y-6">

          <div className="text-center">
            <p className="text-sm tracking-[0.25em] text-gray-500">
              SERVICE AREA
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              Montreal & Surroundings
            </h2>
            <p className="text-gray-400 mt-2">
              We proudly serve Montreal, the South Shore, and the North Shore.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <iframe
              src="https://maps.google.com/maps?q=Montreal,Longueuil,Laval&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[420px] border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
