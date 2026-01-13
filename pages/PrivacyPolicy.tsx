import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-10">
          Privacy <span className="gradient-text">Policy</span>
        </h1>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <p>
            At <strong className="text-white">DIGIXEA</strong>, your privacy is
            important to us. This Privacy Policy explains how we collect, use,
            store, and protect your information when you interact with our
            website, services, and AI-powered systems.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal and business information that you
              voluntarily provide to us, including when you:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Schedule discovery calls or consultations</li>
              <li>Interact with our AI chatbots or automation demos</li>
              <li>Submit contact forms or service inquiries</li>
              <li>Subscribe to updates, newsletters, or content</li>
              <li>Communicate with us via email or messaging platforms</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              2. How We Use Your Information
            </h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Provide, operate, and improve our services</li>
              <li>Respond to inquiries and customer support requests</li>
              <li>Process payments and manage transactions</li>
              <li>Send service-related updates and technical notices</li>
              <li>Develop new products, workflows, and AI solutions</li>
              <li>Enhance user experience and system performance</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              3. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal data against unauthorized
              access, loss, misuse, alteration, or disclosure.
            </p>
            <p className="mt-3">
              For client projects, security controls are aligned with agreed
              requirements and industry best practices wherever applicable.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              4. Information Sharing
            </h2>
            <p>
              DIGIXEA does <strong className="text-white">not</strong> sell,
              trade, or rent your personal information to third parties.
            </p>
            <p className="mt-3">
              We may share information with trusted service providers (such as
              hosting, analytics, or automation platforms) strictly for
              operational purposes, provided they agree to keep the information
              confidential and secure.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              5. AI & Automation Data
            </h2>
            <p>
              When you interact with our AI chatbots or automated systems,
              limited interaction data may be processed to improve system
              performance, accuracy, and quality.
            </p>
            <p className="mt-3">
              All AI-related data is handled securely and is never used beyond
              its intended operational or improvement purpose.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              6. Cookies & Tracking Technologies
            </h2>
            <p>
              We use cookies and similar technologies to analyze website usage,
              enhance performance, and improve user experience.
            </p>
            <p className="mt-3">
              You can control or disable cookies through your browser settings,
              though some features of the website may not function properly.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              7. Your Rights
            </h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Object to certain processing activities</li>
              <li>Request restriction of data processing</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page, and continued use of our services
              implies acceptance of the updated policy.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have questions or concerns regarding this Privacy Policy,
              please contact us:
            </p>
            <p className="mt-3">
              <a
                href="mailto:digixea1@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                digixea1@gmail.com
              </a>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              We aim to respond within 48 hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
