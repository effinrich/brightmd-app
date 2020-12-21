import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Decorator from 'utils/storybook'

import Heading from '.'

storiesOf('Text/Heading', module)
  .addDecorator(Decorator)
  .add('default', () => <Heading size={1}>Charlie Bronson</Heading>)
  .add('h2 w/align right', () => (
    <Heading size={2} textAlign="right">
      Charlie Bronson
    </Heading>
  ))
  .add('h3 w/align center', () => (
    <Heading size={3} textAlign="center">
      Charlie Bronson
    </Heading>
  ))
  .add('h4 w/color', () => (
    <Heading size={4} color="red">
      Charlie Bronson
    </Heading>
  ))
  .add('h1 w/light', () => (
    <Heading size={1} light>
      Charlie Bronson
    </Heading>
  ))
  .add('h1 w/regular', () => (
    <Heading size={1} regular>
      Charlie Bronson
    </Heading>
  ))
  .add('h1 w/light + grey', () => (
    <Heading size={1} grey light>
      Charlie Bronson
    </Heading>
  ))
