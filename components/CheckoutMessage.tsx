"use client";

import { useEffect, useState } from "react";

interface CheckoutMessageProps {
  success?: string;
  canceled?: string;
}

export default function CheckoutMessage({ success, canceled }: CheckoutMessageProps) {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (success === "true") {
      setMessage("Thank you for your purchase! Your eBook download link has been sent to your email.");
      setShowMessage(true);
      // Remove query params from URL
      window.history.replaceState({}, "", window.location.pathname);
    } else if (canceled === "true") {
      setMessage("Purchase canceled. You can try again whenever you're ready.");
      setShowMessage(true);
      // Remove query params from URL
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [success, canceled]);

  if (!showMessage) return null;

  return (
    <div
      className={`mb-8 p-4 rounded-sm border ${
        success === "true"
          ? "bg-green-50 border-green-200 text-green-900"
          : "bg-gray-50 border-gray-200 text-gray-900"
      }`}
    >
      <p className="font-sans text-sm">{message}</p>
      <button
        onClick={() => setShowMessage(false)}
        className="mt-2 font-sans text-xs underline hover:text-gray-600 transition-colors"
      >
        Dismiss
      </button>
    </div>
  );
}
