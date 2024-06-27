import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const {
      user: { valid: isAuthenticated },
      loading,
    } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !isAuthenticated) {
        router.push('/login'); // Redirect to login if not authenticated
      }
    }, [loading, isAuthenticated, router]);

    if (loading || !isAuthenticated) {
      return <div>Loading...</div>; // Show a loading state while checking auth
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
