import P from 'prop-types';
import { CounterContext } from './context';
import { reducer } from './reducer';
import { data } from './data';
import { useReducer } from 'react';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);
  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};