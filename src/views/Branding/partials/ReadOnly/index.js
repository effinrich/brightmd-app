import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'reflexbox'

import BodyCopy from 'components/Text/BodyCopy'

const ReadOnly = ({ customer }) => {
  return (
    <Box width={1}>
      <BodyCopy mt={'24px'} fontSize={16} fontWeight={400}>
        {customer.fullName}
      </BodyCopy>
      <BodyCopy mt={'58px'} fontSize={16} fontWeight={400}>
        {customer.shortName}
      </BodyCopy>
      <BodyCopy mt={'58px'} fontSize={16} fontWeight={400}>
        {customer.welcomeText}
      </BodyCopy>
    </Box>
  )
}

ReadOnly.propTypes = {
  customer: PropTypes.object
}

export default ReadOnly
