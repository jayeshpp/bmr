"use client";

import { useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { useRouter } from "next/navigation";
import withAuth from "@/hoc/withAuth";

interface ILogin {
  isAuthenticated: boolean;
}

function Login({ isAuthenticated }: ILogin) {
  const router = useRouter();
  console.log(isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, []);

  return (
    <section>
      <LoginForm />
    </section>
  );
}

export default withAuth(Login);
