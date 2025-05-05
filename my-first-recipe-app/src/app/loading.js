export default function Loading() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 flex flex-col items-center justify-center space-y-8">
        {/* Spinner & Message */}
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-orange-500 border-opacity-75 mb-4"></div>
          <h1 className="text-xl md:text-2xl font-semibold text-center text-gray-700">
            Please wait while we load your delicious content...
          </h1>
        </div>
  
        {/* Skeleton Card Loader */}
        <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-4 animate-pulse space-y-4">
          <div className="w-full h-48 bg-gray-300 rounded-md"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }
  