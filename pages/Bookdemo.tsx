// import React, { useEffect } from "react";

// const BookDemo: React.FC = () => {
//   useEffect(() => {
//     // Load Calendly script safely
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className="pt-32 pb-24">
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Header */}
//         <div className="max-w-4xl mx-auto text-center mb-16">
//           <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
//             Book a <span className="gradient-text">Demo</span>
//           </h1>
//           <p className="text-xl text-gray-400 leading-relaxed">
//             Schedule a 1-on-1 strategy call with DIGIXEA experts and see how AI
//             automation, chatbots, and workflows can scale your business.
//           </p>
//         </div>

//         {/* Calendly Embed */}
//         <div className="max-w-6xl mx-auto">
//           <div className="glass-effect border border-white/10 rounded-3xl p-4 md:p-8">
//             <div
//               className="calendly-inline-widget"
//               data-url="https://calendly.com/digixea1/30min"
//               style={{ minWidth: "320px", height: "720px" }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookDemo;

// import React, { useEffect } from "react";

// const BookDemo: React.FC = () => {
//   useEffect(() => {
//     // Load Calendly script safely
//     const script = document.createElement("script");
//     script.src = "https://assets.calendly.com/assets/external/widget.js";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <style jsx>{`
//         @keyframes gradient {
//           0%,
//           100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 4s ease infinite;
//         }

//         .glass-effect {
//           backdrop-filter: blur(10px);
//           background: rgba(255, 255, 255, 0.05);
//           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
//         }

//         .gradient-text {
//           background: linear-gradient(
//             45deg,
//             #3b82f6,
//             #8b5cf6,
//             #ec4899,
//             #3b82f6
//           );
//           -webkit-background-clip: text;
//           background-clip: text;
//           color: transparent;
//         }
//       `}</style>

//       <div className="pt-32 pb-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
//         {/* Background decorative elements */}
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

//         <div className="container relative mx-auto px-4 md:px-8">
//           {/* Header */}
//           <div className="max-w-4xl mx-auto text-center mb-20">
//             <div className="inline-block mb-4">
//               <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
//                 GET STARTED
//               </span>
//             </div>
//             <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
//               Book a{" "}
//               <span className="gradient-text animate-gradient">Demo</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-6">
//               Schedule a{" "}
//               <span className="text-blue-400 font-semibold">
//                 1-on-1 strategy call
//               </span>{" "}
//               with DIGIXEA experts and discover how AI automation can transform
//               your business.
//             </p>
//             <div className="flex flex-wrap justify-center gap-4 mt-10">
//               <div className="flex items-center text-gray-400">
//                 <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
//                 <span>30-minute personalized session</span>
//               </div>
//               <div className="flex items-center text-gray-400">
//                 <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
//                 <span>Live AI solutions demo</span>
//               </div>
//               <div className="flex items-center text-gray-400">
//                 <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
//                 <span>No commitment required</span>
//               </div>
//             </div>
//           </div>

//           {/* Calendly Embed Container */}
//           <div className="max-w-6xl mx-auto relative">
//             {/* Decorative border effect */}
//             <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-transparent to-purple-500/20 rounded-3xl blur-lg"></div>

//             <div className="glass-effect border border-white/20 rounded-3xl p-6 md:p-10 relative backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-500 hover:border-white/30">
//               {/* Container header */}
//               <div className="flex items-center justify-between mb-8">
//                 <div>
//                   <h2 className="text-2xl font-bold text-white mb-2">
//                     Select Your Time Slot
//                   </h2>
//                   <p className="text-gray-400">
//                     Choose a convenient time for your strategy session
//                   </p>
//                 </div>
//                 <div className="hidden md:flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
//                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                   <span className="text-green-400 text-sm font-medium">
//                     Real-time availability
//                   </span>
//                 </div>
//               </div>

//               {/* Calendly Embed */}
//               <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
//                 <div
//                   className="calendly-inline-widget"
//                   data-url="https://calendly.com/digixea1/30min"
//                   style={{ minWidth: "320px", height: "720px" }}
//                 />
//               </div>

//               {/* Footer note */}
//               <div className="mt-8 pt-6 border-t border-white/10 text-center">
//                 <p className="text-gray-400 text-sm">
//                   Can't find a suitable time?{" "}
//                   <a
//                     href="mailto:contact@digixea.com"
//                     className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
//                   >
//                     Contact us directly
//                   </a>{" "}
//                   for alternative arrangements.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Trust indicators */}
//           <div className="max-w-4xl mx-auto mt-16 text-center">
//             <p className="text-gray-500 text-sm uppercase tracking-wider mb-6">
//               Trusted by innovative teams at
//             </p>
//             <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
//               {["Startup", "Agency", "Enterprise", "E-commerce", "SaaS"].map(
//                 (type) => (
//                   <div key={type} className="text-gray-400 font-medium">
//                     {type}
//                   </div>
//                 )
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BookDemo;

import React, { useEffect, useState } from "react";

const BookDemo: React.FC = () => {
  /* ------------------------------------
     STEP 0: STATE (INSIDE COMPONENT)
  ------------------------------------ */
  const [loadCalendly, setLoadCalendly] = useState(false);

  /* ------------------------------------
     STEP 2: DELAY PAGE LOAD
  ------------------------------------ */
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadCalendly(true);
    }, 800); // delay improves perceived speed

    return () => clearTimeout(timer);
  }, []);

  /* ------------------------------------
     STEP 3: LOAD CALENDLY SCRIPT
     (THIS WAS MISSING)
  ------------------------------------ */
  useEffect(() => {
    if (!loadCalendly) return;

    // Prevent duplicate script loading
    if (document.querySelector("script[src*='calendly']")) return;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, [loadCalendly]);

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .glass-effect {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        }

        .gradient-text {
          background: linear-gradient(
            45deg,
            #3b82f6,
            #8b5cf6,
            #ec4899,
            #3b82f6
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
      `}</style>

      <div className="pt-32 pb-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
        <div className="container relative mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold">
              GET STARTED
            </span>

            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight mt-6">
              Book a{" "}
              <span className="gradient-text animate-gradient">Demo</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Schedule a 1-on-1 strategy call with DIGIXEA experts and discover
              how AI automation can transform your business.
            </p>
          </div>

          {/* Calendly Container */}
          <div className="max-w-6xl mx-auto">
            <div className="glass-effect border border-white/20 rounded-3xl p-6 md:p-10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Select Your Time Slot
                </h2>
                <p className="text-gray-400">
                  Choose a convenient time for your strategy session
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                {loadCalendly ? (
                  <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/digixea1/30min"
                    style={{ minWidth: "600px", height: "900px" }}
                  />
                ) : (
                  <div className="h-[720px] flex items-center justify-center bg-black/30">
                    <div className="text-center">
                      <div className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-gray-400 text-sm">
                        Loading availability…
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDemo;
