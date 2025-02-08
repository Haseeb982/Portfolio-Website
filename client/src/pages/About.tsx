import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const skills = [
    "React", "TypeScript", "Node.js", "Tailwind CSS",
    "UI/UX Design", "Responsive Design", "Next.js", "GraphQL"
  ];

  return (
    <AnimatedSection>
      <div className="container mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold text-foreground mb-12">About Me</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-foreground mb-6">Background</h2>
            <p className="text-muted-foreground mb-6">
              With over 5 years of experience in web development, I specialize in creating modern, responsive web applications. My passion lies in combining clean code with beautiful design to create exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              I've worked with startups and established companies alike, helping them achieve their digital goals through innovative solutions and attention to detail.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="bg-primary/10 text-foreground rounded-md px-4 py-2 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AnimatedSection>
  );
}