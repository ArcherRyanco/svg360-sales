import Spotlight from "@/components/spotlight";

export default function Workflows() {
  return (
    <section id="how-it-works">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#bd1e2d]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#bd1e2d]/50">
              <span className="inline-flex bg-linear-to-r from-[#bd1e2d] to-[#f5f5f5] bg-clip-text text-transparent">
                How It Works
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffffff,#bd1e2d,#f5f5f5,#bd1e2d,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              From Cold List to Booked Calls in 3 Steps
            </h2>
            <p className="text-lg text-gray-300">
              We handle the entire outreach process — from building targeted lists to booking qualified calls on your calendar. You focus on closing.
            </p>
          </div>
          {/* Spotlight items */}
          <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {/* Card 1 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#bd1e2d]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#bd1e2d] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Step number */}
                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#bd1e2d] text-lg font-bold text-white">
                  1
                </div>
                {/* Content */}
                <div className="p-6 pt-20">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-[#bd1e2d] to-[#f5f5f5] bg-clip-text text-transparent">
                        Targeting & Setup
                      </span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">We Build Your Hit List</h3>
                  <p className="text-gray-400">
                    We identify your ideal customer profile, build a targeted prospect list, and set up dedicated email infrastructure that lands in inboxes — not spam.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-[#bd1e2d]/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-[#bd1e2d] after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Step number */}
                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#bd1e2d] text-lg font-bold text-white">
                  2
                </div>
                {/* Content */}
                <div className="p-6 pt-20">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-[#bd1e2d] to-[#f5f5f5] bg-clip-text text-transparent">
                        Automated Outreach
                      </span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personalized Campaigns Run 24/7</h3>
                  <p className="text-gray-400">
                    Our AI-powered sequences send personalized emails at scale. Smart follow-ups, A/B testing, and deliverability monitoring happen automatically.
                  </p>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div
              className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-green-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-green-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 group-hover:before:opacity-100"
            >
              <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                {/* Step number */}
                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">
                  3
                </div>
                {/* Content */}
                <div className="p-6 pt-20">
                  <div className="mb-3">
                    <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,--theme(--color-gray-700/.15),--theme(--color-gray-700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
                      <span className="bg-linear-to-r from-green-500 to-green-200 bg-clip-text text-transparent">
                        Booked Calls
                      </span>
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Qualified Leads Hit Your Calendar</h3>
                  <p className="text-gray-400">
                    When prospects respond, we qualify them and book calls directly on your calendar. You show up, pitch, and close — that's it.
                  </p>
                </div>
              </div>
            </div>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
