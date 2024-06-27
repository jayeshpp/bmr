'use client';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import authAPI from '@/api/auth';
import { useRouter } from 'next/navigation';

interface AuthContextProps {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const defaultUser = {
  valid: false,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(defaultUser);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await authAPI.logIn({ email, password });
      const sessionData = await authAPI.checkSession();
      if (sessionData?.data) setUser(sessionData.data);
      router.push('/profile');
    } catch (error) {
      console.error('Login failed', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authAPI.logOut();
      setUser(defaultUser);
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        const sessionData = await authAPI.checkSession();
        if (sessionData?.data) setUser(sessionData.data);
        
        /* if(!sessionData?.data?.valid) {
          router.push('/');
        } */
      } catch (error) {
        setUser(defaultUser);
      } finally {
        setLoading(false);
      }
    };

    checkSession();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
