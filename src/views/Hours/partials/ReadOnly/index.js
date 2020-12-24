import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'reflexbox'
import { List } from 'immutable'
import memoize from 'lodash/memoize'
import padStart from 'lodash/padStart'
import moment from 'moment'

import BodyCopy from 'components/Text/BodyCopy'

const ReadOnly = ({ hours: operatingHours }) => {
  const normalizeHours = memoize(hours =>
    new List()
      .setSize(7)
      .map((d, i) => hours.filter(h => h.getIn(['open', 'day']) === i))
  )

  const formatTime = time =>
    moment(padStart(time, 4, 0), 'Hmm').format('h:mm A')

  const renderDay = (day, i) => (
    <Flex key={i} justifyContent="space-between" width={[1, 1 / 2]} mb={'45px'}>
      <Box width={1 / 2} minWidth={110} pl={36}>
        {day.size > 0 ? (
          <BodyCopy fontSize={16} fontWeight={500} mb={0} mt={0}>
            OPEN
          </BodyCopy>
        ) : (
          <BodyCopy fontSize={16} fontWeight={500} mb={0} mt={0}>
            CLOSED
          </BodyCopy>
        )}
      </Box>
      <Box width={1 / 2} minWidth={150}>
        {day.size > 0 &&
          day.map((hours, i) => (
            <BodyCopy key={i} fontSize={16} fontWeight={500} mb={0} mt={0}>
              {[
                formatTime(hours.getIn(['open', 'time'])),
                formatTime(hours.getIn(['close', 'time']))
              ].join(' - ')}
            </BodyCopy>
          ))}
      </Box>
    </Flex>
  )

  const hours = normalizeHours(operatingHours)

  return hours.map(renderDay)
}

ReadOnly.propTypes = {
  hours: PropTypes.object
}

export default ReadOnly
