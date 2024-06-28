import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';
import { getFullName } from '@/lib/utils';

interface UserPayload {
  userId: string;
  fullName: string;
  email: string;
}

const withAuth = <P extends object>(WrappedComponent: React.ComponentType<P & UserPayload>): React.FC<P> => {
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
    };

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/login');
      }
    }, [loading, isAuthenticated, router]);

    if (loading || !isAuthenticated) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...userPayload} {...props} />;
  };
};

export default withAuth;
