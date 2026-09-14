import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="min-h-[30vh] flex items-center justify-center">
      <div
        className="h-6 w-6 animate-spin rounded-full border-2 border-gray-300 border-t-gray-900"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
