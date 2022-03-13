import React, {createContext, useState} from 'react';
import Api from '../api';

export interface FeedbackForm {email: string, feedback: string}

interface FeedbackContextType {
  isSubmitting: boolean;
  error: string;
  success: boolean;
  sendFeedback: (values: FeedbackForm, resetForm: (...rest: any) => void) => void;
  setSuccess: (success: boolean) => void;
}

const Context = createContext<FeedbackContextType>({
  isSubmitting: false,
  error: '',
  success: false,
  sendFeedback: () => {},
  setSuccess: () => {},
});

export default Context;

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

export const FeedbackContextProvider = ({children}: ContextProps) => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const sendFeedback = async (
    values: {email: string, feedback: string}, resetForm: () => void,
  ) => {
    setIsSubmitting(true);
    const feedbackError = await Api.feedback(values.email, values.feedback);

    if (feedbackError) {
      setSuccess(false);
      setError(feedbackError);
    } else {
      setSuccess(true);
      resetForm();
      setError('');
    }

    setIsSubmitting(false);
  };

  return (
    <Context.Provider
      value={{
        isSubmitting,
        sendFeedback,
        error,
        success,
        setSuccess,
      }}
    >
      {children}
    </Context.Provider>
  );
};
