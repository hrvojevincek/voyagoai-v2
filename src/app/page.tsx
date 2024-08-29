import Image from "next/image";
import VoyagoLogo from "../../public/voyagologo.svg";
import BackgroundLayout from "../components/BackgroundLayout";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

async function searchTrip(formData: FormData) {
  "use server";

  const destination = formData.get("destination");
  const date = formData.get("date");

  const searchParams = new URLSearchParams({
    destination: destination as string,
    date: date as string,
  });

  redirect(`/search?${searchParams.toString()}`);
}

export default function Home() {
  return (
    <BackgroundLayout>
      <main className="flex items-center justify-center min-h-screen flex-col">
        <Image src={VoyagoLogo} alt="Voyago Logo" className="relative mb-8" />

        <div className="w-[600px] h-[600px] aspect-square relative">
          <div className="absolute inset-0 rounded-full bg-neutral-500 bg-opacity-10 backdrop-blur-md"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
            <h1 className="font-bold text-center text-4xl md:text-5xl mb-10 text-white drop-shadow-xl">
              Let&apos;s start your
              <br /> journey!
            </h1>

            <form
              action={searchTrip}
              className="w-full flex flex-col gap-4 items-center"
            >
              <Input
                type="text"
                name="destination"
                placeholder="Where do you want to go?"
                className="w-96 text-center rounded-full py-2 px-4 bg-opacity-70 bg-neutral-100 placeholder-icon-time"
                required
              />
              <Input
                type="number"
                name="duration"
                placeholder="How many days is your trip?"
                className="w-96 text-center rounded-full py-2 px-4 bg-opacity-70 bg-neutral-100 placeholder-icon-time [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min="1"
                required
              />
              <div className="flex items-center gap-8 justify-between w-96">
                <button className=" bg-yellow-400 text-white p-2 px-4 rounded-full">
                  Log In
                </button>
                <button
                  type="submit"
                  className="font-bold bg-slate-900 p-2 px-8 text-white rounded-full"
                >
                  <ArrowRightIcon className="h-6 w-6 text-white" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}
