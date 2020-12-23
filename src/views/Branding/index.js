import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Box, Flex } from 'reflexbox'
import loadable from '@loadable/component'

import theme from 'theme'
import Heading from 'components/Text/Heading'
import BodyCopy from 'components/Text/BodyCopy'
import FlatButton from 'components/FlatButton'
import SubmitButton from 'components/SubmitButton'

import { setCustomer } from 'store/customer'

const ReadOnly = loadable(
  /* istanbul ignore next */ () => import('./partials/ReadOnly')
)

const EditBranding = loadable(
  /* istanbul ignore next */ () => import('./partials/Edit')
)

const formName = 'editBrandingForm'

const Branding = ({ customer }) => {
  const dispatch = useDispatch()

  const [isViewToggled, setIsViewToggled] = useState(false)

  // preload EditBranding so the edit render is seamless
  useEffect(() => {
    EditBranding.preload()
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
            Branding
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
      <Box>
        <BodyCopy>
          Set name, welcome page text, and other branding for your patients to
          see during exam.
        </BodyCopy>
      </Box>

      <Box pt={2}>
        <Heading size={4} color={theme.textColor} fontWeight={700}>
          Display Name
        </Heading>
        <BodyCopy>
          Set how the organization name is displayed to patients. In instances
          with limited screen space (emails, mobile view), a shorthand name is
          displayed.
        </BodyCopy>
      </Box>

      <Flex justifyContent="space-between" width={1} pt={1}>
        <Box width={[1 / 4, 1 / 8]} minWidth={[100, 140]}>
          <BodyCopy mt={'24px'} fontSize={16} fontWeight={500}>
            <label htmlFor="fullName">Full Name</label>
          </BodyCopy>
          <BodyCopy mt={'58px'} fontSize={16} fontWeight={500}>
            <label htmlFor="shortName">Short Name</label>
          </BodyCopy>
          <BodyCopy mt={'58px'} fontSize={16} fontWeight={500}>
            <label htmlFor="welcomeText">Welcome Text</label>
          </BodyCopy>
        </Box>

        <Box width={[3 / 4, 7 / 8]}>
          {isViewToggled ? (
            <EditBranding
              onSubmit={handleSubmit}
              initialValues={customer}
              form={formName}
              enableReinitialize
            />
          ) : (
            <ReadOnly customer={customer} />
          )}
        </Box>
      </Flex>
    </div>
  )
}

Branding.propTypes = {
  customer: PropTypes.object
}

export default Branding
