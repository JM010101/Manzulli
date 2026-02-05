import { books } from "@/lib/content";
import StripeButton from "@/components/StripeButton";
import DistributionLinks from "@/components/DistributionLinks";
import CheckoutMessage from "@/components/CheckoutMessage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The New Medicine of Consciousness | Manzulli",
  description: "A thoughtful exploration of consciousness and its role in healing.",
};

export default async function NMOCPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; canceled?: string }>;
}) {
  const params = await searchParams;
  const book = books.find((b) => b.id === "nmoc");

  if (!book) {
    return (
      <div className="container-custom section-spacing">
        <p>Book not found.</p>
      </div>
    );
  }

  return (
    <div className="section-spacing">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <CheckoutMessage success={params.success} canceled={params.canceled} />
          
          {/* Book Cover and Title */}
          <div className="flex flex-col md:flex-row gap-12 mb-16">
            <div className="flex-shrink-0">
              <div className="w-64 h-96 bg-gray-200 rounded-sm shadow-lg">
                {/* Placeholder for book cover */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <span className="text-sm">Book Cover</span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-serif text-4xl md:text-5xl mb-4">{book.title}</h1>
              {book.subtitle && (
                <p className="text-xl text-gray-600 mb-8">{book.subtitle}</p>
              )}
              <div className="mb-8">
                <StripeButton book={book} />
              </div>
              <DistributionLinks book={book} />
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-12">
            <h2 className="font-serif text-3xl mb-6">About the Book</h2>
            <p className="text-lg leading-relaxed text-gray-800 mb-6">
              {book.description}
            </p>
          </div>

          {/* Excerpt */}
          {book.excerpt && (
            <div className="border-l-4 border-gray-300 pl-8 py-6 mb-12 bg-gray-50">
              <h3 className="font-serif text-2xl mb-4">Excerpt</h3>
              <p className="text-lg leading-relaxed text-gray-700 italic">
                {book.excerpt}
              </p>
            </div>
          )}

          {/* Purchase Section */}
          <div className="border-t border-gray-200 pt-12">
            <h2 className="font-serif text-3xl mb-6">Purchase Options</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl mb-4">Direct Purchase</h3>
                <p className="text-gray-700 mb-4">
                  Purchase the eBook directly from this site. You'll receive instant access after payment.
                </p>
                <StripeButton book={book} />
              </div>
              <DistributionLinks book={book} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
