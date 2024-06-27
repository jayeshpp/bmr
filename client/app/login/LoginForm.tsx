import { Button } from '@/components/ui/Button';
import { TextBox } from '@/components/ui/TextBox';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import authAPI from '@/api/auth';
import { redirect } from 'next/navigation';

export const LoginForm = () => {
  const [userName, setUserName] = useState('jayeshldn@gmail.com');
  const [password, setPassword] = useState('test123');

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
      //redirect('/')
    } catch (error) {
      console.log(error);

      throw new Error('Something went wrong');
    }
  };
  const handleLogout = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await authAPI.logOut();
      //redirect('/')
    } catch (error) {
      throw new Error('Something went wrong');
    }
  };

  return (
    <form>
      <TextBox onChange={handleUserName} label='Email ID' value={userName} />
      <TextBox onChange={handlePassword} label='Password' value={password} />
      <Button onClick={handleLogin}>Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </form>
  );
};
