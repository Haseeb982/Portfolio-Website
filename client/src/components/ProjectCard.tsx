import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden h-full">
          <div className="relative aspect-video">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-[#2C3E50]">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#333333]">{description}</p>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  );
}
