import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import VoyagoLogo from "../../public/voyagologo.svg";

export default function Home() {
  const image =
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";

  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <div className="absolute h-full w-full">
        <Image
          src={image}
          fill
          className="object-cover"
          alt="plane wing in the sky"
        />
      </div>

      <Image src={VoyagoLogo} alt="Voyago Logo" className="relative mb-8" />

      <div className="relative w-[600px] h-[600px]">
        <div className="absolute rounded-full w-full h-full bg-neutral-500 bg-opacity-10 backdrop-blur-md"></div>
        <div className="relative h-[600px] flex flex-col justify-center items-center z-10">
          {/* <SearchTitle serverSession={session} /> */}

          <div className="mt-4">
            {/* <SearchForm serverSession={session} /> */}
          </div>
        </div>
      </div>
    </main>
  );
}
