import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Code, Palette, Globe, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Clean Code",
      description: "Writing efficient, maintainable, and scalable code solutions."
    },
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Modern Design",
      description: "Creating beautiful, intuitive user interfaces and experiences."
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Web Solutions",
      description: "Building responsive, cross-platform web applications."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechStart",
      content: "An exceptional developer who delivers outstanding results. The attention to detail and creative solutions exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      content: "Working with this developer was a game-changer for our project. Their technical expertise and problem-solving skills are impressive.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    },
    {
      name: "Emily Williams",
      role: "Creative Director",
      content: "The perfect blend of technical skill and creative vision. Our website has never looked or performed better.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    }
  ];

  return (
    <AnimatedSection>
      {/* Hero Section */}
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        <div className="container mx-auto px-6 py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Creative Developer & Designer
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
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
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary to-secondary p-1">
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
      <div className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-background p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-4">Client Testimonials</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here's what some of my clients have to say about working together.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}