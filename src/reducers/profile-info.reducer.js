// Acciones para el reducer
export const ACTIONS = {
  SET_PROFILE_INFO: "setProfileInfo",
  SET_POSTS: "setPosts",
  SET_LOADING: "setLoading",
  SET_ERROR: "setError",
  SET_FOLLOWING: "setFollowing",
  SET_FOLLOWERS: "setFollowers",
  SET_USERS: "setUsers",
  SET_FOLLOW_COUNTERS: "setFollowCounters",
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
    case ACTIONS.SET_FOLLOWING:
      return { ...state, following: action.payload, loading: false };
    case ACTIONS.SET_FOLLOWERS:
      return { ...state, followers: action.payload, loading: false };
    case ACTIONS.SET_USERS:
      return { ...state, users: action.payload, loading: false };
    case ACTIONS.SET_FOLLOW_COUNTERS:
      return { ...state, followCounters: action.payload, loading: false };
    default:
      return state;
  }
};
