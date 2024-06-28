import Link from 'next/link';
import { Hamburger } from '../Hamburger';
import { useTheme } from '@/context/ThemeProvider';

interface IHeader {
  handleOpenPane: () => void;
}

export const Header = ({ handleOpenPane }: IHeader) => {
  const { theme, toggleTheme } = useTheme();
  return(
  <header className='h-[50px] px-5 flex items-center gap-3 bg-gray-200 justify-between'>
    <div className='flex gap-3 items-center'>
      <Hamburger onClick={handleOpenPane} />
      <Link href='/'>
        BM Riders
      </Link>
    </div>
    <div><button
      onClick={toggleTheme}
      className="p-2 bg-blue-500 text-white rounded"
    >
      {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
    </button></div>
  </header>
)};
