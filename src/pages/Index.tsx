import React, { useState } from "react";
import { FileUp, CheckCircle, Cloud, Presentation } from "lucide-react";
import Navbar from "@/components/Navbar";
import GradientBackground from "@/components/GradientBackground";
import ProjectCard from "@/components/ProjectCard";
import TemplateButton from "@/components/TemplateButton";
import CategoryTabs from "@/components/CategoryTabs";
import LovableLogo from "@/components/LovableLogo";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Popular");
  
  const categories = [
    "Popular",
    "Discover",
    "Internal Tools",
    "Website",
    "Personal",
    "Consumer App",
    "B2B App",
    "Prototype"
  ];

  const projects = [
    {
      id: "crypto-dashboard",
      title: "cryptocurrency-trading-dashboard",
      image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop",
      category: "Website",
      remixCount: 3871,
      avatarSrc: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "pulse-robot",
      title: "pulse-robot-template",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2940&auto=format&fit=crop",
      category: "Website",
      remixCount: 3059,
      avatarSrc: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "wrlds-ai",
      title: "wrlds-ai-integration",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2865&auto=format&fit=crop",
      category: "Website",
      remixCount: 2966,
      avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: "agri-dom",
      title: "agri-dom",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2942&auto=format&fit=crop",
      category: "Prototype",
      remixCount: 2434,
      avatarSrc: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
    }
  ];

  return (
    <GradientBackground>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 px-6 md:px-12 pb-16">
          <div className="max-w-5xl mx-auto mt-16 md:mt-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Build something <span className="inline-flex items-center">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-2"
                >
                  <path
                    d="M3 9C3 6.23858 5.23858 4 8 4H16C18.7614 4 21 6.23858 21 9V15C21 17.7614 18.7614 20 16 20H8C5.23858 20 3 17.7614 3 15V9Z"
                    fill="url(#paint0_linear)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="3"
                      y1="4"
                      x2="21"
                      y2="20"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FF5F6D" />
                      <stop offset="1" stopColor="#FFC371" />
                    </linearGradient>
                  </defs>
                </svg>
                Lovable
              </span>
            </h1>
            <p className="text-lg text-gray-700 mb-10">
              Idea to app in seconds, with your personal full stack engineer
            </p>
            
            <div className="max-w-2xl mx-auto mb-8">
              <Textarea 
                placeholder="Ask Lovable to create a landing" 
                className="bg-white/90 backdrop-blur-sm border-gray-200 min-h-[100px] text-base"
              />
              
              <div className="flex justify-between mt-4">
                <Button variant="outline" className="gap-2">
                  <FileUp size={16} />
                  Attach
                </Button>
                <div className="flex items-center gap-2">
                  <Button variant="outline" className="gap-2">
                    <CheckCircle size={16} />
                    Public
                  </Button>
                  <Button className="bg-gray-900 hover:bg-gray-800">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4L20 12L12 20M4 12H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              <TemplateButton 
                icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>} 
                label="PDF viewer" 
              />
              <TemplateButton 
                icon={<CheckCircle size={16} />} 
                label="Task manager" 
              />
              <TemplateButton 
                icon={<Cloud size={16} />} 
                label="Weather dashboard" 
              />
              <TemplateButton 
                icon={<Presentation size={16} />} 
                label="Slider presentation" 
              />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-left">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">From the Community</h2>
                <Button variant="ghost" className="text-gray-600">
                  View All
                </Button>
              </div>
              
              <CategoryTabs 
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                {projects.map(project => (
                  <ProjectCard 
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    image={project.image}
                    category={project.category}
                    remixCount={project.remixCount}
                    avatarSrc={project.avatarSrc}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </GradientBackground>
  );
};

export default Index;