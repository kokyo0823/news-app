
import {Article} from "../../types/article";

export type AddClipAction = {
  type: "ADD_CLIP";
  clip: Article;
};

export const addClip = (props: any) => {
  const { clip } = props;
  return {
    type: "ADD_CLIP",
    clip,
  };
};

export type DeleteClipAction = {
  type: "DELETE_CLIP";
  clip: Article;
};

export const deleteClip = (props: any) => {
  const { clip } = props;
  return {
    type: "DELETE_CLIP",
    clip,
  };
};
