import { Card } from 'components'

describe('<Card />', () => {
  let baseProps = {

  }

  let makeWrapper = (props) => shallow(<Card {...props} />)

  it('renders a title when passed a title prop', () => {
    let props = {
      ...baseProps,
      'title': 'This is a title'
    }

    let card = makeWrapper(props)

    expect(card.containsMatchingElement(<div>This is a title</div>)).to.be.true
  })
})
