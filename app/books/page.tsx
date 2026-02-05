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
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-center">Books</h1>
          <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
            A trilogy of thoughtful non-fiction exploring consciousness, healing, and the human experience.
          </p>

          <div className="space-y-16">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* Future Books Placeholder */}
          <div className="mt-24 pt-16 border-t border-gray-200">
            <p className="text-center text-gray-500 font-sans text-sm">
              Additional books in the trilogy coming soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
