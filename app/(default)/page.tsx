export const metadata = {
  title: "SVG360 - Done-For-You Cold Email That Books Calls",
  description: "Turn cold leads into booked calls on autopilot. SVG360 handles targeting, outreach, and appointment setting so you can focus on closing deals.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Workflows />
      <Features />
      <Testimonials />
      <Cta />
      <Contact />
    </>
  );
}
