import { Button } from '@/components/ui/Button';
import { TextBox } from '@/components/ui/TextBox';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthProvider';

export const LoginForm = () => {
  const [userName, setUserName] = useState('jayeshldn@gmail.com');
  const [password, setPassword] = useState('test123');

  const router = useRouter();
  const { login } = useAuth();

  const handleUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setUserName(value);
  };
  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleLogin = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    login(userName, password);
  };

  return (
    <form>
      <TextBox onChange={handleUserName} label='Email ID' value={userName} />
      <TextBox onChange={handlePassword} label='Password' value={password} />
      <Button onClick={handleLogin}>Login</Button>
    </form>
  );
};
