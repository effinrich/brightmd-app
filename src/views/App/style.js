import styled from 'styled-components'
import { space } from 'styled-system'

import theme from 'theme'

export default styled.div`
  ${space};
`

export const StyledAppContainer = styled.div`
  ${space};

  position: relative;
  max-width: ${theme.viewportMaxWidth};
  margin: 0 auto;
`
