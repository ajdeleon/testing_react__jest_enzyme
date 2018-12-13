import React from 'react'
import { mount } from 'enzyme'

import CommentBox from 'components/CommentBox'

let wrapped
beforeEach(() => {
  wrapped = mount(<CommentBox />)
})

it('contains text area and button', () => {
  expect(wrapped.find('textarea').length).toEqual(1)
  expect(wrapped.find('button').length).toEqual(1)
})

it('has a text area that user can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  })
  wrapped.update()

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
})

it('empties the textarea upon form submission', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'this should clear out' },
  })
  wrapped.update()
  wrapped.find('form').simulate('submit')

  expect(wrapped.find('textarea').prop('value')).toEqual('')
})

afterEach(() => {
  wrapped.unmount()
})
