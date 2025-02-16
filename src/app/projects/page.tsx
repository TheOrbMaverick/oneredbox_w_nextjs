"use client";
import { Navbar } from "@/components/Navbar";

import ProjectCard from "@/components/project-card";

export default function ProjectsPage() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="px-8 lg:px-32 text-white order pt-28 space-y-5">
        {/*  */}
        <ProjectCard
          title="Project Designs and Interiors"
          client="Anonymous"
          images={[
            "/images/design/1.jpg",
            "/images/design/2.jpg",
            "/images/design/3.jpg",
            "/images/design/4.jpg",
            "/images/design/5.jpg",
            "/images/design/6.jpg",
            "/images/design/7.jpg",
            "/images/design/8.jpg",
            "/images/design/B1.PNG",
            "/images/design/B2.PNG",
            "/images/design/B3.PNG",
            "/images/design/B4.jpg",
            "/images/design/B5.PNG",
          ]}
          location="Project Location"
          video="/videos/sample.mp4"
          about="These are designs we did for some clients for 
          both interior and exterior views. The pictures show
          the final 3D models done during the design process 
          before we moved to site"
        />
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
}
