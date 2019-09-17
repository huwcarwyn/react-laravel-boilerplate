import { compose } from 'recompose'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import React, { useEffect } from 'react'

import { ModalConsumer } from 'contexts'
import { NeutralButton, TextInput, TextArea } from 'components'
import { selectAllPosts } from 'store/selectors/posts'
import {
  getPosts as getPostsAction,
  updatePost as updatePostAction,
  createPost as createPostAction,
  deletePost as deletePostAction
} from 'store/action-creators/posts'

const PostModalComponent = ({ onSubmit, handleSubmit, initialValues }) => {
  return (
    <div>
      <h2 className="mb-2">{initialValues ? 'Edit' : 'Add'} post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          className="mb-2"
          name="title"
          placeholder="title"
          component={TextInput}
        />
        <Field
          className="mb-2"
          name="body"
          placeholder="body"
          component={TextArea}
        />
        <NeutralButton type="submit">
          {initialValues ? 'Edit' : 'Add'} Post
        </NeutralButton>
      </form>
    </div>
  )
}

const CreatePostModal = compose(
  connect(
    null,
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(createPostAction(values))
        hideModal()
      }
    })
  ),
  reduxForm({
    form: 'add-post'
  })
)(PostModalComponent)

const UpdatePostModal = compose(
  connect(
    (state, ownProps) => ({
      initialValues: ownProps
    }),
    (dispatch, { hideModal }) => ({
      onSubmit: values => {
        dispatch(updatePostAction(values))
        hideModal()
      }
    })
  ),
  reduxForm({
    form: 'update-post'
  })
)(PostModalComponent)

const OverviewComponent = ({ getPosts, deletePost, posts }) => {
  const ModalExample = props => <div>{props.message}</div>

  const populatePosts = async () => {
    await getPosts()
  }

  useEffect(() => {
    populatePosts()
  }, [])

  return (
    <div>
      Put your initial dashboard page here. This branch contains a CRUD example
      using a "Post" as a dummy example model. You can play around with that
      below and read through the code on{' '}
      <a
        target="_blank"
        href="https://github.com/huwcarwyn/react-laravel-boilerplate/tree/crud-example"
      >
        This branch
      </a>
      <div className="py-6">
        {posts.length > 0 && (
          <table className="w-full text-left mb-4">
            <thead>
              <tr>
                <th>slug</th>
                <th>title</th>
                <th>body</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(({ slug, title, body }) => (
                <tr key={slug}>
                  <td>{slug}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                  <td>
                    <span
                      className="text-red inline-block mr-6"
                      onClick={() => deletePost(slug)}
                    >
                      delete
                    </span>
                    <ModalConsumer>
                      {({ showModal }) => (
                        <span
                          onClick={() =>
                            showModal(UpdatePostModal, { slug, title, body })
                          }
                          className="text-green"
                        >
                          edit
                        </span>
                      )}
                    </ModalConsumer>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <ModalConsumer>
          {({ showModal }) => (
            <NeutralButton onClick={() => showModal(CreatePostModal)}>
              Create Post
            </NeutralButton>
          )}
        </ModalConsumer>
      </div>
      <div className="mt-4">
        <ModalConsumer>
          {({ showModal }) => (
            <NeutralButton
              onClick={() =>
                showModal(ModalExample, {
                  message: 'This message was passed in via modal props'
                })
              }
            >
              Open an example modal
            </NeutralButton>
          )}
        </ModalConsumer>
      </div>
    </div>
  )
}

export default connect(
  state => ({
    posts: selectAllPosts(state)
  }),
  dispatch => ({
    getPosts: () => dispatch(getPostsAction()),
    deletePost: id => dispatch(deletePostAction(id))
  })
)(OverviewComponent)
