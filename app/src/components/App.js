import React from 'react';
import {createOfflineStore} from 'redux-offline';
import {Provider} from 'react-redux';
import offlineConfig from 'redux-offline/lib/defaults';
import {appReducer} from '../reducer/index';
import {ListScreen} from './ListScreen';

const config = {
  ...offlineConfig,
  retry: (action, retries) => 4000,
  rehydrate: false
};

const store = createOfflineStore(appReducer, undefined, (a) => a, config);

export class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ListScreen />
      </Provider>
    );
  }
}
