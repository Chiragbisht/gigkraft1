import { Code, Paintbrush, PenTool, BarChart, Briefcase, Headphones, Building, Database, Scale, BookOpen } from "lucide-react";
import { FeatureCard } from "./serviceCategories"
import { montserrat } from "@/app/fonts/font";
const features = [
  {
    title: "Development & IT",
    description:
      "Build and maintain software, websites, and applications. Includes web development, mobile app development, DevOps, and blockchain projects.",
    Icon: Code,
  },
  {
    title: "Design & Creative",
    description:
      "Create stunning visuals, branding, and user experiences. Includes graphic design, UI/UX, animation, video editing, and illustration.",
    Icon: Paintbrush,
  },
  {
    title: "Writing & Translation",
    description:
      "Craft compelling content, copy, and technical documents. Also includes translation, transcription, and editing services.",
    Icon: PenTool,
  },
  {
    title: "Marketing & Sales",
    description:
      "Promote businesses through SEO, digital marketing, social media, and sales strategies to drive engagement and revenue.",
    Icon: BarChart,
  },
  {
    title: "Business & Consulting",
    description:
      "Provide expert advice on finance, business strategy, HR, legal matters, and operations to help businesses grow and succeed.",
    Icon: Briefcase,
  },
  {
    title: "Customer Support",
    description:
      "Assist customers with inquiries, troubleshooting, and virtual assistance through chat, email, and phone support.",
    Icon: Headphones,
  },
  {
    title: "Engineering & Architecture",
    description:
      "Design and develop innovative products, structures, and systems, including mechanical, civil, and electrical engineering projects.",
    Icon: Building,
  },
  {
    title: "Data Science & Analytics",
    description:
      "Analyze data, build machine learning models, and leverage AI to make data-driven business decisions and predictions.",
    Icon: Database,
  },
  {
    title: "Legal & Compliance",
    description:
      "Help businesses and individuals navigate legal requirements, contracts, intellectual property, and regulatory compliance.",
    Icon: Scale,
  },
  {
    title: "Education & Training",
    description:
      "Teach and train through online courses, tutoring, instructional design, and corporate training programs.",
    Icon: BookOpen,
  },
];
export function CategorySection() {
  return (
    <section className="py-16 lg:px-4 px-0 md:py-24">
      <div className="container lg:mx-auto max-w-7xl">
        <h2 className="text-center text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-16 max-w-3xl mx-auto leading-tight">
        <span className={`${montserrat.className}`}>Top skills categories</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              {...feature}
              className={index === features.length - 1 ? "md:col-span-2" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  )
}