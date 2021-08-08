import React, {createContext, useState} from 'react';
import Api from '../api';

interface SubscribeContextType {
  isSubscribing: boolean;
  error: string;
  success: boolean;
  subscribe: (email: string) => void;
}

const Context = createContext<SubscribeContextType>({
  isSubscribing: false,
  error: '',
  success: false,
  subscribe: () => {},
});

export default Context;

interface ContextProps {
  children: JSX.Element[] | JSX.Element;
}

export const SubscribeContextProvider = ({children}: ContextProps) => {
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const subscribe = async (email: string) => {
    setIsSubscribing(true);

    const subscribeError = await Api.subscribe(email);

    if (subscribeError) {
      setSuccess(false);
      setError(subscribeError);
    } else {
      setSuccess(true);
      setError('');
    }

    setIsSubscribing(false);
  };

  return (
    <Context.Provider
      value={{
        isSubscribing,
        subscribe,
        error,
        success,
      }}
    >
      {children}
    </Context.Provider>
  );
};
