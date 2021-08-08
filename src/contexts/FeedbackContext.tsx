import React, {createContext, useState} from 'react';
import {FormikHelpers} from 'formik';
import Api from '../api';

interface FeedbackContextType {
  isSubmitting: boolean;
  error: string;
  success: boolean;
  create: (email: string, feedback: string, formikContext: FormikHelpers<FeedbackForm>) => void;
  setSuccess: (success: boolean) => void;
}

const Context = createContext<FeedbackContextType>({
  isSubmitting: false,
  error: '',
  success: false,
  create: () => {},
  setSuccess: () => {},
});

export default Context;

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

interface FeedbackForm {
  email: string;
  feedback: string;
}

export const FeedbackContextProvider = ({children}: ContextProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const create = async (
    email: string, feedback: string, formikContext: FormikHelpers<FeedbackForm>,
  ) => {
    setIsSubmitting(true);
    const feedbackError = await Api.feedback(email, feedback);

    if (feedbackError) {
      setSuccess(false);
      setError(feedbackError);
    } else {
      setSuccess(true);
      formikContext.resetForm();
      setError('');
    }

    setIsSubmitting(false);
  };

  return (
    <Context.Provider
      value={{
        isSubmitting,
        create,
        error,
        success,
        setSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
};
