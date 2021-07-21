import Link from 'next/link';
import Hamburger from './hamburger';
import Button from '../button';

const Header = () => (
  <nav className="mt-2">
    <div className="container mx-auto px-6 py-2 flex justify-between items-center">
      <ul className="inline-flex items-center">
        <li>
          <Link href="/">
            <a className="font-bold text-2xl lg:text-4xl mr-5">
              Melo
            </a>
          </Link>
        </li>
        {/* <li className="hidden lg:block">
          <Link href="/about">
            <a className="px-4 hover:text-gray-800">About</a>
          </Link>
        </li>
        <li className="hidden lg:block">
          <Link href="/pricing">
            <a className="px-4 hover:text-gray-800">Pricing</a>
          </Link>
        </li> */}
      </ul>

      <Hamburger />

      <div className="hidden lg:block">
        <ul className="inline-flex flex-col items-center lg:flex-row">
          <li>
            <a className="px-4 hover:text-gray-800" href="https://github.com/megancooper/melo-issues/issues" target="_blank" rel="noreferrer">Issues</a>
          </li>
          <li>
            <Button disabled>Join Beta</Button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
