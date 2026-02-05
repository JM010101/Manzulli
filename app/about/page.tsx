import { author } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Manzulli",
  description: "Author of thoughtful non-fiction exploring consciousness, healing, and the human experience.",
};

export default function AboutPage() {
  return (
    <div className="section-spacing">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-8">About</h1>
          
          {/* Author Photo Placeholder */}
          <div className="mb-12">
            <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto">
              {/* Placeholder for author photo */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Author Photo</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              {author.bio}
            </p>
            
            <h2 className="font-serif text-3xl mt-12 mb-6">Writing Philosophy</h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              The work presented here emerges from a contemplative approach to understanding consciousness and healing. 
              Rather than offering prescriptive solutions or quick fixes, these books invite readers into deeper reflection 
              and expanded awareness.
            </p>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              Each volume in the trilogy builds upon the previous, creating a comprehensive exploration of how consciousness 
              shapes our experience of health, wellness, and the human condition. The tone is restrained and thoughtful, 
              matching the contemplative nature of the subject matter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
