export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <div 
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#bd1e2d]/10 px-4 py-1.5 text-sm text-[#f5f5f5]"
              data-aos="fade-up"
            >
              <span className="h-2 w-2 rounded-full bg-[#bd1e2d] animate-pulse"></span>
              Now Accepting New Clients
            </div>
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffffff,#bd1e2d,#f5f5f5,#bd1e2d,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Turn Cold Leads Into Booked Calls — On Autopilot
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-gray-300"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                SVG360 is a done-for-you cold email system that fills your calendar with qualified prospects. No more chasing leads — let them come to you.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-linear-to-t from-[#7b141d] to-[#bd1e2d] bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#pricing"
                  >
                    <span className="relative inline-flex items-center">
                      See How It Works
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        →
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="#contact"
                  >
                    Book a Strategy Call
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 border-t border-[#bd1e2d]/30 pt-10 text-center"
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <div>
              <div className="text-3xl font-bold text-[#bd1e2d]">500+</div>
              <div className="text-sm text-gray-400">Campaigns Launched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#bd1e2d]">25K+</div>
              <div className="text-sm text-gray-400">Leads Generated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#bd1e2d]">3.2X</div>
              <div className="text-sm text-gray-400">Avg ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
