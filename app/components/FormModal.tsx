"use client";

export default function FormModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-2 sm:px-2">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-xl rounded-2xl bg-slate-950 border border-white/10 shadow-2xl p-6 md:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 bg-orange-500 text-white text-xl md:text-2xl font-bold w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600 transition-all duration-200 z-20"
        >
          ✕
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
