import {combineReducers} from 'redux';

export const reducer = (state = [], action) => {
  console.log('Action', action.type);

  if (action.type === 'NAME_CREATE_START') {
    return [...state, {...action.payload, local: true}];
  }

  if (action.type === 'NAME_CREATE_SUCCESS') {
    if (state.find(n => n.name === action.payload.name)) {
      return state.map(n => n.name === action.payload.name ? action.payload : n);
    } else {
      return [...state, {...action.payload}];
    }
  }

  if (action.type === 'NAME_CREATE_ERROR') {
    return state.filter(n => n.name !== action.meta.name);
  }

  return state;
};

export const appReducer = combineReducers({
  names: reducer,
});
