"use client";

import { useAuth } from "@/context/AuthProvider";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const authContext = useAuth();

  return (
    <section className="home">
      <div className="py-5">
        <Image
          src="/assets/images/logo.png"
          width={120}
          height={52}
          priority
          className="m-auto"
          alt="Picture of the author"
        />
      </div>
    </section>
  );
}
