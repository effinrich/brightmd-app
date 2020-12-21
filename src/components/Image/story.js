import React from 'react'
import { storiesOf } from '@storybook/react'

import Decorator from 'utils/storybook'

import Image from '.'

storiesOf('Image', module)
  .addDecorator(Decorator)
  .add('naked story', () => (
    <Image
      src="https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg"
      alt="kitty"
    />
  ))
  .add('thumb w/maxWidth', () => (
    <Image
      src="https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg"
      alt="kitty"
      thumb
      maxWidth={300}
    />
  ))
  .add('w/border', () => (
    <Image
      src="https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg"
      alt="kitty"
      border
    />
  ))
  .add('w/border color', () => (
    <Image
      src="https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg"
      alt="kitty"
      borderColor="#ff9900"
    />
  ))
  .add('w/missing image', () => <Image src="brokenimageurl.com" alt="kitty" />)
  .add('w/altImage prop and broken image', () => (
    <Image
      src="https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg"
      alt="kitty"
      altImage
    />
  ))
