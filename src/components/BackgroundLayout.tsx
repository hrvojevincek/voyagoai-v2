// components/BackgroundLayout.js
import Image from "next/image";

export default function BackgroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const backgroundImage =
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80";

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Image
        src={backgroundImage}
        fill
        quality={100}
        alt="Airplane wing in the sky"
        priority
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
