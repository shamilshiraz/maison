const WhatsAppButton = () => {
  const phoneNumber = "919072142328";
  const message = "Hi! I'm interested in your products.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-[#000] px-4 py-4 text-white shadow-lg transition-transform duration-300 hover:scale-105"
      aria-label="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className=" h-6 w-6"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .13 5.34.13 11.91c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.9 11.9 0 0 0 5.74 1.46h.01c6.56 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.44-8.43ZM12.05 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.27C2.18 6.45 6.61 2.02 12.05 2.02c2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.9 7c0 5.44-4.43 9.88-9.89 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.23-.66.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.36.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.66-.94-2.28-.25-.6-.5-.52-.69-.53h-.59c-.2 0-.53.08-.81.38-.28.3-1.06 1.04-1.06 2.55s1.09 2.96 1.24 3.16c.15.2 2.15 3.28 5.21 4.6.73.32 1.3.51 1.74.65.73.23 1.39.2 1.91.12.58-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.08-.13-.28-.2-.58-.35Z" />
      </svg>

    </a>
  );
};

export default WhatsAppButton;