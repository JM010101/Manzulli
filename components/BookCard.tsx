import Link from "next/link";
import { Book } from "@/lib/content";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="group">
      <Link href={`/book/${book.id}`} className="block">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-shrink-0 w-full md:w-64">
            <div className="relative w-full aspect-[2/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Placeholder for book cover - replace with actual image using Next.js Image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-4">
                  <span className="text-xs text-gray-400 font-sans uppercase tracking-wider">Cover Image</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl mb-3 text-balance">{book.title}</h2>
              {book.subtitle && (
                <p className="text-xl text-gray-600 mb-6 font-sans">{book.subtitle}</p>
              )}
            </div>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">{book.description}</p>
            <div className="pt-4">
              <span className="inline-flex items-center gap-2 font-sans text-sm text-gray-600 group-hover:text-gray-900 transition-colors border-b border-transparent group-hover:border-gray-900 pb-1">
                Learn more
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
