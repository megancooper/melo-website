import Link from 'next/link';
import {createStyles} from '@mantine/core';
import Image from './Image';

const useStyles = createStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },

  text: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#333333',
    marginLeft: '0.5rem',
  },
}));

export default () => {
  const {classes} = useStyles();

  return (
    <Link href="/">
      <div className={classes.wrapper}>
        <Image
          src="wave.png"
          alt="logo"
          height="25"
          width="25"
        />
        <h1 className={classes.text}>Melo</h1>
      </div>
    </Link>
  );
};
