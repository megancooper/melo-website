import Link from 'next/link';
import {SuitHeartFill} from 'react-bootstrap-icons';

const Footer = () => (
  <footer>
    <div className="container mx-auto flex flex-col lg:flex-row justify-between py-5">
      <ul className="inline-flex flex-col flex-1">
        <li className="p-1">
          <Link href="/login">
            <a className="px-10" href="https://github.com/megancooper/melo-issues/issues" target="_blank" rel="noreferrer">Issues</a>
          </Link>
        </li>
        <li className="p-1">
          <Link href="/signup">
            <a className="px-10">Join Beta</a>
          </Link>
        </li>
      </ul>

      <ul className="inline-flex lg:items-end flex-col flex-1">
        <li className="p-1">
          <Link href="#">
            <a className="px-10">Privacy Policy</a>
          </Link>
        </li>
        <li className="p-1">
          <Link href="#">
            <a className="px-10">Terms And Conditions</a>
          </Link>
        </li>
        <li className="p-1">
          <a href="https://megancooper.io" target="_blank" className="px-10 flex items-center" rel="noreferrer">
            <p className="pr-2">Made with</p>
            <SuitHeartFill size={20} color="#FF2D50" />
            {' '}
            <p className="pl-2">by Megan</p>
          </a>
        </li>
        <li className="p-1">
          <p className="px-10">&copy; Megan Cooper Software, LLC All Rights Reserved</p>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;