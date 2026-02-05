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
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">{author.name}</h1>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
              {author.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Book */}
      {featuredBook && (
        <section className="section-spacing bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-3xl mb-12 text-center">Featured Book</h2>
              <BookCard book={featuredBook} />
            </div>
          </div>
        </section>
      )}

      {/* About Preview */}
      <section className="section-spacing">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-6">About the Work</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              These books represent a contemplative exploration of consciousness, healing, and the human experience. 
              Written with quiet intention, they invite readers into deeper reflection rather than offering quick solutions.
            </p>
            <Link 
              href="/about" 
              className="inline-block font-sans text-sm underline underline-offset-2 hover:text-gray-600 transition-colors"
            >
              Learn more about the author →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
