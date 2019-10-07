import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'

import { NeutralButton, Select } from 'components'

const exampleOptions = [
  { label: 'Option One', value: 'option-1' },
  { label: 'Option Two', value: 'option-2' },
  { label: 'Option Three', value: 'option-3' }
]

export const AppSettingsFormComponent = ({ onSubmit, handleSubmit }) => {
  return (
    <form className="pb-8" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field
          className="mb-6"
          name="my-select-name"
          component={Select}
          options={exampleOptions}
        />
      </div>
      <NeutralButton type="submit">Submit</NeutralButton>
    </form>
  )
}

export const AppSettingsForm = compose(
  connect(
    null,
    dispatch => ({
      onSubmit: values => console.log('here are your form values', values)
    })
  ),
  reduxForm({
    form: 'appSettings'
  })
)(AppSettingsFormComponent)
