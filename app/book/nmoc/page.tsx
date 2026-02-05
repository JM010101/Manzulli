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
        <div className="max-w-5xl mx-auto">
          <CheckoutMessage success={params.success} canceled={params.canceled} />
          
          {/* Book Cover and Title */}
          <div className="flex flex-col md:flex-row gap-16 mb-20">
            <div className="flex-shrink-0 w-full md:w-80">
              <div className="relative w-full aspect-[2/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-sm shadow-2xl overflow-hidden">
                {/* Placeholder for book cover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-4">
                    <span className="text-xs text-gray-400 font-sans uppercase tracking-wider">Book Cover</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-8">
              <div>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4 text-balance">{book.title}</h1>
                {book.subtitle && (
                  <p className="text-xl md:text-2xl text-gray-600 mb-8 font-sans">{book.subtitle}</p>
                )}
              </div>
              <div className="pt-4">
                <StripeButton book={book} />
              </div>
              <DistributionLinks book={book} />
            </div>
          </div>

          {/* Description */}
          <div className="max-w-3xl mb-16 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl mb-8">About the Book</h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              {book.description}
            </p>
          </div>

          {/* Excerpt */}
          {book.excerpt && (
            <div className="border-l-4 border-gray-300 pl-10 py-10 mb-16 bg-gray-50/50 max-w-3xl">
              <h3 className="font-serif text-2xl md:text-3xl mb-6">Excerpt</h3>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
                {book.excerpt}
              </p>
            </div>
          )}

          {/* Purchase Section */}
          <div className="border-t border-gray-200 pt-16 mt-20">
            <h2 className="font-serif text-3xl md:text-4xl mb-10">Purchase Options</h2>
            <div className="space-y-10 max-w-2xl">
              <div>
                <h3 className="font-serif text-xl md:text-2xl mb-4">Direct Purchase</h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
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
