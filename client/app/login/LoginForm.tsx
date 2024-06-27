import { Button } from '@/components/ui/Button';
import { TextBox } from '@/components/ui/TextBox';
import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import authAPI from '@/api/auth';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const [userName, setUserName] = useState('jayeshldn@gmail.com');
  const [password, setPassword] = useState('test123');

  const router = useRouter()

  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserName(value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleLogin = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      const payload = {
        email: userName,
        password,
      };
      await authAPI.logIn(payload);
      router.push('/')
    } catch (error) {
      console.log(error);

      throw new Error('Something went wrong');
    }
  };

  return (
    <form>
      <TextBox onChange={handleUserName} label='Email ID' value={userName} />
      <TextBox onChange={handlePassword} label='Password' value={password} />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
};
