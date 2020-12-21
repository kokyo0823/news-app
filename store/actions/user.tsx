const ADD_CLIP = 'app/example/ADD_CLIP' as const;
const DELETE_CLIP = 'app/example/DELETE_CLIP' as const;

export const addClip = (props: any) => {
  const { clip } = props;
  return {
    type: ADD_CLIP,
    clip,
  };
};

export const deleteClip = (props: any) => {
  const { clip } = props;
  return {
    type: DELETE_CLIP,
    clip,
  };
};
