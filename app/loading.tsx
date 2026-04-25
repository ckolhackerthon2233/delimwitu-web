export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange"></div>
        <p className="text-sm text-gray-600 animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
