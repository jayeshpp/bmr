import Link from 'next/link';
import { Hamburger } from '../Hamburger';

interface IHeader {
  handleOpenPane: () => void;
}

export const Header = ({ handleOpenPane }: IHeader) => (
  <header className='h-[50px] px-5 flex items-center gap-3'>
    <Hamburger onClick={handleOpenPane} />
    <Link href='/'>
      BM Riders
    </Link>
  </header>
);
