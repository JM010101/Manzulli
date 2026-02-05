"use client";

import { useState } from "react";
import { Book } from "@/lib/content";

interface StripeButtonProps {
  book: Book;
}

export default function StripeButton({ book }: StripeButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePurchase = async () => {
    if (!book.stripePriceId) {
      alert("Payment processing is not yet configured. Please check back soon.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId: book.stripePriceId,
          bookId: book.id,
          bookTitle: book.title,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error processing your purchase. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePurchase}
      disabled={loading}
      className="btn-primary"
    >
      {loading ? "Processing..." : `Purchase eBook — $${book.price.toFixed(2)}`}
    </button>
  );
}
