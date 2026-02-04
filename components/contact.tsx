import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";

export default function Contact() {
  return (
    <section id="email-us" className="relative overflow-hidden py-12 md:py-20">
      <div
        className="pointer-events-none absolute top-0 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none opacity-50"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 md:p-12 border border-gray-700/50">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">
            
            {/* Left side - Text content */}
            <div className="lg:w-1/2 lg:pr-8">
              <div 
                className="mb-4 inline-flex rounded-full bg-[#bd1e2d]/10 px-4 py-1.5 text-sm font-medium text-[#bd1e2d]"
                data-aos="fade-up"
              >
                Prefer Email?
              </div>
              <h2
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffffff,#bd1e2d,#f5f5f5,#bd1e2d,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-2xl font-semibold text-transparent md:text-3xl"
                data-aos="fade-up"
              >
                Send Us a Message
              </h2>
              <p 
                className="mb-6 text-gray-400"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                Not ready for a call? No problem. Drop us a message and we'll get back to you within 24 hours with a personalized response.
              </p>
              
              <ul className="space-y-4 text-gray-400" data-aos="fade-up" data-aos-delay={200}>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#bd1e2d] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quick response within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#bd1e2d] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No obligation or sales pressure</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#bd1e2d] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Get a custom strategy outline</span>
                </li>
              </ul>
            </div>

            {/* Right side - Form */}
            <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay={300}>
              <div className="rounded-xl bg-gray-900/80 p-2 border border-gray-700/30">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/fkkuaqH4QoNBLWdtsMFM"
                  style={{ width: '100%', height: '500px', border: 'none', borderRadius: '8px' }}
                  id="inline-fkkuaqH4QoNBLWdtsMFM"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Ignite360 Contact Form"
                  data-height="500"
                  data-layout-iframe-id="inline-fkkuaqH4QoNBLWdtsMFM"
                  data-form-id="fkkuaqH4QoNBLWdtsMFM"
                  title="Ignite360 Contact Form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* GHL Form Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </section>
  );
}
