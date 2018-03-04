import React from 'react'

import { Card, CardContent } from 'components'

export const FormPageLayout = (props) => (
  <Card className="max-w-md mt-20 mx-auto">
    <CardContent>
      <h1 className="text-center text-grey-darkest mb-4">{props.title}</h1>
      {props.children}
    </CardContent>
  </Card>
)
