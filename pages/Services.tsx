import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* HEADER */}
        <div className="max-w3xl mb-24">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Our <span className="gradient-text">Specialized</span> Services
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            From intelligent conversational agents to complex automation workflows,
            we engineer scalable AI solutions for modern businesses.
          </p>
        </div>

        {/* SERVICES */}
        <div className="space-y-32">
          {SERVICES.map((service, index) => {
            const isAIAutomation =
              service.title === 'AI Automation Workflows';

            const isAppDev =
              service.title === 'App Development';

            const isWebDev =
              service.title === 'Web Development';

            const isCRM =
              service.title === 'CRM (Customer Relationship Management)';

            const isVoiceAgent =
              service.title === 'WhatsApp API Automation';

            const isChatbot =
              service.title === 'Custom AI Chatbot Development';

            const imageSrc = isAIAutomation
              ? '/assets/AI_Auto.gif'
              : isAppDev
              ? '/assets/App.gif'
              : isWebDev
              ? '/assets/web.gif'
              : isCRM
              ? '/assets/CRM.gif'
              : isVoiceAgent
              ? '/assets/AI_Voice.gif'
              : isChatbot
              ? '/assets/AIBOT.gif'
              : `https://picsum.photos/seed/${service.id}/800/450`;

            const isGif =
              isAIAutomation ||
              isAppDev ||
              isWebDev ||
              isCRM ||
              isVoiceAgent ||
              isChatbot;

           const sectionId =
  service.title === 'Web Development'
    ? 'web-development'
    : service.title === 'App Development'
    ? 'app-development'
    : service.title === 'AI Automation Workflows'
    ? 'ai-automation'
    : service.title === 'CRM (Customer Relationship Management)'
    ? 'crm'
    : service.title === 'Custom AI Chatbot Development'
    ? 'ai-chatbots'
    : service.title === 'WhatsApp API Automation'
    ? 'ai-voice-agents'
    : service.id;

return (
  <div
    id={sectionId}
    key={service.id}
    className={`scroll-mt-32 flex flex-col ${
      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
    } gap-12 md:gap-24 items-center`}
  >

                {/* LEFT CONTENT */}
                <div className="flex-1 w-full">
                  <div className="inline-block p-4 bg-white/5 rounded-2xl mb-8 border border-white/10">
                    {service.icon}
                  </div>

                  {/* TITLE */}
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {isVoiceAgent ? 'AI Voice Agents' : service.title}
                  </h2>

                  <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {service.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-cyan-400 flex-shrink-0"
                        />
                        <span className="text-gray-300">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded-full font-bold hover:bg-white/10 transition-all group"
                  >
                    Enquire Now
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>

                {/* RIGHT VISUAL */}
                <div className="flex-1 w-full relative">
                  <div className="aspect-video rounded-3xl overflow-hidden glass-effect p-2 border border-white/10 backdrop-blur-md">
                    <img
                      src={imageSrc}
                      alt={service.title}
                      className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                        isGif ? '' : 'grayscale hover:grayscale-0'
                      }`}
                    />
                  </div>

                  {/* GLOW */}
                  <div
                    className={`absolute -z-10 w-64 h-64 blur-3xl rounded-full opacity-20 ${
                      index % 2 === 0
                        ? 'bg-cyan-500 -top-10 -right-10'
                        : 'bg-purple-600 -bottom-10 -left-10'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
