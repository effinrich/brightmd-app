import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from 'reflexbox'
import { List, fromJS } from 'immutable'
import memoize from 'lodash/memoize'
import padStart from 'lodash/padStart'
import moment from 'moment'

import BodyCopy from 'components/Text/BodyCopy'

const normalizeHours = memoize(hours =>
  new List()
    .setSize(7)
    .map((d, i) => hours.filter(h => h.getIn(['open', 'day']) === i))
)

const formatTime = time => moment(padStart(time, 4, 0), 'Hmm').format('h:mm A')
const dayMap = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const renderDay = (day, i) => (
  <Flex key={i} pt={2} justifyContent="space-between" width={[1, 1 / 2]}>
    <Box width={1 / 3}>
      <BodyCopy fontSize={16} fontWeight={500}>
        {dayMap[i]}
      </BodyCopy>
    </Box>
    <Box width={1 / 3}>
      {day.size > 0 ? (
        <BodyCopy fontSize={16} fontWeight={500}>
          OPEN
        </BodyCopy>
      ) : (
        <BodyCopy fontSize={16} fontWeight={500}>
          CLOSED
        </BodyCopy>
      )}
    </Box>
    <Box width={1 / 3}>
      {day.size > 0 &&
        day.map((hours, i) => (
          <BodyCopy key={i} fontSize={16} fontWeight={500}>
            {[
              formatTime(hours.getIn(['open', 'time'])),
              formatTime(hours.getIn(['close', 'time']))
            ].join(' - ')}
          </BodyCopy>
        ))}
    </Box>
  </Flex>
)

const ReadOnly = ({ operatingHours }) => {
  const immutableHours = fromJS(operatingHours)
  const hours = normalizeHours(immutableHours)

  return <div>{hours.map(renderDay)}</div>
}

ReadOnly.propTypes = {
  operatingHours: PropTypes.array
}

export default ReadOnly
