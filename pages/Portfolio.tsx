import React from "react";
import { PROJECTS } from "../constants";
import { ExternalLink } from "lucide-react";

const Portfolio: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Our <span className="gradient-text">Impact</span>
          </h1>
          <p className="text-xl text-gray-400">
            Real outcomes for world-class teams. Explore our latest
            implementations of AI, automation, and digital products.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-3xl glass-effect border border-white/5 flex flex-col h-full"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-8">
                  <p className="text-center text-white text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      {project.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">
                      {project.client}
                    </p>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>

                {/* Metrics */}
                <div className="mt-auto grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-2xl font-black text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {PROJECTS.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl italic">
              No projects available yet. Stay tuned!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
