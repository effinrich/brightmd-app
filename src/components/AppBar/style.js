import styled from 'styled-components'
import { space } from 'styled-system'
import { Flex } from 'reflexbox'

export default styled(Flex)`
  ${space};

  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  z-index: 1;
  min-height: 72px;
  background-color: white;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
`
