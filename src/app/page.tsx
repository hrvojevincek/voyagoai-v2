// pages/index.js
import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import VoyagoLogo from "../../public/voyagologo.svg";
import BackgroundLayout from "../components/BackgroundLayout";

export default function Home() {
  return (
    <BackgroundLayout>
      <main className="flex flex-col justify-center items-center min-h-screen">
        {/* <div className="absolute top-4 right-4 z-20">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div> */}

        <div className="flex flex-col items-center max-w-4xl w-full px-4">
          <Image
            src={VoyagoLogo}
            alt="Voyago Logo"
            className="mb-8 w-64 h-auto"
          />

          <div className="w-full max-w-2xl aspect-square relative">
            <div className="absolute inset-0 rounded-full bg-neutral-500 bg-opacity-10 backdrop-blur-md"></div>
            <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
              <h1 className="font-bold text-center text-4xl md:text-5xl mb-10 text-white drop-shadow-xl">
                Lets start your journey
              </h1>

              <div className="w-full max-w-md">
                {/* <SearchForm /> */}
                {/* Placeholder for SearchForm */}
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-black text-center">
                    Search form placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BackgroundLayout>
  );
}
