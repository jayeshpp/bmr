import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { getFullName } from "@/lib/utils";

export interface UserPayload {
  userId: string;
  fullName: string;
  email: string;
  isAuthenticated: boolean;
}

const withAuth = <P extends object>(
  WrappedComponent: React.ComponentType<P & UserPayload>,
): React.FC<P> => {
  // eslint-disable-next-line react/display-name
  return (props: P) => {
    const {
      user: { valid: isAuthenticated, id, firstName, lastName, email },
      loading,
    } = useAuth();
    const router = useRouter();

    const userPayload: UserPayload = {
      userId: id,
      fullName: getFullName({ firstName, lastName }),
      email,
      isAuthenticated,
    };

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push("/login");
      }
    }, [loading, isAuthenticated, router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...userPayload} {...props} />;
  };
};

export default withAuth;
