import { montserrat } from "@/app/fonts/font";

export const metadata = {
  title: "Privacy Policy | GigCraft",
  description: "GigCraft's privacy policy and how we handle your data."
};

export default function PrivacyPolicyPage() {
  return (
    <main className={`${montserrat.className} py-16 px-4 md:px-6 max-w-7xl mx-auto`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-gray-500 mb-8"></p>
        
        <div className="prose prose-lg max-w-none">
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At GigCraft, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our platform. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this privacy policy. You are encouraged to periodically review this privacy policy to stay informed of updates.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect via the website includes:
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Personal Data</h3>
            <p>
              While using our platform, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Postal address</li>
              <li>Payment information</li>
              <li>Professional information and qualifications</li>
            </ul>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Usage Data</h3>
            <p>
              We may also collect information on how the website is accessed and used. This usage data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our website that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Create and manage your account</li>
              <li>Process payments and transactions</li>
              <li>Facilitate matches between freelancers and clients</li>
              <li>Send you administrative emails</li>
              <li>Develop and display content based on your interests</li>
              <li>Offer and administer contests, promotions, and surveys</li>
              <li>Monitor and analyze usage patterns</li>
              <li>Prevent fraudulent transactions and monitor against theft</li>
              <li>Increase the efficiency and operation of the platform</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Disclosure of Your Information</h2>
            <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Business Transfers</h3>
            <p>
              If we or our subsidiaries are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2">
              <strong>GigCraft</strong><br />
              123 Business Avenue<br />
              Suite 456<br />
              New York, NY 10001<br />
              <a href="mailto:privacy@gigcraft.com" className="text-primary hover:underline">privacy@gigcraft.com</a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 