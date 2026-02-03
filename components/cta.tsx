import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Cta() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
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
      <div className="max-w6xl mx-auto px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div 
              className="mb-4 inline-flex rounded-full bg-[#bd1e2d]/10 px-4 py-1.5 text-sm font-medium text-[#bd1e2d]"
              data-aos="fade-up"
            >
              Limited Availability — Only 5 Spots/Month
            </div>
            <h2
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffffff,#bd1e2d,#f5f5f5,#bd1e2d,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl"
              data-aos="fade-up"
            >
              Ready to Fill Your Calendar with Qualified Leads?
            </h2>
            <p 
              className="mb-8 text-lg text-gray-300"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              Book a free strategy call. We'll analyze your market, show you our process, and tell you exactly how many leads we can generate for your business.
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay={400}>
                <a
                  className="btn group mb-4 w-full bg-linear-to-t from-[#7b141d] to-[#bd1e2d] bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                  href="https://api.leadconnectorhq.com/widget/booking/TWApZZQDA4nKJZAerNCw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative inline-flex items-center">
                    Book Strategy Call
                    <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </a>
              </div>
              <div data-aos="fade-up" data-aos-delay={600}>
                <a
                  className="btn relative w-full bg-linear-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                  href="mailto:info@svgdigital.com"
                >
                  Email Us Instead
                </a>
              </div>
            </div>
            <p 
              className="mt-6 text-sm text-gray-500"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              No commitment required. 30-minute call. We'll do the talking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
