import { JSDOM } from 'jsdom'
import React from 'react'
import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Set up enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

chai.use(sinonChai)

// Define some html to be our basic document
// JSDOM will consume this and act as if we were in a browser
const DEFAULT_HTML = '<html><body></body></html>'

const dom = new JSDOM(DEFAULT_HTML)

global.document = dom.window.document

// Set up a mock window
global.window = dom.window

// Set up test globals for convenience
global.React = React
global.sinon = sinon
global.expect = chai.expect
global.mount = Enzyme.mount
global.shallow = Enzyme.shallow

// Allow for things like window.location
global.navigator = dom.window.navigator
