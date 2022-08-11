import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  SET_ALERT,
  FETCH_USER,
  SET_LOADING,
} from "../type";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
        loading: false,
      };

    case FETCH_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
