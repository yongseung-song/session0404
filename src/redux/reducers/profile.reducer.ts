const SET_PROFILE = 'SET_PROFILE';
const UPDATE_NICKNAME = 'UPDATE_NICKNAME';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';

type Action = {
  type: string;
  payload?: any;
};

export type ProfileState = {
  id: string | null;
  nickname: string | null;
  description: string | null;
  avatarImgUrl: string | null;
};

const initialState: ProfileState = {
  id: null,
  nickname: null,
  description: null,
  avatarImgUrl: null,
};

function profileReducer(prevState = initialState, action: Action) {
  const nextState = { ...prevState };

  switch (action.type) {
    case SET_PROFILE:
      const { id, nickname, description, avatarImgUrl } =
        action.payload as ProfileState;
      nextState.id = id;
      nextState.nickname = nickname;
      nextState.description = description;
      nextState.avatarImgUrl = avatarImgUrl;
      break;
    case UPDATE_NICKNAME:
      nextState.nickname = action.payload as string;
      break;
    case UPDATE_DESCRIPTION:
      nextState.description = action.payload as string;
      break;
  }

  return nextState;
}

export const setProfile = (profile: ProfileState) => ({
  action: SET_PROFILE,
  payload: profile,
});
export const updateNickname = (nickname: string) => ({
  action: UPDATE_NICKNAME,
  payload: nickname,
});
export const updateDescription = (description: string) => ({
  action: UPDATE_DESCRIPTION,
  payload: description,
});

export default profileReducer;
