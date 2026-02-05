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
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-8">Contact</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-gray-800 mb-8">
              For inquiries, collaboration opportunities, or general correspondence, please reach out via email.
            </p>
            
            <div className="border-t border-gray-200 pt-8">
              <h2 className="font-serif text-2xl mb-4">Email</h2>
              <p className="text-lg mb-6">
                <a 
                  href={`mailto:${contactEmail}`}
                  className="underline underline-offset-2 hover:text-gray-600 transition-colors"
                >
                  {contactEmail}
                </a>
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8 mt-8">
              <h2 className="font-serif text-2xl mb-4">Response Time</h2>
              <p className="text-lg text-gray-700">
                Please allow 3-5 business days for a response. Thank you for your patience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
