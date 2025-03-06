
import React from 'react';
import { Scale, MessageSquare, FileText, Shield, Globe } from 'lucide-react';
import PageLayout from '../components/layout/PageLayout';
import GlassCard from '../components/ui/GlassCard';
import { Button } from '@/components/ui/button';
import AnimatedArrow from '../components/ui/AnimatedArrow';

const LegalAid = () => {
  return (
    <PageLayout>
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(rgba(34,197,94,0.05)_1px,transparent_1px)] dark:bg-[radial-gradient(rgba(34,197,94,0.1)_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="absolute opacity-30 blur-[100px] rounded-full w-[400px] h-[400px] bg-repulse-500/40 -right-40 top-40"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center rounded-full border border-repulse-200 bg-repulse-50 px-4 py-1 text-sm font-medium text-repulse-700 mb-6">
              Justice For All
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered <span className="text-gradient">Legal Assistance</span>
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Free legal guidance and support through our AI chatbot and pro bono lawyer network, ensuring everyone has access to justice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <GlassCard className="p-6 h-full md:col-span-1">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">AI Legal Assistant</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Get answers to common legal questions and preliminary case assessments through our AI-powered chatbot.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full md:col-span-2">
              <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4">
                <div className="flex flex-col gap-4">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
                    <p className="text-sm">How do I file for unemployment benefits in my state?</p>
                  </div>
                  <div className="bg-repulse-50 dark:bg-repulse-900/20 p-3 rounded-lg shadow-sm">
                    <p className="text-sm">To file for unemployment benefits, you'll need to:</p>
                    <ol className="text-sm mt-2 list-decimal list-inside">
                      <li>Visit your state's unemployment insurance website</li>
                      <li>Create an account or log in</li>
                      <li>Provide required personal information</li>
                      <li>Submit details about your previous employment</li>
                      <li>File weekly claims once approved</li>
                    </ol>
                    <p className="text-sm mt-2">Would you like me to help you find your state's specific website?</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                AI Legal Assistant Preview (Coming Soon)
              </p>
            </GlassCard>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Pro Bono Lawyer Network</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  Connect with volunteer attorneys who provide free legal representation for qualified cases.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
            
            <GlassCard className="p-6 h-full">
              <div className="flex flex-col h-full gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-repulse-500/10 text-repulse-600">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Document Preparation</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">
                  AI-assisted creation of legal documents and forms, with guidance on proper filing procedures.
                </p>
                <Button variant="link" className="px-0 flex items-center text-repulse-600 text-sm font-medium">
                  Coming Soon
                  <AnimatedArrow size="sm" />
                </Button>
              </div>
            </GlassCard>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <GlassCard className="p-8 text-center">
              <Globe className="w-12 h-12 text-repulse-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4">Justice Shouldn't Have Barriers</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our mission is to make legal assistance accessible to everyone, regardless of financial status, 
                through technology and a dedicated network of legal professionals.
              </p>
              <div className="flex justify-center">
                <Button className="bg-repulse-500 hover:bg-repulse-600">Learn More</Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default LegalAid;
