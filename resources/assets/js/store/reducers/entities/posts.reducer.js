import { postActions } from 'store/actions'
import { initialState } from 'store/initialState'
import { post as postSchema } from 'store/schemas'
import { createReducer, normalizeAndMerge } from 'store/reducers/utilities'

const {
  entities: { posts: postsState }
} = initialState

const deletePost = (state, { slug }) => {
  const newState = { ...state }

  delete newState[slug]

  return newState
}

export const postsReducer = createReducer(postsState, {
  [postActions.ADD_POST]: normalizeAndMerge('posts', postSchema, {
    singular: true
  }),
  [postActions.ADD_POSTS]: normalizeAndMerge('posts', postSchema),
  [postActions.UPDATE_POST]: normalizeAndMerge('posts', postSchema, {
    singular: true
  }),
  [postActions.DELETE_POST]: deletePost
})
