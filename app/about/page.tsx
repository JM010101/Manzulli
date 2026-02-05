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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 text-center text-balance">About</h1>
          
          {/* Author Photo Placeholder */}
          <div className="mb-16 flex justify-center">
            <div className="relative w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full overflow-hidden shadow-lg">
              {/* Placeholder for author photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xs text-gray-400 font-sans uppercase tracking-wider">Author Photo</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-10 max-w-3xl mx-auto">
            <div>
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-700 text-balance">
                {author.bio}
              </p>
            </div>
            
            <div className="pt-12 border-t border-gray-200">
              <h2 className="font-serif text-3xl md:text-4xl mb-8">Writing Philosophy</h2>
              <div className="space-y-8">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  The work presented here emerges from a contemplative approach to understanding consciousness and healing. 
                  Rather than offering prescriptive solutions or quick fixes, these books invite readers into deeper reflection 
                  and expanded awareness.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                  Each volume in the trilogy builds upon the previous, creating a comprehensive exploration of how consciousness 
                  shapes our experience of health, wellness, and the human condition. The tone is restrained and thoughtful, 
                  matching the contemplative nature of the subject matter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
