import sanitize from './helpers/sanitize';
import message from './helpers/message';

export default function ReduxEmitter() {
  return function middleware({ getState, dispatch }) {
    return next => action => {
      const result = next(action);

      message({
        state: sanitize(getState()),
        type: '@redux_ACTION',
        action: sanitize(action)
      });
      return result;
    };
  };
};