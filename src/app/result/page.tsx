import { FC } from "react";

interface PageProps {
  searchParams: { destination?: string; duration?: string };
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const { destination, duration } = searchParams;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <p className="mb-2">
          <span className="font-semibold">Destination:</span>{" "}
          {destination || "Not specified"}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Duration:</span>{" "}
          {duration ? `${duration} days` : "Not specified"}
        </p>
        {/* Add more content or components here as needed */}
      </div>
    </div>
  );
};

export default Page;
