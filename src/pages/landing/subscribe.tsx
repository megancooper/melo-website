import React, {useContext} from 'react';
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

const Subscribe = () => {
  const {
    isSubscribing, subscribe, success, error,
  } = useContext(SubscribeContext);

  const handleSubscribe = (values: {email: string}) => subscribe(values.email);

  const getButtonBackground = () => {
    if (success) return '#7BCA8E';

    return '#6386F8';
  };

  const getButtonContent = () => {
    if (success) {
      return (
        <div className="flex items-center">
          <span className="text-white">Thanks!</span>
          <Check color="#FFF" size={25} className="m-auto" />
        </div>
      );
    }

    return 'Stay Updated';
  };

  return (
    <div style={{backgroundColor: '#8AA4F9'}}>
      <div className="container mx-auto px-6 py-2 lg:px-48 lg:pb-0 flex justify-center items-center my-20 flex-col lg:flex-row relative">
        <div className="text-lg font-semibold tracking-wide mb-8 lg:mb-0 lg:mr-8">
          Join the mailing list&nbsp;&nbsp;👉&nbsp; 📩 &nbsp;&nbsp;
          <div
            className="text-xs error mt-2 font-normal"
            style={{color: '#333'}}
          >
            {error}
          </div>
        </div>
        <Formik
          enableReinitialize
          initialValues={{email: ''}}
          validationSchema={validationSchema}
          onSubmit={handleSubscribe}
        >
          {({handleSubmit}) => (
            <div className="flex items-center flex-col lg:flex-row relative">
              <Field
                placeholder="Enter your email"
                type="email"
                name="email"
                className="mb-4 lg:mr-2 lg:mb-0 flex-grow shadow"
                style={{width: 300}}
              />
              <Button
                onClick={() => handleSubmit()}
                className="email-button w-full lg:w-auto"
                style={{backgroundColor: getButtonBackground(), padding: '0.6rem'}}
              >
                {isSubscribing ? <BeatLoader size={7} color="#8AA4F9" /> : getButtonContent()}
              </Button>
            </div>
          )}
        </Formik>
      </div>

    </div>
  );
};

export default Subscribe;
