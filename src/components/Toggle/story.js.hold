import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Decorator from 'utils/storybook'
import { Padding } from 'components/StoryDecorators'
import Toggle from '.'

storiesOf('Toggle', module)
  .addDecorator(Decorator)
  .add('untouched', () => (
    <Padding>
      <Toggle name="toggle" onChange={action('onChange')} />
    </Padding>
  ))
  .add('touched', () => (
    <Padding>
      <Toggle name="toggle" checked onChange={action('onChange')} />
    </Padding>
  ))
  .add('disabled', () => (
    <Padding>
      <Toggle name="toggle" disabled onChange={action('onChange')} />
    </Padding>
  ))
  .add('w/toggleText', () => (
    <Padding>
      <Toggle
        name="toggle"
        onChange={action('onChange')}
        toggleText={['Off', 'On']}
      />
    </Padding>
  ))
  .add('w/error', () => (
    <Padding>
      <Toggle name="toggle" checked error onChange={action('onChange')} />
    </Padding>
  ))
  .add('w/warning', () => (
    <Padding>
      <Toggle name="toggle" checked warning onChange={action('onChange')} />
    </Padding>
  ))
