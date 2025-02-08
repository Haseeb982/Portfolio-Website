import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce platform built with React and Node.js",
      image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
      link: "#"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
      link: "#"
    },
    {
      title: "Social Media App",
      description: "A social networking platform with real-time messaging",
      image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A custom portfolio website template for creatives",
      image: "https://images.unsplash.com/photo-1660592868727-858d28c3ba52",
      link: "#"
    },
    {
      title: "Task Management",
      description: "Project management tool with task tracking",
      image: "https://images.unsplash.com/photo-1685478237595-f452cb125f27",
      link: "#"
    },
    {
      title: "Weather App",
      description: "Real-time weather forecasting application",
      image: "https://images.unsplash.com/photo-1679409759768-bea306439ab8",
      link: "#"
    }
  ];

  return (
    <AnimatedSection>
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-[#2C3E50] mb-12">Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
