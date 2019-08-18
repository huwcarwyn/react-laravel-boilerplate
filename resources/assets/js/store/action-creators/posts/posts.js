import axios from 'axios'

import { postActions as actions } from 'store/actions'
import { makeRequest } from 'store/action-creators/requests'

export const getPosts = () => async dispatch => {
  const response = await dispatch(
    makeRequest('get-posts', () => axios.get(`/api/posts`))
  )

  dispatch({
    type: actions.ADD_POSTS,
    posts: response.data.data
  })
}

export const createPost = data => async dispatch => {
  const response = await dispatch(
    makeRequest('create-post', () => axios.post(`/api/posts`, data))
  )

  dispatch({
    type: actions.ADD_POST,
    posts: response.data.data
  })
}

export const updatePost = data => async dispatch => {
  const response = await dispatch(
    makeRequest(`update-post-${data.slug}`, () =>
      axios.put(`/api/posts/${data.slug}`, data)
    )
  )

  dispatch({
    type: actions.UPDATE_POST,
    posts: response.data.data
  })
}

export const deletePost = slug => async dispatch => {
  await dispatch(
    makeRequest(`update-post-${slug}`, () => axios.delete(`/api/posts/${slug}`))
  )

  dispatch({
    type: actions.DELETE_POST,
    slug
  })
}
