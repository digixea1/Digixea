import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bot,
  Zap,
  Globe,
  Cpu,
  CheckCircle2,
  Star,
} from "lucide-react";
import { SERVICES } from "../constants";

const FAQS = [
  {
    question: "What does DIGIXEA specialize in?",
    answer:
      "We design AI-driven automation systems, chatbots, and workflows that streamline operations and accelerate growth.",
  },
  {
    question: "Do you build custom AI solutions?",
    answer:
      "Yes. Every solution is custom-built based on your business processes, data, and growth goals.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Typical deployments range from 2–6 weeks depending on complexity and integrations.",
  },
  {
    question: "Can you integrate with existing tools?",
    answer:
      "Absolutely. We integrate with CRMs, WhatsApp APIs, internal systems, and third-party platforms.",
  },
  {
    question: "Is ongoing support included?",
    answer:
      "Yes. We provide documentation, handover, and optional long-term optimization support.",
  },
];

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* FAQ animation styles */}
      <style jsx>{`
        @keyframes faq-scroll {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .faq-rotator {
          animation: faq-scroll 35s linear infinite;
        }

        .faq-rotator:hover {
          animation-play-state: paused;
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 blur-[120px] rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              Future-Forward AI Agency
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              Automate Everything. <br />
              <span className="gradient-text">Scale Faster.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl">
              We help businesses streamline operations with intelligent
              automation, custom AI bots & full-stack digital solutions.
              Transform digitally with DIGIXEA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/book-demo"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform group"
              >
                Request a Demo
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="bg-white/5 border border-white/10 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center transition-all"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Visual Element (Optional visual flair) */}
        {/* <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[45%] opacity-20 hover:opacity-40 transition-opacity"> */}
        <div className="hidden lg:block absolute right-[2%] xl:right-[6%] top-1/2 -translate-y-1/2">
          {/* Glow */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-cyan-500/30 to-purple-600/30 blur-3xl"></div>
          <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] xl:w-[520px] xl:h-[520px] rounded-full overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md shadow-2xl">
            <video
              src="/assets/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Services Preview */}
      <section className="py-24 bg-white/[0.02]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Our Expertise
              </h2>
              <p className="text-gray-400 text-lg">
                Cutting-edge solutions engineered to drive growth and efficiency
                through sophisticated AI and seamless code.
              </p>
            </div>
            <Link
              to="/services"
              className="text-cyan-400 font-bold flex items-center gap-2 hover:gap-3 transition-all mb-2"
            >
              Explore All Services <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="glass-effect p-8 rounded-2xl hover:bg-white/[0.06] transition-all group border border-white/5"
              >
                <div className="mb-6 bg-black p-4 rounded-xl inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="text-sm font-bold flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Proof Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Modern Founders Trust Us
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We deliver results that matter. From startups to enterprises, our
              automation strategies are proven.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Processes Automated", value: "500+" },
              { label: "Client Satisfaction", value: "99%" },
              { label: "Hours Saved Monthly", value: "10k+" },
              { label: "Revenue Generated", value: "$12M+" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Frequently Asked{" "}
                  <span className="gradient-text">Questions</span>
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                  Clear answers to help you understand how DIGIXEA works and
                  what to expect.
                </p>
              </div>

              <div className="relative max-w-3xl mx-auto overflow-hidden h-[260px]">
                <div className="faq-rotator space-y-6">
                  {[...FAQS, ...FAQS].map((faq, index) => (
                    <div
                      key={index}
                      className="glass-effect p-6 rounded-2xl border border-white/10"
                    >
                      <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial Placeholder
          <div className="mt-24 max-w-4xl mx-auto glass-effect p-12 rounded-3xl relative">
            <Star className="absolute top-12 left-12 text-yellow-500/20 w-24 h-24" />
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill="#f59e0b"
                    className="text-yellow-500"
                  />
                ))}
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed italic text-gray-200">
                "DIGIXEA completely transformed our customer service workflow.
                What used to take our team hours is now handled instantly by our
                custom AI agent. The ROI was immediate."
              </p>
              <div className="flex items-center gap-4">
                <img
                  src="https://picsum.photos/seed/person1/100/100"
                  alt="Avatar"
                  className="w-12 h-12 rounded-full border-2 border-cyan-400"
                />
                <div>
                  <h4 className="font-bold">Marcus Sterling</h4>
                  <p className="text-gray-400 text-sm">CTO, Nexus Dynamics</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-24 bg-gradient-to-b from-transparent to-cyan-500/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8">
            Ready to Scale Smarter?
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Stop wasting time on manual processes. Join the ranks of high-growth
            companies leveraging the power of AI.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-black px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-200 transition-colors"
            >
              Get Started Now
            </Link>
            <Link
              to="/portfolio"
              className="glass-effect px-10 py-4 rounded-full text-lg font-bold border border-white/10"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
