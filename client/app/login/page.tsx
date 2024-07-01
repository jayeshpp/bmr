"use client";

import { useEffect } from "react";
import { LoginForm } from "./LoginForm";
import { useRouter } from "next/navigation";
import withAuth from "@/hoc/withAuth";
import { Div } from "@/components/Div";

interface ILogin {
  isAuthenticated: boolean;
}

function Login({ isAuthenticated }: ILogin) {
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <Div className="page-main">
      <LoginForm />
    </Div>
  );
}

export default withAuth(Login);
