import React from "react";
import {
  Bot,
  Workflow,
  Code,
  Smartphone,
  Zap,
  MessageSquare,
  Repeat,
  Settings,
  Share2,
} from "lucide-react";
import { Service, Project, NavItem } from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export const SERVICES: Service[] = [
  {
    id: "ai-chatbot",
    title: "Custom AI Chatbot Development",
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
    description:
      "Bespoke AI solutions that talk to your customers and handle support 24/7.",
    benefits: [
      "Reduced response times",
      "24/7 Availability",
      "Seamless CRM integration",
    ],
    category: "AI",
  },
  {
    id: "ai-automation",
    title: "AI Automation Workflows",
    icon: <Workflow className="w-8 h-8 text-purple-400" />,
    description:
      "Transform manual tasks into intelligent, automated processes.",
    benefits: [
      "Operational efficiency",
      "Human error reduction",
      "Scalable operations",
    ],
    category: "AI",
  },
  // {
  //   id: "n8n",
  //   title: "n8n Workflow Automation",
  //   icon: <Settings className="w-8 h-8 text-orange-400" />,
  //   description:
  //     "Flexible, powerful open-source workflow automation for complex logic.",
  //   benefits: [
  //     "Low-code logic",
  //     "Self-hosted options",
  //     "Powerful data processing",
  //   ],
  //   category: "Workflow",
  // },
  // {
  //   id: "make",
  //   title: "Make.com Workflow Automation",
  //   icon: <Repeat className="w-8 h-8 text-blue-500" />,
  //   description: "Visual automation design for thousands of apps.",
  //   benefits: ["Fast deployment", "Visual mapping", "Reliable execution"],
  //   category: "Workflow",
  // },
  {
    id: "web-dev",
    title: "Web Development",
    icon: <Code className="w-8 h-8 text-cyan-500" />,
    description:
      "High-performance, futuristic web applications built for speed.",
    benefits: ["SEO Optimized", "Responsive Design", "Modern Tech Stack"],
    category: "Dev",
  },
  {
    id: "app-dev",
    title: "App Development",
    icon: <Smartphone className="w-8 h-8 text-purple-500" />,
    description:
      "Native and cross-platform mobile experiences for iOS & Android.",
    benefits: ["Intuitive UX", "Offline capability", "Push notifications"],
    category: "Dev",
  },
  // {
  //   id: "zapier",
  //   title: "Zapier Workflow Automation",
  //   icon: <Zap className="w-8 h-8 text-yellow-400" />,
  //   description: "The standard for simple, reliable app connections.",
  //   benefits: [
  //     "6,000+ integrations",
  //     "No-code reliability",
  //     "Easy maintenance",
  //   ],
  //   category: "Workflow",
  // },
  {
    id: "CRM",
    title: "CRM (Customer Relationship Management)",
    icon: <MessageSquare className="w-8 h-8 text-emerald-400" />,

    description:
      "A unified system that captures, organizes, and automates customer data to drive smarter sales and engagement.",
    benefits: [
      "Unified Customer Intelligence",
      "Faster Conversions Through Automationy",
      "Consistent, High-Quality Customer Experience",
    ],
    category: "Workflow",
  },
  {
    id: "whatsapp",
    title: "WhatsApp API Automation",
    icon: <Share2 className="w-8 h-8 text-green-400" />,
    description:
      "AI Voice Agents automate inbound and outbound calls with natural, human-like conversations—handling support, sales, bookings, and follow-ups 24/7.",
    benefits: ["Efficiency", "Scalability", "Availability"],
    category: "Workflow",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "AI Voice Agent",
    client: "24x7 Voice Support",
    category: "Automation",
    link: "https://ai-voice-agent-digixea.netlify.app/",
    metrics: [
      { label: "Efficiency", value: "+95%" },
      { label: "Wait Time", value: "-97%" },
    ],
    description:
      "A real-time, browser-based AI voice agent that lets visitors speak and hear instant AI responses with no login required.",
    imageUrl: "/assets/Ai-auto1.png",
  },
  {
    id: "2",
    title: "Custom Website Devlopment",
    client: "Spooks the kooks",
    category: "Web app",
    link: "https://spooksthekooks.com/",
    metrics: [
      { label: "Users", value: "2M+" },
      { label: "Growth", value: "40% MoM" },
    ],
    description:
      "Modern, fast, and scalable websites built for real-world performance.",
    imageUrl: "/assets/2.png",
  },
  // {
  //   id: "3",
  //   title: "AI Supply Chain",
  //   client: "LogiX",
  //   category: "AI",
  //   metrics: [
  //     { label: "Cost Savings", value: "$200k/yr" },
  //     { label: "Accuracy", value: "99.9%" },
  //   ],
  //   description:
  //     "Custom AI model predicting demand spikes and automating inventory restocking via Make.com.",
  //   imageUrl: "https://picsum.photos/seed/tech3/800/600",
  // },
];
