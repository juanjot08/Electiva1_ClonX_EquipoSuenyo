// Acciones para el reducer
export const ACTIONS = {
  SET_PROFILE_INFO: "setProfileInfo",
  SET_POSTS: "setPosts",
  SET_LOADING: "setLoading",
  SET_ERROR: "setError",
};

// Reducer que maneja el estado del perfil
export const profileReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_PROFILE_INFO:
      return { ...state, profileInfo: action.payload, loading: false };
    case ACTIONS.SET_POSTS:
      return { ...state, posts: action.payload, loading: false };
    case ACTIONS.SET_LOADING:
      return { ...state, loading: action.payload };
    case ACTIONS.SET_ERROR:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};