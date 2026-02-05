import { contactEmail } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Manzulli",
  description: "Get in touch for inquiries and collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <div className="section-spacing">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-12 text-center text-balance">Contact</h1>
          
          <div className="space-y-12 max-w-2xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-center text-balance">
              For inquiries, collaboration opportunities, or general correspondence, please reach out via email.
            </p>
            
            <div className="border-t border-gray-200 pt-10">
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Email</h2>
              <p className="text-lg md:text-xl mb-8">
                <a 
                  href={`mailto:${contactEmail}`}
                  className="link-subtle text-gray-900 font-sans"
                >
                  {contactEmail}
                </a>
              </p>
            </div>

            <div className="border-t border-gray-200 pt-10">
              <h2 className="font-serif text-2xl md:text-3xl mb-6">Response Time</h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Please allow 3-5 business days for a response. Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
