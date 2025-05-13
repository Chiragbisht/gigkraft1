import { montserrat } from "@/app/fonts/font";
import Image from "next/image";

export const metadata = {
  title: "Leadership Team | GigCraft",
  description: "Meet the leadership team behind GigCraft's secure web3-based freelance marketplace."
};

export default function LeadershipPage() {
  const leadershipTeam = [
    {
      name: "Chirag Bisht",
      role: "Co-founder",
      bio: "Backend and Database Management",
      imagePath: "/images/pictures/chirag.png"
    },
    {
      name: "Aman Tiwari",
      role: "Co-founder",
      bio: "Payment and Auth Architecture.",
      imagePath: "/images/pictures/aman.png"
    },
    {
      name: "Anuj Bhati",
      role: "Co-founder",
      bio: "Frontend and UI/UX Design",
      imagePath: "/images/pictures/anuj.jpeg"
    },
    {
      name: "Anubhav Gangwar",
      role: "Co-founder",
      bio: "Frontend and UI/UX Design",
      imagePath: "/images/pictures/anubhav.jpeg"
    }
  ];
  
  return (
    <main className={`${montserrat.className} py-16 px-4 md:px-6 max-w-7xl mx-auto`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Our Leadership Team</h1>
        <p className="text-base text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Meet the team behind GigCraft, a comprehensive freelance platform revolutionizing the industry with web3-based crypto payments for enhanced security and speed.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          {leadershipTeam.map((leader, index) => (
            <div key={index} className="flex flex-col items-center md:items-start">
              <div className="w-40 h-40 rounded-full overflow-hidden relative mb-4">
                <Image 
                  src={leader.imagePath} 
                  alt={`${leader.name} - ${leader.role}`} 
                  fill
                  sizes="(max-width: 768px) 100vw, 160px"
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold">{leader.name}</h2>
              <p className="text-sm text-primary font-medium mb-2">{leader.role}</p>
              <p className="text-sm text-gray-600">{leader.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 border-t pt-10">
          <h2 className="text-xl font-semibold mb-5 text-center">Our Team</h2>
          <p className="text-base text-gray-700">
            We are a team of BTech graduates in Information Technology who share a passion for developing applications with the latest technologies. Our collective expertise spans across backend development, database management, frontend design, and payment systems. Leveraging our technical skills and innovation mindset, we've created GigCraft to revolutionize the freelance economy with secure web3-based solutions that address traditional payment challenges while providing a seamless user experience.
          </p>
        </div>
      </div>
    </main>
  );
} 