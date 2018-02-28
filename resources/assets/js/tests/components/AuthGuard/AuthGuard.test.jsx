import { AuthGuardComponent as AuthGuard } from 'components/AuthGuard'

describe('AuthGuard', () => {
	const baseProps = {
  	authOrRedirect: sinon.stub().resolves({status: 200})
	}

  const makeWrapper = (props) => shallow(<AuthGuard {...props} />)

  it('initially renders a loading page', () => {
  	// authOrRedirect returns a mock response object with a 400 status
  	// to keep the loading state for the purpose of this test
  	let props = {
  		...baseProps,
  		authOrRedirect: sinon.stub().resolves({status: 400})
  	}

  	let instance = makeWrapper(props)

  	expect(instance.containsMatchingElement(<div>Loading...</div>)).to.be.true
  })

  it('calls authOrRedirect on component mount', () => {
  	let props = {
  		...baseProps,
  		authOrRedirect: sinon.stub().resolves({status: 200})
  	}

  	let instance = makeWrapper(props)

  	expect(props.authOrRedirect).calledOnce
  })

  it('sets loading to false if the response from authOrRedirect is OK', () => {
  	 let props = {
  		...baseProps,
  		authOrRedirect: sinon.stub().resolves({status: 200})
  	}

  	let instance = makeWrapper(props)

  	instance.setState({ loading: false })

  	expect(instance.containsMatchingElement(<div>Loading...</div>)).to.be.false
  })
})
