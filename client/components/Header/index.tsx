import Image from 'next/image';

export const Header = () => (
  <header className='h-[150px] px-5 flex items-center justify-center'>
    <Image
      src='/assets/images/logo.png'
      width={120}
      height={52}
      alt='Picture of the author'
    />
  </header>
);
