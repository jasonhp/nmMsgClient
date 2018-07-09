// @flow
// import type { counterStateType } from '../reducers/counter';

// type actionType = {
//   +type: string
// };

export const FILL_USER = 'FILL_USER';
export const FILL_MESSAGE = 'FILL_MESSAGE';

export function fillUser() {
  return {
    type: FILL_USER
  };
}

export function fillMsg() {
  return {
    type: FILL_MESSAGE
  };
}

// export function incrementIfOdd() {
//   return (
//     dispatch: (action: actionType) => void,
//     getState: () => counterStateType
//   ) => {
//     const { counter } = getState();
//
//     if (counter % 2 === 0) {
//       return;
//     }
//
//     dispatch(increment());
//   };
// }
//
// export function incrementAsync(delay: number = 1000) {
//   return (dispatch: (action: actionType) => void) => {
//     setTimeout(() => {
//       dispatch(increment());
//     }, delay);
//   };
// }
