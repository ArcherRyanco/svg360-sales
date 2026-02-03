import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Features() {
  return (
    <section id="features" className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,rgba(189,30,45,0.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#bd1e2d]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#bd1e2d]/50">
              <span className="inline-flex bg-linear-to-r from-[#bd1e2d] to-[#f5f5f5] bg-clip-text text-transparent">
                Why SVG360
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffffff,#bd1e2d,#f5f5f5,#bd1e2d,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Everything You Need to Scale Outbound
            </h2>
            <p className="text-lg text-gray-300">
              Stop spending hours on manual prospecting. Our system handles everything from list building to appointment setting — so you can focus on closing deals.
            </p>
          </div>

          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd1e2d]/20">
                <svg className="fill-[#bd1e2d]" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Verified Lead Lists
              </h3>
              <p className="text-gray-400">
                We build hyper-targeted prospect lists with verified emails. No bounces, no wasted sends — just real decision-makers in your ideal customer profile.
              </p>
            </article>
            
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd1e2d]/20">
                <svg className="fill-[#bd1e2d]" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Inbox-Ready Infrastructure
              </h3>
              <p className="text-gray-400">
                Dedicated domains, warmed mailboxes, and deliverability monitoring. Your emails land in primary inboxes, not spam folders.
              </p>
            </article>
            
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd1e2d]/20">
                <svg className="fill-[#bd1e2d]" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
                </svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                AI-Powered Personalization
              </h3>
              <p className="text-gray-400">
                Every email feels hand-written. Our AI personalizes at scale based on prospect data, increasing reply rates by 3X compared to generic templates.
              </p>
            </article>
            
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd1e2d]/20">
                <svg className="fill-[#bd1e2d]" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Done-For-You Booking
              </h3>
              <p className="text-gray-400">
                When prospects respond, we handle the back-and-forth and book qualified calls directly on your calendar. No chasing required.
              </p>
            </article>
            
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#bd1e2d]/20">
                <svg className="fill-[#bd1e2d]" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path d="M13 2.05v3.03c3.39.49 6 3.39 6 6.92 0 .9-.18 1.75-.48 2.54l2.6 1.53c.56-1.24.88-2.62.88-4.07 0-5.18-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7 0-3.53 2.61-6.43 6-6.92V2.05c-5.06.5-9 4.76-9 9.95 0 5.52 4.47 10 9.99 10 3.31 0 6.24-1.61 8.06-4.09l-2.6-1.53C16.17 17.98 14.21 19 12 19z"/>
                </svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Real-Time Analytics
              </h3>
              <p className="text-gray-400">
                Track opens, clicks, replies, and booked calls in one dashboard. Know exactly what's working and optimize campaigns on the fly.
              </p>
            </article>
            
            <article>
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20">
                <svg className="fill-green-500" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Compliance & Best Practices
              </h3>
              <p className="text-gray-400">
                CAN-SPAM compliant, GDPR-ready, and following all cold email best practices. Professional outreach that protects your brand reputation.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
