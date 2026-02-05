import { books } from "@/lib/content";
import BookCard from "@/components/BookCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books | Manzulli",
  description: "A trilogy of thoughtful non-fiction exploring consciousness, healing, and the human experience.",
};

export default function BooksPage() {
  return (
    <div className="section-spacing">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-balance">Books</h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed text-balance">
              A trilogy of thoughtful non-fiction exploring consciousness, healing, and the human experience.
            </p>
            <div className="w-24 h-px bg-gray-300 mx-auto mt-8"></div>
          </div>

          <div className="space-y-24">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Future Books Placeholder */}
          <div className="mt-32 pt-20 border-t border-gray-200">
            <p className="text-center text-gray-500 font-sans text-sm tracking-wide uppercase">
              Additional books in the trilogy coming soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
