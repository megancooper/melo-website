import cx from 'classnames';
import Link from 'next/link';
import {useState, useRef} from 'react';
import {List, X} from 'react-bootstrap-icons';
import useOutsideClick from '../../hooks/useOutsideClick';

const Hamburger = () => {
  const hamburgerMenu = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsMenuOpen(false);
  };

  useOutsideClick(hamburgerMenu, handleClose);

  return (
    <>
      <div className="block lg:hidden">
        <button
          ref={hamburgerMenu}
          type="button"
          className="flex items-center px-3 py-2 appearance-none focus:outline-none bg-white hover:bg-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <List size={30} />
        </button>
      </div>

      <div
        className={cx(
          !isMenuOpen && 'hidden',
        )}
      >
        <X
          className="absolute right-2 top-1.5 z-20 cursor-pointer"
          size={35}
          onClick={handleClose}
        />
        <ul className="inline-flex flex-col absolute top-0 left-0 z-10 w-screen bg-theme shadow">
          {/* <li className="p-3">
            <Link href="/about">
              <a className="px-10 hover:text-gray-800">About</a>
            </Link>
          </li>
          <li className="p-3">
            <Link href="/pricing">
              <a className="px-10 hover:text-gray-800">Pricing</a>
            </Link>
          </li> */}
          <li className="p-3">
            <a className="px-10 hover:text-gray-800" href="https://github.com/megancooper/melo-issues/issues" target="_blank" rel="noreferrer">Issues</a>
          </li>
          <li className="p-3">
            <Link href="/signup">
              <a className="px-10 hover:text-gray-800">Join Beta</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Hamburger;
