const URL = 'http://localhost:4242/names';
const headers = {'content-type': 'application/json'};

export const api = {

  addV1: (dispatch, name) => {
    fetch(URL, {method: 'POST', body: JSON.stringify({name}), headers})
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'NAME_CREATE_SUCCESS',
          payload: data
        })
      );
  },

  addV2: (dispatch, name) => {
    dispatch({
      type: 'NAME_CREATE_START',
      payload: {name},
    });

    fetch(URL, {method: 'POST', body: JSON.stringify({name}), headers})
      .then(res => res.json())
      .then(data =>
        dispatch({
          type: 'NAME_CREATE_SUCCESS',
          payload: data
        })
      )
      .catch(() => {
        dispatch({
          type: 'NAME_CREATE_ERROR',
          meta: {name}
        })
      });
  },

  addV3: (dispatch, name) => {
    dispatch({
      type: 'NAME_CREATE_START',
      payload: {name},
      meta: {
        offline: {
          // the network action to execute:
          effect: {url: 'http://localhost:4242/names', method: 'POST', body: JSON.stringify({name})},
          // action to dispatch when effect succeeds:
          commit: {type: 'NAME_CREATE_SUCCESS'},
          // action to dispatch if network action fails permanently:
          rollback: {type: 'NAME_CREATE_ERROR', meta: {name}}
        }
      }
    })

  }

};
