// import CONSTANT_VARIABLE from actions
import { CHANGE_BUTTON_COLOR } from '../actions';

const initialState = {
  buttonColor: false,
  buttonText: 'NOICE'
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_BUTTON_COLOR:
      return {
        ...state,
        buttonColor: !state.buttonColor
      };
    default:
      return state;
  }
}
