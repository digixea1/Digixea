import React from "react";
import { Target, Lightbulb, Shield, Cpu, Users, Award } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Pioneering the <br />{" "}
            <span className="gradient-text">Automation Era</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            At DIGIXEA, we don't just build software. We engineer intelligent
            systems that liberate human potential and drive exponential growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          <div className="glass-effect p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
            <Target className="text-cyan-400 mb-6 w-12 h-12" />
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To democratize advanced AI automation for businesses of all sizes,
              turning complex technology into simple, scalable, and profitable
              solutions. We believe every repetitive task is a missed
              opportunity for innovation.
            </p>
          </div>
          <div className="glass-effect p-12 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent">
            <Lightbulb className="text-purple-500 mb-6 w-12 h-12" />
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              To become the global cornerstone of AI-first digital
              transformation, where technology serves as a seamless extension of
              human strategy, not a bottleneck for it.
            </p>
          </div>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          What Makes Us Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            {
              icon: <Cpu className="text-cyan-400" />,
              title: "AI-First Approach",
              desc: "We don't tack on AI. We build from the ground up with intelligence at the core.",
            },
            {
              icon: <Award className="text-purple-500" />,
              title: "Workflow Experts",
              desc: "Deep mastery of n8n, Make, and custom coding to bridge any data gap.",
            },
            {
              icon: <Shield className="text-emerald-400" />,
              title: "Enterprise Reliable",
              desc: "Security and stability are non-negotiable. We build for long-term scale.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center p-8">
              <div className="inline-block p-4 bg-white/5 rounded-2xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-effect p-12 rounded-[3rem] border border-white/10 text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 -z-10 blur-3xl rounded-full"></div>
          <h2 className="text-3xl font-bold mb-8">
            Ready to meet the experts?
          </h2>
          <p className="text-gray-400 mb-10">
            Email us at{" "}
            <a
              href="mailto:digixea1@gmail.com"
              className="text-white font-bold hover:text-cyan-400 transition-colors"
            >
              digixea1@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
              <img
                src="/assets/chatbot.jpg"
                className="w-full h-full rounded-full object-cover"
                alt="Chatbot"
              />
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
              <img
                src="/assets/logo2.avif"
                className="w-full h-full rounded-full object-cover"
                alt="Team member"
              />
            </div>
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-purple-600 p-0.5">
              <img
                src="/assets/logo4.jpeg"
                className="w-full h-full rounded-full object-cover"
                alt="Team member"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
