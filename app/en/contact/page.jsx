"use client";

export default function ContactPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="relative h-[450px] w-full">
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury detailing"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-sm tracking-[0.4em] text-gray-400">CONTACT</p>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold">
              Get In Touch
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 space-y-24">

        {/* INTRO */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-400 leading-relaxed text-lg">
            Whether you're ready to book a premium detailing service or have a question,
            we’re here to help. Contact us directly or connect through our social platforms.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* DIRECT */}
          <div className="rounded-2xl p-10 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 hover:border-yellow-400 transition">
            <h2 className="text-2xl font-semibold mb-8 text-yellow-400">
              Direct Contact
            </h2>

            <div className="space-y-6">

              <div>
                <p className="text-sm text-gray-500">PHONE</p>
                <p className="text-lg mt-1">YOUR PHONE NUMBER</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">EMAIL</p>
                <p className="text-lg mt-1">ascendantautodetailing@gmail.com</p>
              </div>

            </div>
          </div>

          {/* SOCIAL */}
          <div className="rounded-2xl p-10 bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 hover:border-yellow-400 transition">
            <h2 className="text-2xl font-semibold mb-8 text-yellow-400">
              Social Platforms
            </h2>

            <div className="space-y-5">

              {["Facebook", "Instagram", "TikTok"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex justify-between items-center border-b border-zinc-800 pb-3 hover:text-yellow-400 transition"
                >
                  <span>{item}</span>
                  <span>→</span>
                </a>
              ))}

            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="max-w-3xl mx-auto bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 rounded-2xl p-10">

          <h2 className="text-3xl font-semibold mb-8 text-center">
            Request a Service
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-zinc-700 rounded-lg px-5 py-3 focus:border-yellow-400 outline-none transition"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-zinc-700 rounded-lg px-5 py-3 focus:border-yellow-400 outline-none transition"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your vehicle & needs..."
              className="w-full bg-black border border-zinc-700 rounded-lg px-5 py-3 focus:border-yellow-400 outline-none transition"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Submit Request
            </button>

          </form>
        </div>

        {/* MAP */}
        <div className="space-y-8">

          <div className="text-center">
            <p className="text-sm tracking-[0.3em] text-gray-500">
              SERVICE AREA
            </p>
            <h2 className="text-3xl font-semibold mt-2">
              Montreal & Surroundings
            </h2>
            <p className="text-gray-400 mt-2">
              Serving Montreal, South Shore, and North Shore.
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
