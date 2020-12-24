import React, { useState } from 'react'
import PropTypes from 'prop-types'

import StyledImage from './style'
import spinner from './spinner.gif'

const propTypes = {
  // image src
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  // Crops image to square if true
  thumb: PropTypes.bool,
  // Sets a border around the image if true
  border: PropTypes.bool,
  borderColor: PropTypes.string,
  maxWidth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]),
  // If true, a default error image isn't rendered.
  // This is used in case you want to load another image
  // on error instead of the placeholder
  altImage: PropTypes.bool,
  showSpinner: PropTypes.bool
}

const defaultProps = {
  maxWidth: 100,
  thumb: false,
  border: false,
  altImage: false,
  showSpinner: false
}

const Image = ({
  showSpinner,
  src,
  alt,
  maxWidth,
  altImage,
  ...styledProps
}) => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(showSpinner)

  const handleImageLoaded = () => {
    setError(false)
    setIsLoading(false)
  }

  const handleImageError = () => {
    if (!altImage) {
      setError(false)
      setIsLoading(false)
    }
  }

  return (
    <StyledImage maxWidth={maxWidth} {...styledProps} error={error}>
      <img
        src={isLoading ? spinner : src}
        onLoad={handleImageLoaded}
        onError={handleImageError}
        alt={alt}
      />
    </StyledImage>
  )
}

Image.propTypes = propTypes
Image.defaultProps = defaultProps

export default Image
