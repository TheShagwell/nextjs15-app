export default function LoadingSpinner() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="className flex flex-col gap-2">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500"></div>
          <p className="text-center text-gray-200">Loading...</p>
        </div>
      </div>
    </div>
  );
}
