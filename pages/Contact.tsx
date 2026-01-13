// import { supabase } from "../lib/supabase";

// import React, { useState } from "react";
// import { Mail, MessageSquare, Phone, Send, MapPin, Check } from "lucide-react";

// const Contact: React.FC = () => {
//   const [submitted, setSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     service: "AI Automation Workflows",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const { error } = await supabase.from("contacts").insert([
//       {
//         Name: formData.name,
//         Email: formData.email,
//         "Mobile Number": formData.mobile,
//         Service: formData.service,
//         Message: formData.message,
//       },
//     ]);

//     setLoading(false);

//     if (error) {
//       console.error("Supabase insert error:", error);

//       if (error.code === "23505") {
//         alert("This mobile number already exists. Please use another number.");
//       } else {
//         alert("Something went wrong. Please try again.");
//       }
//     } else {
//       setSubmitted(true);
//       setFormData({
//         name: "",
//         email: "",
//         mobile: "",
//         service: "AI Automation Workflows",
//         message: "",
//       });

//       setTimeout(() => setSubmitted(false), 5000);
//     }
//   };

//   return (
//     <div className="pt-32 pb-24">
//       <div className="container mx-auto px-4 md:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
//           <div>
//             <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
//               Let's <span className="gradient-text">Build</span> Something.
//             </h1>
//             <p className="text-xl text-gray-400 mb-12 leading-relaxed">
//               Have a complex problem? Want to see how AI can save your team 20+
//               hours a week? Reach out and let's engineer your growth.
//             </p>

//             <div className="space-y-8">
//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 glass-effect border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all">
//                   <Mail size={24} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
//                     Email
//                   </p>
//                   <a
//                     href="mailto:digixea1@gmail.com"
//                     className="text-xl font-bold hover:text-cyan-400 transition-colors"
//                   >
//                     digixea1@gmail.com
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 glass-effect border border-white/10 rounded-2xl flex items-center justify-center text-green-400 group-hover:bg-green-400 group-hover:text-black transition-all">
//                   <MessageSquare size={24} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
//                     WhatsApp
//                   </p>
//                   <a
//                     href="https://wa.me/1234567890"
//                     className="text-xl font-bold hover:text-green-400 transition-colors"
//                   >
//                     Connect via WhatsApp
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-center gap-6 group">
//                 <div className="w-14 h-14 glass-effect border border-white/10 rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-400 group-hover:text-black transition-all">
//                   <MapPin size={24} />
//                 </div>
//                 <div>
//                   <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">
//                     Location
//                   </p>
//                   <p className="text-xl font-bold">
//                     Global Presence / Remote Native
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="relative">
//             <div className="glass-effect p-10 rounded-3xl border border-white/10 relative z-10">
//               {submitted ? (
//                 <div className="py-20 text-center animate-fade-in">
//                   <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
//                     <Check size={40} className="text-green-500" />
//                   </div>
//                   <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
//                   <p className="text-gray-400">
//                     Thank you for reaching out. We'll get back to you within 24
//                     hours.
//                   </p>
//                 </div>
//               ) : (
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                     <div>
//                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
//                         Name
//                       </label>
//                       <input
//                         type="text"
//                         required
//                         value={formData.name}
//                         onChange={(e) =>
//                           setFormData({ ...formData, name: e.target.value })
//                         }
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
//                         placeholder="John Doe"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
//                         Email
//                       </label>
//                       <input
//                         type="email"
//                         required
//                         value={formData.email}
//                         onChange={(e) =>
//                           setFormData({ ...formData, email: e.target.value })
//                         }
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
//                         placeholder="john@company.com"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
//                         Mobile Number
//                       </label>
//                       <input
//                         type="tel"
//                         required
//                         value={formData.mobile}
//                         onChange={(e) =>
//                           setFormData({ ...formData, mobile: e.target.value })
//                         }
//                         className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
//                         placeholder="+91 9876543210"
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
//                       Service Interest
//                     </label>
//                     <select
//                       value={formData.service}
//                       onChange={(e) =>
//                         setFormData({ ...formData, service: e.target.value })
//                       }
//                       className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none"
//                     >
//                       <option className="bg-[#050505]">
//                         AI Automation Workflows
//                       </option>
//                       <option className="bg-[#050505]">
//                         Custom AI Chatbots
//                       </option>
//                       <option className="bg-[#050505]">
//                         Web/App Development
//                       </option>
//                       <option className="bg-[#050505]">Consultation</option>
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
//                       Message
//                     </label>
//                     <textarea
//                       rows={5}
//                       value={formData.message}
//                       onChange={(e) =>
//                         setFormData({ ...formData, message: e.target.value })
//                       }
//                       className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
//                       placeholder="Tell us about your project or bottleneck..."
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-50"
//                   >
//                     {loading ? "Sending..." : "Send Message"}
//                     <Send size={18} />
//                   </button>
//                 </form>
//               )}
//             </div>
//             {/* Visual background glow */}
//             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/10 blur-[100px] rounded-full -z-10"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
import { supabase } from "../lib/supabase";
import React, { useState } from "react";
import { Mail, MessageSquare, Send, MapPin, Check } from "lucide-react";
const glassDropdown =
  "relative w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30 transition-all cursor-pointer shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]";

