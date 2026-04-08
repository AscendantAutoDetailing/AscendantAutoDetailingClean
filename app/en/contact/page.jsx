"use client";

export default function ContactPage() {
  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <div className="relative h-[60vh] min-h-[400px] max-h-[600px] w-full">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80"
          alt="Luxury car"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-4">
          <div>
            <p className="text-sm tracking-[0.4em] text-gray-400">CONTACT</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-semibold">
              Contact Us
            </h1>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">

        {/* INTRO */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-gray-400 text-lg leading-relaxed">
            Whether you're ready to book a premium detailing service or have a question,
            our team is here to assist you. Reach out through any of the methods below
            and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* CONTACT + SOCIAL */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* CONTACT INFO */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
              Contact Information
            </h2>

            <div className="space-y-5 text-gray-300">
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-lg">[Your Phone Number]</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg">[Your Email]</p>
              </div>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
              Social Media
            </h2>

            <div className="space-y-4">
              <a href="#" className="block hover:text-yellow-400 transition">Facebook</a>
              <a href="#" className="block hover:text-yellow-400 transition">Instagram</a>
              <a href="#" className="block hover:text-yellow-400 transition">TikTok</a>
            </div>
          </div>

        </div>

        {/* FORM */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Request a Service
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your vehicle and the service you need..."
              className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:border-yellow-400 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
            >
              Send Request
            </button>

          </form>
        </div>

        {/* MAP */}
        <div className="space-y-6">

          <div className="text-center">
            <h2 className="text-2xl font-semibold">
              We are serving Montreal, the South Shore, the North Shore
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://maps.google.com/maps?q=Montreal,Longueuil,Laval&t=&z=10&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[400px]"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
