import { HYDRATE } from 'next-redux-wrapper';

const initData = {
  isOpen: false,
  variant: '',
  message: '',
};

export function snackbar(state = initData, action) {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case 'OPEN_SNACKBAR':
      return {
        isOpen: true,
        ...action,
      };
    default:
      return state;
  }
}
