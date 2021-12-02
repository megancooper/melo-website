import React, {useContext} from 'react';
import Image from 'next/image';
import {Formik, Field} from 'formik';
import {BeatLoader} from 'react-spinners';
import * as Yup from 'yup';
import {Check} from 'react-bootstrap-icons';
import SubscribeContext from '../../contexts/SubscribeContext';
import Button from '../../components/button';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(1, 'You must enter an email.')
    .email('Please enter a valid email.')
    .required('Email is required.'),
});

const Blurb: React.FC = () => {
  const {
    isSubscribing, subscribe, success, error,
  } = useContext(SubscribeContext);

  const handleSubscribe = (values: {email: string}) => subscribe(values.email);

  const getButtonBackground = () => {
    if (success) return '#7BCA8E';

    return undefined;
  };

  const getButtonContent = () => {
    if (success) return <Check color="#FFF" size={25} className="m-auto" />;

    return 'Stay Updated';
  };

  return (
    <div className="container mx-auto px-6 py-2 lg:pb-0 flex justify-between items-center mt-20">
      <div className="hidden lg:inline-block mr-10">
        <Image
          src="/assets/melo-screenshot.png"
          alt="scrumy-list design"
          width={1000}
          height={700}
          priority
          placeholder="blur"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-3">
          Simple
          {' '}
          <br />
          {' '}
          customizable
          {' '}
          <br />
          {' '}
          music player.
        </h1>
        <p>
          Melo is a simple music organizer built to help you play and manage
          audio files on your computer.
        </p>

        <div className="mt-10 flex flex-col lg:flex-row">
          <Formik
            enableReinitialize
            initialValues={{email: ''}}
            validationSchema={validationSchema}
            onSubmit={handleSubscribe}
          >
            {({handleSubmit}) => (
              <>
                <Field
                  placeholder="Enter your email"
                  type="email"
                  name="email"
                  className="mb-4 lg:mr-2 lg:mb-0 flex-grow"
                />
                <Button
                  onClick={handleSubmit}
                  className="email-button"
                  style={{backgroundColor: getButtonBackground()}}
                >
                  {isSubscribing ? <BeatLoader size={8} color="white" /> : getButtonContent()}
                </Button>
              </>
            )}
          </Formik>
        </div>
        <div className="text-xs error mt-2">{error}</div>
      </div>
    </div>
  );
};

export default Blurb;

// export async function getServerSideProps(context: AppContext) {
//   console.log({context});
//   let currentBetaUsers = null;

//   const res = await fetch(`${process.env.MELO_API}/current-beta-users`);

//   if (res.ok) {
//     const data = await res.json();
//     console.log({data});
//     currentBetaUsers = data.count;
//   }

//   return {
//     props: {
//       currentBetaUsers,
//     },
//   };
// }