/* 🌍 COUNTRY CODE LIST */
const COUNTRY_CODES = [
  { code: "+93", name: "Afghanistan", flag: "🇦🇫" },
  { code: "+355", name: "Albania", flag: "🇦🇱" },
  { code: "+213", name: "Algeria", flag: "🇩🇿" },
  { code: "+54", name: "Argentina", flag: "🇦🇷" },
  { code: "+374", name: "Armenia", flag: "🇦🇲" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+43", name: "Austria", flag: "🇦🇹" },
  { code: "+994", name: "Azerbaijan", flag: "🇦🇿" },

  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+880", name: "Bangladesh", flag: "🇧🇩" },
  { code: "+32", name: "Belgium", flag: "🇧🇪" },
  { code: "+387", name: "Bosnia & Herzegovina", flag: "🇧🇦" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+975", name: "Bhutan", flag: "🇧🇹" },

  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+855", name: "Cambodia", flag: "🇰🇭" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+56", name: "Chile", flag: "🇨🇱" },
  { code: "+57", name: "Colombia", flag: "🇨🇴" },
  { code: "+385", name: "Croatia", flag: "🇭🇷" },
  { code: "+53", name: "Cuba", flag: "🇨🇺" },
  { code: "+357", name: "Cyprus", flag: "🇨🇾" },
  { code: "+420", name: "Czech Republic", flag: "🇨🇿" },

  { code: "+45", name: "Denmark", flag: "🇩🇰" },

  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+372", name: "Estonia", flag: "🇪🇪" },

  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+33", name: "France", flag: "🇫🇷" },

  { code: "+995", name: "Georgia", flag: "🇬🇪" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+30", name: "Greece", flag: "🇬🇷" },

  { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+36", name: "Hungary", flag: "🇭🇺" },

  { code: "+354", name: "Iceland", flag: "🇮🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+98", name: "Iran", flag: "🇮🇷" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+972", name: "Israel", flag: "🇮🇱" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },

  { code: "+81", name: "Japan", flag: "🇯🇵" },

  { code: "+7", name: "Kazakhstan", flag: "🇰🇿" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
  { code: "+996", name: "Kyrgyzstan", flag: "🇰🇬" },

  { code: "+856", name: "Laos", flag: "🇱🇦" },
  { code: "+371", name: "Latvia", flag: "🇱🇻" },
  { code: "+218", name: "Libya", flag: "🇱🇾" },
  { code: "+370", name: "Lithuania", flag: "🇱🇹" },
  { code: "+352", name: "Luxembourg", flag: "🇱🇺" },

  { code: "+853", name: "Macau", flag: "🇲🇴" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+356", name: "Malta", flag: "🇲🇹" },
  { code: "+212", name: "Morocco", flag: "🇲🇦" },
  { code: "+976", name: "Mongolia", flag: "🇲🇳" },
  { code: "+95", name: "Myanmar", flag: "🇲🇲" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },

  { code: "+977", name: "Nepal", flag: "🇳🇵" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },

  { code: "+92", name: "Pakistan", flag: "🇵🇰" },
  { code: "+51", name: "Peru", flag: "🇵🇪" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+351", name: "Portugal", flag: "🇵🇹" },

  { code: "+974", name: "Qatar", flag: "🇶🇦" },

  { code: "+40", name: "Romania", flag: "🇷🇴" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },

  { code: "+381", name: "Serbia", flag: "🇷🇸" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+421", name: "Slovakia", flag: "🇸🇰" },
  { code: "+386", name: "Slovenia", flag: "🇸🇮" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+82", name: "South Korea", flag: "🇰🇷" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+94", name: "Sri Lanka", flag: "🇱🇰" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },

  { code: "+886", name: "Taiwan", flag: "🇹🇼" },
  { code: "+255", name: "Tanzania", flag: "🇹🇿" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+992", name: "Tajikistan", flag: "🇹🇯" },
  { code: "+216", name: "Tunisia", flag: "🇹🇳" },
  { code: "+90", name: "Turkey", flag: "🇹🇷" },
  { code: "+993", name: "Turkmenistan", flag: "🇹🇲" },

  { code: "+256", name: "Uganda", flag: "🇺🇬" },
  { code: "+380", name: "Ukraine", flag: "🇺🇦" },
  { code: "+971", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+998", name: "Uzbekistan", flag: "🇺🇿" },

  { code: "+58", name: "Venezuela", flag: "🇻🇪" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" },

  { code: "+260", name: "Zambia", flag: "🇿🇲" },
  { code: "+263", name: "Zimbabwe", flag: "🇿🇼" },
];

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    mobile: "",
    service: "AI Automation Workflows",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    /* ✅ SERVER-SAFE MOBILE CHECK */
    if (formData.mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }

    const fullMobile = `${formData.countryCode}${formData.mobile}`;

    try {
      /* 1️⃣ SAVE TO SUPABASE */
      const { error: dbError } = await supabase.from("contacts").insert([
        {
          Name: formData.name,
          Email: formData.email,
          "Mobile Number": fullMobile,
          Service: formData.service,
          Message: formData.message,
        },
      ]);

      if (dbError) throw dbError;

      /* 2️⃣ SEND EMAIL (EDGE FUNCTION) */
      const { error: mailError } = await supabase.functions.invoke(
        "send-contact-email",
        {
          body: {
            name: formData.name,
            email: formData.email,
            mobile: fullMobile,
            service: formData.service,
            message: formData.message,
          },
        }
      );

      if (mailError) {
        console.error("Email failed:", mailError);
      }

      /* 3️⃣ SUCCESS UI */
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        countryCode: "+1",
        mobile: "",
        service: "AI Automation Workflows",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err: any) {
      console.error("Contact form error:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
              Let's <span className="gradient-text">Build</span> Something.
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Have a complex problem? Want to see how AI can save your team 20+
              hours a week? Reach out and let's engineer your growth.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass-effect border border-white/10 rounded-2xl flex items-center justify-center text-cyan-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:digixea1@gmail.com"
                    className="text-xl font-bold hover:text-cyan-400"
                  >
                    digixea1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass-effect border border-white/10 rounded-2xl flex items-center justify-center text-green-400">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    WhatsApp
                  </p>
                  <a
                    href="https://wa.me/1234567890"
                    className="text-xl font-bold hover:text-green-400"
                  >
                    Connect via WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass-effect border border-white/10 rounded-2xl flex items-center justify-center text-purple-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase mb-1">
                    Location
                  </p>
                  <p className="text-xl font-bold">
                    Global Presence / Remote Native
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="relative">
            <div className="glass-effect p-10 rounded-3xl border border-white/10 relative z-10">
              {submitted ? (
                <div className="py-20 text-center">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={40} className="text-green-500" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">Message Sent!</h3>
                  <p className="text-gray-400">
                    We’ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                    />
                  </div>

                  {/* 🌍 COUNTRY + MOBILE */}
                  <div className="flex gap-4">
                    <select
                      value={formData.countryCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          countryCode: e.target.value,
                        })
                      }
                      className="w-28 bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option
                          key={c.code}
                          value={c.code}
                          className="bg-[#050505]"
                        >
                          {c.name} {c.code} {c.flag}
                        </option>
                      ))}
                    </select>

                    <input
                      required
                      inputMode="numeric"
                      maxLength={10}
                      placeholder="10-digit Mobile"
                      value={formData.mobile}
                      onChange={(e) => {
                        const v = e.target.value.replace(/\D/g, "");
                        if (v.length <= 10) {
                          setFormData({ ...formData, mobile: v });
                        }
                      }}
                      className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                    />
                  </div>

                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                  >
                    <option>AI Automation Workflows</option>
                    <option>Custom AI Chatbots</option>
                    <option>Web Development</option>
                    <option>App Development</option>
                    <option>AI Voice Agent</option>
                    <option>Custom CRM Building</option>
                  </select>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-4 rounded-xl font-bold flex items-center justify-center gap-2"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </div>

            <div className="absolute inset-0 bg-cyan-500/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
