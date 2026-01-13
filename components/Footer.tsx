import React from "react";
import { Link } from "react-router-dom";
import { Mail, Github, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { NAV_ITEMS } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform bg-black/20">
                <img
                  src="/assets/logo1.png"
                  alt="DIGIXEA Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>

              <span className="text-2xl font-bold tracking-tighter">
                DIGIXEA
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of enterprises through cutting-edge
              AI automation and world-class digital engineering.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/services#ai-chatbots"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Custom AI Chatbot Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ai-automation"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  AI Automation Workflows
                </Link>
              </li>
              <li>
                <Link
                  to="/services#web-development"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#app-development"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services#crm"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  CRM (Customer Relationship Management)
                </Link>
              </li>
              <li>
                <Link
                  to="/services#ai-voice-agents"
                  className="text-gray-400 text-sm hover:text-cyan-400 transition-colors"
                >
                  AI Voice Agents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <div className="flex items-center gap-3 text-gray-400 text-sm mb-4">
              <Mail size={16} className="text-cyan-400" />
              <a
                href="mailto:digixea1@gmail.com"
                className="hover:text-white transition-colors"
              >
                digixea1@gmail.com
              </a>
            </div>
            {/* <div className="mt-8">
              <p className="text-xs text-gray-500 mb-4 uppercase tracking-widest font-bold">
                Join our Newsletter
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm flex-1 focus:outline-none focus:border-cyan-400"
                />
                <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-cyan-600 transition-colors">
                  Join
                </button>
              </div>
            </div> */}
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} DIGIXEA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-of-service"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
