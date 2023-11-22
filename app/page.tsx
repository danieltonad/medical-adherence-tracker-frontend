import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <Image src={Logo} alt="logo" width={80} height={80} />

      <h1 className="font-primary text-3xl font-semibold my-5">
        Welcome to Vidder5
      </h1>
      <Link
        href="/dashboard"
        className="py-2 px-6 bg-primary hover:bg-secondary text-black font-medium rounded-md"
      >
        Visit Dashboard
      </Link>
    </div>
  );
}
