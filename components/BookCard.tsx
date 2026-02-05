import Link from "next/link";
import { Book } from "@/lib/content";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="group">
      <Link href={`/book/${book.id}`} className="block">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <div className="w-48 h-72 bg-gray-200 rounded-sm shadow-md group-hover:shadow-lg transition-shadow">
              {/* Placeholder for book cover - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                <span className="text-sm">Cover Image</span>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="font-serif text-3xl mb-2">{book.title}</h2>
            {book.subtitle && (
              <p className="text-lg text-gray-600 mb-4">{book.subtitle}</p>
            )}
            <p className="text-gray-700 mb-4 leading-relaxed">{book.description}</p>
            <span className="inline-block font-sans text-sm text-gray-600 underline-offset-2 group-hover:text-gray-900 transition-colors">
              Learn more →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
