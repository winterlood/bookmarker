import {apptypes} from '@apptypes';
import React, {useContext, useState} from 'react';

// STATE TYPES
type State = {
  labelList: apptypes.LabelItem[];
  bookmarkList: apptypes.BookmarkItem[];
};

type Store = {
  labelList: apptypes.LabelItem[];
  bookmarkList: apptypes.BookmarkItem[];
};

// CONTEXT
const AppContext = React.createContext<Store | null>(null);

const initialState: State = {
  labelList: [],
  bookmarkList: [],
};
export const AppProvider = ({children}) => {
  const [state, setState] = useState(initialState);

  const store = {
    labelList: state.labelList,
    bookmarkList: state.bookmarkList,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export const useAppStore = () => {
  const state = useContext(AppContext);
  if (!state) throw new Error('Cannot find AppProvider');
  return state;
};
