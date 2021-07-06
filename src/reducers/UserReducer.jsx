export const initialState = {
  avatar: '',
  favorites: [],
  appointments: [4],
};

export function UserReducer(state, action) {
  switch (action.type) {
    case 'setAvatar':
      return { ...state, avatar: action.payload.avatar };

    default:
      return state;
  }
}
