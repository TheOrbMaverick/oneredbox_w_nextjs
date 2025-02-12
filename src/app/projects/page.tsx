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
          title="Project Title"
          client="Client name"
          date="Project Date"
          images={[
            "/images/heroImg.jpg",
            "/images/construct.jpg",
            "/images/construction.png",
          ]}
          location="Project Location"
          video="/videos/sample.mp4"
          about=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti suscipit veritatis totam quis amet modi dolorem, ipsam
                voluptatibus quo ratione, perspiciatis in sapiente dicta sit ea
                quidem excepturi atque. Maxime"
        />
        {/*  */}

        {/*  */}
      </div>
    </div>
  );
}
