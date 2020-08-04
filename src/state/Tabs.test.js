import React from 'react'
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import Tabs from './Tabs'

describe(`Tabs Component`, () => {
  const tabsProp = [/* contents not shown */]

  it.skip('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it.skip('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it.skip('renders the first tab by default', () => {
    const wrapper = shallow(<Tabs tabs={tabsProp} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
