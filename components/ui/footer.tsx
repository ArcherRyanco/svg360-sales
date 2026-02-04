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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center">
              <Logo />
              <span className="ml-3 text-sm text-indigo-200/65">
                Done-for-you cold email that books calls.
              </span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-indigo-200/65">
              © {new Date().getFullYear()} SVG Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
