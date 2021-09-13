import React, {useContext} from 'react';

// STATE TYPES
type State = {};

// CONTEXT
const AppContext = React.createContext<State | null>(null);

export const AppProvider = ({children}) => {
  const store = {};

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppStore = () => {
  const state = useContext(AppContext);
  if (!state) throw new Error('Cannot find AppProvider');
  return state;
};
