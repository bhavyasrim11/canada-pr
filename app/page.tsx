import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-8 font-times">
          VJC Overseas
        </h1>
        <p className="text-xl text-gray-600 mb-12 font-times">
          Premium Immigration Services for canada pr & Global Visas
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/canada-pr-2026"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-xl transition-all duration-300 font-times"
          >
           Canada-pr-2026
          </Link>
          <Link
            href="/canada-pr-from-india"
            className="border-4 border-gray-800 hover:bg-gray-800 text-gray-800 hover:text-white px-12 py-6 text-xl font-semibold rounded-lg shadow-xl transition-all duration-300 font-times"
          >
           canada pr from india
          </Link>
        </div>
      </div>
    </main>
  );
}
