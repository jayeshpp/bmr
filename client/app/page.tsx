'use client';

import authAPI from '@/api/auth';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import { SyntheticEvent } from 'react';

export default function Home() {
  const router = useRouter();
  const authContext = useAuth();
  console.log(authContext);

  const handleLogout = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await authAPI.logOut();
      router.push('/login');
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };
  return (
    <section className='home'>
      home
      <Button onClick={() => router.push('/login')}>Login</Button>
      {authContext.user ? <Button onClick={handleLogout}>Logout</Button> : null}
    </section>
  );
}
