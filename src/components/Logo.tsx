import Link from 'next/link';
import Image from 'next/image';
import {createStyles} from '@mantine/core';

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
          src="/assets/wave.png"
          alt="logo"
          height={25}
          width={25}
          quality={100}
        />
        <h1 className={classes.text}>Melo</h1>
      </div>
    </Link>
  );
};
