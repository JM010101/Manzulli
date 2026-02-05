import Link from "next/link";
import { author, books } from "@/lib/content";
import BookCard from "@/components/BookCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manzulli - Author",
  description: "Thoughtful non-fiction books exploring consciousness and healing. Launching with The New Medicine of Consciousness.",
};

export default function Home() {
  const featuredBook = books[0];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-spacing border-b border-gray-100">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-10 text-balance">{author.name}</h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 leading-relaxed max-w-3xl mx-auto text-balance">
              {author.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      {featuredBook && (
        <section className="section-spacing bg-gray-50/50">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="font-serif text-3xl md:text-4xl mb-4">Featured Book</h2>
                <div className="w-24 h-px bg-gray-300 mx-auto"></div>
              </div>
              <BookCard book={featuredBook} />
            </div>
          </div>
        </section>
      )}

      {/* About Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-balance">About the Work</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-10 text-balance">
              These books represent a contemplative exploration of consciousness, healing, and the human experience. 
              Written with quiet intention, they invite readers into deeper reflection rather than offering quick solutions.
            </p>
            <Link 
              href="/about" 
              className="link-subtle inline-block font-sans text-sm tracking-wide"
            >
              Learn more about the author
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
