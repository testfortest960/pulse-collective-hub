
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { 
  Recycle, 
  Lightbulb, 
  Scale, 
  Heart, 
  Users
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Features = () => {
  const features = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Startup Innovation Hub",
      description: "A collaborative ecosystem where startups, investors, and mentors unite to transform ideas into successful ventures using AI-powered tools.",
      label: "Ecosystem"
    },
    {
      icon: <Recycle className="w-6 h-6" />,
      title: "Smart Waste Management",
      description: "AI-driven solutions for efficient resource optimization and sustainable urban development, reducing environmental impact.",
      label: "Environment"
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Justice for All",
      description: "Free AI-powered legal assistance and a pro bono network ensuring everyone has access to legal support when they need it most.",
      label: "Equity"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Transparent Donations",
      description: "A system that ensures every contribution reaches the right people with complete transparency and accountability.",
      label: "Community"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Futuristic Collaboration",
      description: "Connect tech enthusiasts, investors, and changemakers to drive meaningful action and innovation for cities worldwide.",
      label: "Network"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="features">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.08)_1px,transparent_1px)] [background-size:25px_25px]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
            Core Features
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Powering Urban Transformation
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300">
            RepulseNet combines cutting-edge AI technology with community-driven initiatives to revitalize cities and create sustainable futures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "opacity-0",
                index === 0 && "animate-fade-up",
                index === 1 && "animate-fade-up animate-delay-100",
                index === 2 && "animate-fade-up animate-delay-200",
                index === 3 && "animate-fade-up animate-delay-300",
                index === 4 && "animate-fade-up animate-delay-400",
              )}
              // This ensures the animation plays when in viewport
              style={{ animationPlayState: 'running', animationFillMode: 'forwards' }}
            >
              <FeatureCard 
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                label={feature.label}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
