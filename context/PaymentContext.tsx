import React, { ReactNode, createContext, useState } from 'react';

export type PaymentTypeContext = {
    payment: number;
    setPayment: (payment: number) => void;
    clear: () => void;
  };
  
  const defaultValue = {
    payment: 0,
    setPayment: () => null,
    clear: () => {}
  };

export const PaymentContext = createContext<PaymentTypeContext>(defaultValue);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [payment, setPayment] = useState(0);
  const clear = () => {
    setPayment(0)
  };

  return (
    <PaymentContext.Provider value={{ payment, setPayment, clear }}>
      {children}
    </PaymentContext.Provider>
  );
};
