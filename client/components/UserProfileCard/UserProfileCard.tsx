import { useAuth } from '@/context/AuthProvider';
import { getFullName } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const UserProfileCard = () => {
  const {
    user: { valid, firstName, lastName, email },
  } = useAuth();

  if (!valid)
    return (
      <div className='bg-gray-200 p-4 flex gap-2 items-center'>
        <Link href='/login' className='block p-2'>
          Login
        </Link>{' '}
        /{' '}
        <Link href='/register' className='block p-2'>
          Register
        </Link>
      </div>
    );

  const fullName = getFullName({ firstName, lastName });

  return (
    <div className='bg-gray-200 p-4'>
      <Image
        src={`/assets/images/placeholder.jpg`}
        width={100}
        height={100}
        alt={fullName}
      />
      <div>{fullName}</div>
      <div>{email}</div>
    </div>
  );
};
