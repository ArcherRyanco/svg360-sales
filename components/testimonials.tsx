"use client";

const testimonials = [
  {
    name: "Marcus R.",
    role: "CEO, TechScale Solutions",
    content: "SVG360 booked us 47 qualified calls in our first month. We closed 12 of them. The ROI has been insane — easily 10X what we paid.",
    metric: "47 calls/month",
  },
  {
    name: "Jennifer L.",
    role: "Founder, Growth Advisory",
    content: "I was skeptical about cold email, but their deliverability is next level. Our open rates are 68% and replies are actually from decision-makers.",
    metric: "68% open rate",
  },
  {
    name: "David K.",
    role: "VP Sales, FinanceHub",
    content: "We tried building this in-house for 6 months. SVG360 got us better results in week 2 than we achieved in half a year. Should have started here.",
    metric: "$180K pipeline",
  },
  {
    name: "Sarah M.",
    role: "Owner, Digital Consulting Co",
    content: "The done-for-you booking is the real magic. I just show up to calls with qualified prospects. Haven't had to chase a lead in months.",
    metric: "Zero follow-up",
  },
];

export default function Testimonials() {
  return (
    <section id="results">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,rgba(189,30,45,0.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-[#bd1e2d]/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-[#bd1e2d]/50">
              <span className="inline-flex bg-linear-to-r from-[#bd1e2d] to-[#f5f5f5] bg-clip-text text-transparent">
                Results That Speak
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,#ffffff,#bd1e2d,#f5f5f5,#bd1e2d,#ffffff)] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Trusted by Growth-Focused Teams
            </h2>
            <p className="text-lg text-gray-300">
              Don't take our word for it — hear from businesses that have transformed their outbound with SVG360.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-6 backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Metric badge */}
                <div className="mb-4 inline-flex rounded-full bg-[#bd1e2d]/10 px-3 py-1 text-sm font-medium text-[#bd1e2d]">
                  {testimonial.metric}
                </div>
                
                {/* Quote */}
                <p className="mb-6 text-gray-400">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#bd1e2d]/20 text-lg text-[#bd1e2d]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-200">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div 
            className="mt-12 grid grid-cols-2 gap-4 rounded-2xl bg-gradient-to-r from-[#bd1e2d]/10 to-[#7b141d]/10 p-8 md:grid-cols-4"
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#bd1e2d]">500+</div>
              <div className="text-sm text-gray-400">Campaigns Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#bd1e2d]">2.5M+</div>
              <div className="text-sm text-gray-400">Emails Sent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#bd1e2d]">25K+</div>
              <div className="text-sm text-gray-400">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#bd1e2d]">98%</div>
              <div className="text-sm text-gray-400">Client Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
