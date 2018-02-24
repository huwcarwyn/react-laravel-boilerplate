import { AuthGuardComponent as AuthGuard } from 'components/AuthGuard'

describe('AuthGuard', () => {
  const makeWrapper = (props) => shallow(<AuthGuard {...props} />)

  it('initially renders a loading page', () => {

  })

  it('calls authOrRedirect on component mount', () => {

  })

  it('sets loading to false if the response from authOrRedirect is OK', () => {

  })
})
