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
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            
            {/* Left side - Logo and tagline */}
            <div className="flex flex-col items-start">
              <Logo />
              <p className="mt-4 text-sm text-indigo-200/65 max-w-xs">
                Done-for-you cold email that books qualified calls on autopilot.
              </p>
            </div>

            {/* Right side - Contact / Email Us */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-200">Get In Touch</h3>
              {/* 
                TODO: Replace with lead embed form
                Example: HubSpot, GHL, or custom form embed
              */}
              <div className="text-sm text-indigo-200/65">
                <a 
                  href="mailto:hello@svgdigital.com" 
                  className="transition hover:text-indigo-500"
                >
                  hello@svgdigital.com
                </a>
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
    </footer>
  );
}
