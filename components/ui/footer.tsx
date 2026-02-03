import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        
        <div className="py-8 md:py-12">
          {/* Main footer content */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            
            {/* Left side - Logo and tagline */}
            <div className="flex flex-col items-start lg:max-w-xs">
              <Logo />
              <p className="mt-4 text-sm text-indigo-200/65">
                Done-for-you cold email that books qualified calls on autopilot.
              </p>
            </div>

            {/* Right side - Contact Form */}
            <div className="lg:w-[400px]">
              <h3 className="text-sm font-medium text-gray-200 mb-3">Get In Touch</h3>
              <div className="rounded-lg overflow-hidden" style={{ height: '400px' }}>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/fkkuaqH4QoNBLWdtsMFM"
                  style={{ width: '100%', height: '100%', border: 'none', borderRadius: '4px' }}
                  id="inline-fkkuaqH4QoNBLWdtsMFM"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Ignite360 Contact Form"
                  data-height="400"
                  data-layout-iframe-id="inline-fkkuaqH4QoNBLWdtsMFM"
                  data-form-id="fkkuaqH4QoNBLWdtsMFM"
                  title="Ignite360 Contact Form"
                />
              </div>
            </div>
          </div>

          {/* Bottom bar - Copyright */}
          <div className="mt-8 pt-6 border-t border-gray-800">
            <p className="text-sm text-indigo-200/65 text-center md:text-left">
              © {new Date().getFullYear()} SVG Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      {/* GHL Form Script */}
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </footer>
  );
}
