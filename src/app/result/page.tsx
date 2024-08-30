import Map from "@/components/Map";
import { FC } from "react";

interface PageProps {
  searchParams: { destination?: string; duration?: string };
}

const Page: FC<PageProps> = async ({ searchParams }) => {
  const { destination, duration } = searchParams;

  return (
    <div className="flex h-screen w-screen">
      <div>
        <h1 className="text-2xl font-bold mb-4">Search Results</h1>
        <p className="mb-2">
          <span className="font-semibold">Destination:</span>{" "}
          {destination || "Not specified"}
        </p>
        <p className="mb-2">
          <span className="font-semibold">Duration:</span>{" "}
          {duration ? `${duration} days` : "Not specified"}
        </p>
      </div>
      <div className=" flex-grow">
        <Map />
      </div>
    </div>
  );
};

export default Page;
