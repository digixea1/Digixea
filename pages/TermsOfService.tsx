import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-black mb-10">
          Terms of <span className="gradient-text">Service</span>
        </h1>

        <div className="space-y-10 text-gray-400 leading-relaxed">
          <p>
            Welcome to <strong className="text-white">DIGIXEA</strong>. These
            Terms of Service (“Terms”) govern your access to and use of our
            website, products, and services. By accessing or using our services,
            you agree to be legally bound by these Terms. If you do not agree,
            please do not use our services.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this website or engaging with DIGIXEA for AI
              automation, development, or consulting services, you confirm that
              you have read, understood, and agreed to these Terms. These Terms
              apply to all visitors, clients, and users of our services.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              2. Services Overview
            </h2>
            <p>
              DIGIXEA provides technology and consulting services including but
              not limited to:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>AI automation workflows and integrations</li>
              <li>Custom AI chatbots and conversational systems</li>
              <li>
                Workflow automation using tools like n8n, Zapier, and APIs
              </li>
              <li>Web and application development</li>
              <li>Technical consulting and strategy sessions</li>
            </ul>
            <p className="mt-4">
              The exact scope, timeline, and deliverables are defined in a
              mutually agreed project proposal or contract.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              3. Pricing & Payment Terms
            </h2>
            <p>
              All pricing is project-based or service-based and communicated
              prior to the start of work. Payments must be made according to the
              agreed schedule. Failure to complete payments may result in
              suspension or termination of services.
            </p>
            <p className="mt-3">
              Any third-party costs (APIs, hosting, tools, subscriptions) are
              billed separately unless explicitly included in the agreement.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              4. Intellectual Property Rights
            </h2>
            <p>
              Upon full and final payment, ownership of custom deliverables
              created specifically for the client will transfer to the client,
              unless otherwise stated in writing.
            </p>
            <p className="mt-3">
              DIGIXEA retains ownership of internal frameworks, methodologies,
              templates, reusable components, and general know-how developed
              during the course of work.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              5. Data Privacy & Confidentiality
            </h2>
            <p>
              DIGIXEA respects client confidentiality and implements reasonable
              security practices to protect sensitive data. Client information
              is used solely for the purpose of delivering agreed services and
              is never sold or shared without consent, except where required by
              law.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, DIGIXEA shall not be
              liable for any indirect, incidental, special, or consequential
              damages. Our total liability for any claim shall not exceed the
              amount paid by the client for the specific service giving rise to
              the claim.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              7. Termination of Services
            </h2>
            <p>
              Either party may terminate services with written notice in
              accordance with the project agreement. Upon termination, the
              client will receive all completed work for which payment has been
              made.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              8. Changes to Terms
            </h2>
            <p>
              DIGIXEA reserves the right to update or modify these Terms at any
              time. Continued use of the website or services after changes
              constitutes acceptance of the updated Terms.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-3">
              9. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms of Service, please
              contact us at:
            </p>
            <p className="mt-2">
              <a
                href="mailto:digixea1@gmail.com"
                className="text-cyan-400 hover:underline"
              >
                digixea1@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
