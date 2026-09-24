"use client";

import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "33100000000"; // ← Replace with your real number (no +, no spaces)
const WHATSAPP_MESSAGE = "Bonjour, je souhaite avoir des informations sur vos services.";

export function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay for a smooth entrance
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-[0_4px_20px_rgba(10,31,69,0.18)] transition-all duration-700 ease-out hover:scale-110 hover:shadow-[0_8px_30px_rgba(37,211,102,0.35)] md:bottom-8 md:right-8 md:h-[60px] md:w-[60px] ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="white"
        className="md:h-[30px] md:w-[30px]"
        aria-hidden="true"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.132 6.742 3.054 9.378L1.056 31.2l6.06-1.944a15.9 15.9 0 008.888 2.692C24.826 31.948 32 24.772 32 16.004 32 7.176 24.826 0 16.004 0zm9.298 22.594c-.39 1.098-1.936 2.01-3.146 2.276-.826.178-1.906.32-5.54-1.19-4.65-1.934-7.636-6.644-7.868-6.952-.222-.308-1.862-2.482-1.862-4.734 0-2.252 1.178-3.356 1.596-3.814.39-.428 1.028-.614 1.638-.614.198 0 .376.01.536.018.458.02.688.046.99.764.378.898 1.296 3.15 1.41 3.38.116.232.232.538.08.846-.142.318-.268.46-.498.726-.232.266-.45.47-.682.756-.214.252-.454.522-.192.98.262.458 1.164 1.92 2.502 3.112 1.718 1.53 3.166 2.004 3.614 2.226.346.172.758.142 1.03-.142.342-.358.764-.952 1.194-1.538.306-.418.692-.47 1.072-.318.384.142 2.434 1.148 2.852 1.356.418.21.696.318.798.488.1.172.1.99-.29 2.088z" />
      </svg>

      {/* Pulse ring animation */}
      <span
        className="absolute inset-0 animate-ping rounded-full opacity-20"
        style={{ backgroundColor: "#25D366" }}
        aria-hidden="true"
      />
    </a>
  );
}
