import React /*, { useState }*/ from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'reflexbox'
import loadable from '@loadable/component'

import theme from 'theme'
import Heading from 'components/Text/Heading'
import BodyCopy from 'components/Text/BodyCopy'
import FlatButton from 'components/FlatButton'

const ReadOnly = loadable(
  /* istanbul ignore next */ () => import('./partials/ReadOnly')
)

const Hours = ({ customer }) => {
  // const [newHours, setNewHours] = useState(null)

  return (
    <div>
      <Flex justifyContent="space-between" width={1}>
        <Box>
          <Heading size={2} color={theme.textColor}>
            Hours of Operation
          </Heading>
          <BodyCopy>
            Manage standard hours of operation when providers are available to
            provide care. Patients will be informed if they submit an exam
            outside of these hours.
          </BodyCopy>
        </Box>
        <Box>
          <FlatButton
            color={theme.primaryButtonUpBg}
            overColor={theme.primaryButtonOverBg}
          >
            Edit
          </FlatButton>
        </Box>
      </Flex>
      <ReadOnly operatingHours={customer.operatingHours} />
    </div>
  )
}

Hours.propTypes = {
  customer: PropTypes.object
}

export default Hours
