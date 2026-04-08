"use client";

export default function ContactPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="relative h-[60vh] min-h-[420px] w-full">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-gray-400">CONTACT</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Get In Touch
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-20">

        {/* INTRO */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-400 leading-relaxed text-lg">
            Whether you're ready to book a premium detailing service or simply have a question,
            we offer multiple ways to connect with us. Reach out directly or through social platforms.
          </p>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT */}
          <div className="rounded-2xl p-10 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Direct Contact</h2>

            <div className="space-y-6 text-gray-300">
              <div>
                <p className="text-xs text-gray-500 uppercase">Phone</p>
                <p className="text-lg mt-1">YOUR PHONE NUMBER</p>
              </div>

              <div>
                <p className="text-xs text-gray-500 uppercase">Email</p>
                <p className="text-lg mt-1">YOUR EMAIL</p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="rounded-2xl p-10 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800">
            <h2 className="text-xl font-semibold mb-6">Social Platforms</h2>

            <div className="space-y-5 text-gray-300">

              {["Facebook", "Instagram", "TikTok"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex justify-between items-center border-b border-zinc-800 pb-3 hover:text-white transition"
                >
                  <span>{item}</span>
                  <span className="text-gray-500">→</span>
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="max-w-2xl mx-auto bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10">

          <h2 className="text-2xl font-semibold mb-6 text-center">
            Request a Service
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-white outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-white outline-none"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your vehicle & needs..."
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-white outline-none"
            />

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
            >
              Submit Request
            </button>

          </form>
        </div>

        {/* MAP */}
        <div className="space-y-6">

          <div className="text-center">
            <p className="text-xs tracking-[0.3em] text-gray-500">
              SERVICE AREA
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              Montreal & Surroundings
            </h2>
            <p className="text-gray-400 mt-2">
              We proudly serve Montreal, the South Shore, and the North Shore.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://maps.google.com/maps?q=Montreal,Longueuil,Laval&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
