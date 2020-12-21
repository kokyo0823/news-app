import { CardStyleInterpolators } from "@react-navigation/stack";
import { addClip, deleteClip } from "../actions/user";

const ADD_CLIP = 'app/example/ADD_CLIP' as const;
const DELETE_CLIP = 'app/example/DELETE_CLIP' as const;

interface mold {
  clips: {url:string}[],
}

const initialState: mold = {
  clips: []
};

interface AppState {
  clips: {url:string}[],
}

type Actions = (
  | ReturnType<typeof addClip>
  | ReturnType<typeof deleteClip>
);

const reducer = (state : AppState =initialState, action:Actions) => {
  switch (action.type) {
    case ADD_CLIP:
      return {
        ...state,
        clips: [...state.clips, action.clip]
      }
    case DELETE_CLIP:
      return {
        ...state,
        clips: state.clips.filter(clip => clip.url !== action.clip.url)
      };
    default:
      return state;
  }
}

export default reducer;
