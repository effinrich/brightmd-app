import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Box, Flex } from 'reflexbox'
import loadable from '@loadable/component'

import { Customer } from 'models'
import theme from 'theme'
import Heading from 'components/Text/Heading'
import BodyCopy from 'components/Text/BodyCopy'
import FlatButton from 'components/FlatButton'
import SubmitButton from 'components/SubmitButton'

import { setCustomer } from 'store/customer'

const ReadOnly = loadable(
  /* istanbul ignore next */ () => import('./partials/ReadOnly')
)

const EditHours = loadable(
  /* istanbul ignore next */ () => import('./partials/Edit')
)

const dayMap = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const formName = 'editHoursForm'

const Hours = props => {
  const { customer } = props
  const dispatch = useDispatch()

  const [isViewToggled, setIsViewToggled] = useState(false)

  // preload EditHours so the edit render is seamless
  useEffect(() => {
    EditHours.preload()
  }, [])

  const handleSubmit = async mutatedCustomer => {
    dispatch(setCustomer(mutatedCustomer))
    setIsViewToggled(!isViewToggled)
  }

  const handleToggleView = () => {
    setIsViewToggled(!isViewToggled)
  }

  return (
    <div>
      <Flex justifyContent="space-between" width={1}>
        <Box width={[5 / 8, 6 / 8]}>
          <Heading size={2} color={theme.textColor}>
            Hours of Operation
          </Heading>
        </Box>
        <Box width={[3 / 8, 2 / 8]} maxWidth={150} textAlign="right">
          {isViewToggled ? (
            <Flex justifyContent="space-between" width={1}>
              <FlatButton
                color={theme.primaryButtonUpBg}
                overColor={theme.primaryButtonOverBg}
                onClick={handleToggleView}
                mr={1}
              >
                Cancel
              </FlatButton>
              <SubmitButton form={formName} />
            </Flex>
          ) : (
            <FlatButton
              color={theme.primaryButtonUpBg}
              overColor={theme.primaryButtonOverBg}
              onClick={handleToggleView}
            >
              Edit
            </FlatButton>
          )}
        </Box>
      </Flex>
      <BodyCopy>
        Manage standard hours of operation when providers are available to
        provide care. Patients will be informed if they submit an exam outside
        of these hours.
      </BodyCopy>
      <Flex justifyContent="space-between" width={1} mt={3}>
        <Box width={1 / 8} minWidth={[100, 140]}>
          {customer.hours.map((day, i) => (
            <Flex key={i} mb={'45px'}>
              <BodyCopy fontSize={16} fontWeight={500} mb={0} mt={0}>
                {dayMap[i]}
              </BodyCopy>
            </Flex>
          ))}
        </Box>
        <Box width={7 / 8}>
          {isViewToggled ? (
            <EditHours
              onSubmit={handleSubmit}
              initialValues={customer.toJS()}
              form={formName}
              enableReinitialize
              {...props}
            />
          ) : (
            <ReadOnly hours={customer.mapFromReduxForm().hours} />
          )}
        </Box>
      </Flex>
    </div>
  )
}

Hours.propTypes = {
  customer: PropTypes.instanceOf(Customer)
}

export default Hours
