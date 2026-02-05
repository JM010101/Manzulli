import Link from "next/link";
import { futureSections } from "@/lib/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">Navigation</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <Link href="/" className="hover:text-gray-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/books" className="hover:text-gray-600 transition-colors">
                  Books
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Future Sections</h3>
            <ul className="space-y-2 font-sans text-sm">
              <li>
                <span className="text-gray-500">{futureSections.lifeHealingFoundation.name}</span>
                <span className="text-xs text-gray-400 ml-2">(Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-500">{futureSections.ter.name}</span>
                <span className="text-xs text-gray-400 ml-2">(Coming Soon)</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg mb-4">Connect</h3>
            <p className="font-sans text-sm text-gray-600">
              For inquiries and collaboration opportunities.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8">
          <p className="font-sans text-sm text-gray-500 text-center">
            © {currentYear} Manzulli. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
