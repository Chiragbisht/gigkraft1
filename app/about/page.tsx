import { montserrat } from "@/app/fonts/font";

export const metadata = {
  title: "About Us | GigCraft",
  description: "Learn about GigCraft, our mission, and how we're revolutionizing freelancing with web3 technology."
};

export default function AboutPage() {
  return (
    <main className={`${montserrat.className} py-16 px-4 md:px-6 max-w-7xl mx-auto`}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">About GigCraft</h1>
        
        <div className="prose prose-base">
          <p className="text-base text-gray-700 mb-6">
            GigCraft is a comprehensive freelance platform that connects talented professionals with businesses and individuals seeking high-quality services. What makes us unique is our innovative web3-based cryptocurrency payment system, ensuring secure, fast, and transparent transactions for everyone involved.
          </p>
          
          <h2 className="text-xl font-semibold mt-10 mb-4">What We Do</h2>
          <p className="text-base text-gray-700 mb-5">
            At GigCraft, we've created a freelance platform for everything and everyone. Clients can easily post their requirements, while freelancers searching for opportunities can browse, apply, and complete work—all with the assurance of blockchain-backed security.
          </p>
          <p className="text-base text-gray-700 mb-5">
            Our platform streamlines the entire process from job posting to payment, eliminating traditional payment delays and security concerns. By leveraging web3 technology, we provide unparalleled security, speed, and transparency in all transactions.
          </p>
          
          <h2 className="text-xl font-semibold mt-10 mb-4">Our Mission</h2>
          <p className="text-base text-gray-700 mb-5">
            Our mission is to empower freelancers and clients alike by creating a seamless, transparent platform where talent and opportunity meet. We believe in democratizing work, enabling professionals to build successful careers on their own terms, and helping businesses find the precise skills they need to thrive, all while ensuring secure and efficient payment processes.
          </p>
          
          <h2 className="text-xl font-semibold mt-10 mb-4">Our Vision</h2>
          <p className="text-base text-gray-700 mb-5">
            We envision a world where geography is no barrier to opportunity, where talent is recognized and rewarded fairly, and where businesses of all sizes can access the expertise they need to grow. GigCraft aims to be at the forefront of this future of work, using web3 technology to make remote collaboration more secure, effective, and satisfying.
          </p>
          
          <h2 className="text-xl font-semibold mt-10 mb-4">Core Values</h2>
          <ul className="space-y-3 text-base text-gray-700 mb-5">
            <li><strong>Security:</strong> Our web3-based crypto payment system ensures maximum security and transparency in all transactions.</li>
            <li><strong>Excellence:</strong> We uphold the highest standards in our platform and encourage the same in our community.</li>
            <li><strong>Trust:</strong> We build trust through blockchain technology, secure processes, and fair policies.</li>
            <li><strong>Innovation:</strong> We constantly evolve our platform with cutting-edge technology to better serve our users' needs.</li>
            <li><strong>Inclusivity:</strong> We welcome diverse talent and clients from every corner of the globe.</li>
            <li><strong>Empowerment:</strong> We provide the tools and support needed for success in the digital economy.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-10 mb-4">The GigCraft Difference</h2>
          <p className="text-base text-gray-700 mb-5">
            Unlike traditional freelance platforms, GigCraft leverages web3 technology to provide:
          </p>
          <ul className="space-y-3 text-base text-gray-700 mb-5">
            <li><strong>Secure Payments:</strong> Cryptocurrency-based transactions ensure your financial data remains secure.</li>
            <li><strong>Fast Transfers:</strong> Say goodbye to payment delays with near-instant crypto transactions.</li>
            <li><strong>Transparent Records:</strong> All transactions are recorded on the blockchain, ensuring transparency and trust.</li>
            <li><strong>Global Access:</strong> Work with clients and talent from around the world without traditional banking limitations.</li>
            <li><strong>Lower Fees:</strong> Web3 technology reduces transaction costs, saving money for both clients and freelancers.</li>
          </ul>
        </div>
      </div>
    </main>
  );
} 