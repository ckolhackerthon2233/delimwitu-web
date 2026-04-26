export default function DessertsDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-white to-warm-white">
      <div className="pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
        </div>
      </div>

      <div className="pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <div className="aspect-square rounded-2xl bg-gray-200 animate-pulse mb-6"></div>
              <div className="flex gap-3">
                <div className="w-24 h-10 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="w-full h-16 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="w-full h-24 bg-gray-200 rounded animate-pulse mb-8"></div>
                <div className="w-40 h-12 bg-gray-200 rounded animate-pulse mb-8"></div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 max-w-md">
                <div className="w-40 h-8 bg-gray-200 rounded animate-pulse mb-6"></div>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-full h-12 bg-gray-200 rounded animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
