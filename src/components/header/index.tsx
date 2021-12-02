import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './hamburger';
import Button from '../button';

const Header = () => (
  <nav className="mt-2">
    <div className="container mx-auto px-6 py-2 flex justify-between items-center">
      <ul className="inline-flex items-center">
        <li className="inline-flex items-center">
          <Image
            src="/assets/melo.png"
            alt="headphones"
            height={50}
            width={50}
          />
          <Link href="/">
            <a className="font-bold text-2xl lg:text-4xl mr-5 ml-4">
              Melo
            </a>
          </Link>
        </li>
      </ul>

      <Hamburger />

      <div className="hidden lg:block">
        <ul className="inline-flex flex-col items-center lg:flex-row">
          <li>
            <Link href="/why">
              <a className="px-4 hover:text-gray-800">Why?</a>
            </Link>
          </li>
          <li>
            <a href="https://docs.melo-app.org" className="px-4 hover:text-gray-800">Docs</a>
          </li>
          <li>
            <Link href="/feedback">
              <Button>👉 Give Feedback</Button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Header;
