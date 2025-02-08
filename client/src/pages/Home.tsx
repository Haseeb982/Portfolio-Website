import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <AnimatedSection>
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
              <img
                src="https://images.unsplash.com/photo-1573496799515-eebbb63814f2"
                alt="Professional headshot"
                className="rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
