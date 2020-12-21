import React /*, { useState }*/ from 'react'
import PropTypes from 'prop-types'
import { Box } from 'reflexbox'
// import loadable from '@loadable/component'

import theme from 'theme'
import Heading from 'components/Text/Heading'
import BodyCopy from 'components/Text/BodyCopy'

const Branding = ({ customer }) => {
  //  const [newBranding, setNewBranding] = useState(null)

  return (
    <div>
      <Box mb={3}>
        <Heading size={2} color={theme.textColor}>
          Branding
        </Heading>
        <BodyCopy>
          Set name, welcome page text, and other branding for your patients to
          see during exam.
        </BodyCopy>
      </Box>
      <Box>
        <Heading size={4} color={theme.textColor} fontWeight={700}>
          Display Name
        </Heading>
        <BodyCopy>
          Set how the organization name is displayed to patients. In instances
          with limited screen space (emails, mobile view), a shorthand name is
          displayed.
        </BodyCopy>
      </Box>
    </div>
  )
}

Branding.propTypes = {
  customer: PropTypes.object
}

export default Branding
