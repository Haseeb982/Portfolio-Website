import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Palette, Globe } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-[#3498DB]" />,
      title: "Clean Code",
      description: "Writing efficient, maintainable, and scalable code solutions."
    },
    {
      icon: <Palette className="w-8 h-8 text-[#3498DB]" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive user interfaces and experiences."
    },
    {
      icon: <Globe className="w-8 h-8 text-[#3498DB]" />,
      title: "Web Solutions",
      description: "Building responsive, cross-platform web applications."
    }
  ];

  return (
    <AnimatedSection>
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#2C3E50] mb-6">
                Creative Developer & Designer
              </h1>
              <p className="text-lg text-[#333333] mb-8">
                I craft beautiful, responsive websites and applications with a focus on user experience and modern design principles.
              </p>
              <div className="flex gap-4">
                <Link href="/projects">
                  <Button size="lg">
                    View Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#3498DB] to-[#2C3E50] p-1">
                <div className="w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#2C3E50] mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-[#2C3E50] mb-2">{feature.title}</h3>
                <p className="text-[#333333]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}