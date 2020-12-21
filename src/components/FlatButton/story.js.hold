import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MdWhatshot } from 'react-icons/md'

import Decorator from 'utils/storybook'

import FlatButton from '.'

storiesOf('FlatButton', module)
  .addDecorator(Decorator)
  .add('naked story', () => (
    <FlatButton onClick={action('clicked')}>
      <div style={{ fontSize: '10px' }}>Signed in as</div>
      <div>Dani Thompson</div>
    </FlatButton>
  ))
  .add('text align left', () => (
    <FlatButton textAlign="left" onClick={action('clicked')}>
      <div style={{ fontSize: '10px' }}>Signed in as</div>
      <div>Dani Thompson</div>
    </FlatButton>
  ))
  .add('primary', () => (
    <FlatButton primary onClick={action('clicked')}>
      This is a Primary FlatButton
    </FlatButton>
  ))
  .add('danger', () => (
    <FlatButton danger onClick={action('clicked')}>
      This is a Danger FlatButton
    </FlatButton>
  ))
  .add('cancel', () => (
    <FlatButton cancel onClick={action('clicked')}>
      This is a Cancel FlatButton
    </FlatButton>
  ))
  .add('primaryInvert', () => (
    <FlatButton primaryInvert onClick={action('clicked')}>
      This is a PrimaryInvert FlatButton
    </FlatButton>
  ))
  .add('success', () => (
    <FlatButton success onClick={action('clicked')}>
      This is a Success FlatButton
    </FlatButton>
  ))
  .add('submitting', () => (
    <FlatButton
      primary
      submitting
      disabled
      width={1 / 4}
      onClick={action('clicked')}
    >
      This is a submitting FlatButton
    </FlatButton>
  ))
  .add('circle button', () => (
    <FlatButton
      circle
      bg="black"
      color="white"
      overBg="pink"
      overColor="black"
      onClick={action('clicked')}
    >
      <MdWhatshot size={34} />
    </FlatButton>
  ))
  .add('disabled', () => (
    <FlatButton disabled onClick={action('clicked')}>
      This is a Disabled FlatButton
    </FlatButton>
  ))
  .add('disabled/transparent', () => (
    <FlatButton disabled transparent onClick={action('clicked')}>
      This is a Disabled transparent FlatButton
    </FlatButton>
  ))
