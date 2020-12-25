const initialState = {
  clips: [],
};

interface aaa {
  clip: {
    url: string;
  }
}

const reducer = (state=initialState, action:any) => {
  switch (action.type) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.clip],
      }
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter((clip:any) => clip.url !== action.clip.url)
      };
    default:
      return state;
  }
}

export default reducer;
