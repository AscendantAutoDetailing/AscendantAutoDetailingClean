export default function ServicesPageEn() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-white/10 px-8 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            Ascendant Auto Detailing
          </p>

          <h1 className="mb-6 text-5xl font-semibold md:text-6xl">
            Our Services
          </h1>

          <p className="mx-auto max-w-3xl text-lg leading-8 text-white/70">
            Premium services designed to give your vehicle an impeccable look,
            an elegant finish, and a higher level of care.
          </p>
        </div>
      </section>

      <section className="px-8 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40">
            <img
              src="/service-exterior.jpg.png"
              alt="Premium Exterior Wash"
              className="w-full h-72 object-contain rounded-t-2xl bg-black"
            />
            <div className="p-6">
              <div className="mb-4 h-[2px] w-14 bg-yellow-400" />
              <h2 className="mb-3 text-2xl font-semibold">
                Premium Exterior Wash
              </h2>
              <p className="leading-7 text-white/70">
                Complete cleaning of the body, wheels, and windows to restore exceptional shine to your vehicle.
              </p>
              <a
                href="/en/booking"
                className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40">
            <img
              src="/service-interior.jpg.png"
              alt="Complete Interior Cleaning"
              className="w-full h-72 object-contain rounded-t-2xl bg-black"
            />
            <div className="p-6">
              <div className="mb-4 h-[2px] w-14 bg-yellow-400" />
              <h2 className="mb-3 text-2xl font-semibold">
                Complete Interior Cleaning
              </h2>
              <p className="leading-7 text-white/70">
                Vacuuming, surface cleaning, and material treatment for a clean, refined, and refreshed interior.
              </p>
              <a
                href="/en/booking"
                className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40">
            <img
              src="/service-full.jpg.png"
              alt="Full Detailing"
              className="w-full h-72 object-contain rounded-t-2xl bg-black"
            />
            <div className="p-6">
              <div className="mb-4 h-[2px] w-14 bg-yellow-400" />
              <h2 className="mb-3 text-2xl font-semibold">
                Full Detailing
              </h2>
              <p className="leading-7 text-white/70">
                Complete interior and exterior service to restore the overall appearance of your vehicle with a premium finish.
              </p>
              <a
                href="/en/booking"
                className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40">
            <img
              src="/service-ceramic.jpg.png"
              alt="Paint Protection"
              className="w-full h-72 object-contain rounded-t-2xl bg-black"
            />
            <div className="p-6">
              <div className="mb-4 h-[2px] w-14 bg-yellow-400" />
              <h2 className="mb-3 text-2xl font-semibold">
                Paint Protection
              </h2>
              <p className="leading-7 text-white/70">
                High-end protection to preserve shine, improve finish, and protect your paint.
              </p>
              <a
                href="/en/booking"
                className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40">
            <img
              src="/service-engine.jpg"
              alt="Engine Cleaning"
              className="w-full h-72 object-contain rounded-t-2xl bg-black"
            />
            <div className="p-6">
              <div className="mb-4 h-[2px] w-14 bg-yellow-400" />
              <h2 className="mb-3 text-2xl font-semibold">
                Engine Cleaning
              </h2>
              <p className="leading-7 text-white/70">
                Careful engine bay cleaning for a clean, polished, and professional result.
              </p>
              <a
                href="/en/booking"
                className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl transition hover:-translate-y-1 hover:border-yellow-400/40">
            <img
              src="/service-headlight.jpg"
              alt="Headlight Restoration"
              className="w-full h-72 object-contain rounded-t-2xl bg-black"
            />
            <div className="p-6">
              <div className="mb-4 h-[2px] w-14 bg-yellow-400" />
              <h2 className="mb-3 text-2xl font-semibold">
                Headlight Restoration
              </h2>
              <p className="leading-7 text-white/70">
                Restoration of cloudy headlights to improve your vehicle’s appearance and nighttime visibility.
              </p>
              <a
                href="/en/booking"
                className="mt-6 inline-block rounded-full border border-yellow-400/40 px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
              >
                Book Now
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="px-8 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-yellow-400">
            More Options
          </p>

          <h3 className="text-3xl font-semibold md:text-4xl">
            We offer many more services on request
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/70">
            In addition to these main services, we offer other options tailored
            to your needs and your vehicle. Contact us to learn more about our
            additional services and custom solutions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/en/booking"
              className="rounded-full bg-yellow-400 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:scale-105"
            >
              Book Now
            </a>

            <a
              href="/en/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
