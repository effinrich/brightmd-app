import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import theme from 'theme'

import StyledToggle, {
  StyledToggleText,
  StyledToggleSwitch,
  StyledToggleInput,
  StyledToggleSlider
} from './style'

export default class Toggle extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    disabled: PropTypes.bool,
    checked: PropTypes.oneOf(['', true, false]),
    toggleText: PropTypes.arrayOf(PropTypes.string),
    onChange: PropTypes.func,
    error: PropTypes.bool,
    warning: PropTypes.bool,
    enabledColor: PropTypes.string,
    disabledColor: PropTypes.string
  }

  static defaultProps = {
    checked: false,
    disabled: false,
    enabledColor: theme.brandColor,
    disabledColor: theme.lightMedGrey
  }

  constructor(props) {
    super(props)

    this.state = {
      checked: props.checked === '' ? false : props.checked
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.checked !== prevProps.checked) {
      this.setState({ checked: this.props.checked })
    }
  }

  handleOnChange = event => {
    const nextChecked = !this.state.checked
    this.setState({ checked: nextChecked })

    if (this.props.onChange) {
      this.props.onChange(event, nextChecked)
    }

    event.stopPropagation()
  }

  render() {
    const {
      name,
      disabled,
      enabledColor,
      disabledColor,
      toggleText,
      error,
      warning,
      ...styledProps
    } = this.props
    const { checked } = this.state
    const styledLogicProps = {
      checked,
      disabled,
      disabledColor,
      error,
      warning,
      enabledColor
    }
    return (
      <StyledToggle {...styledProps}>
        {toggleText && (
          <StyledToggleText {...styledProps}>
            {checked ? toggleText[1] : toggleText[0]}
          </StyledToggleText>
        )}
        <StyledToggleSwitch>
          <StyledToggleInput
            name={name}
            checked={checked}
            type="checkbox"
            disabled={disabled}
            onChange={this.handleOnChange}
            {...styledLogicProps}
          />
          <StyledToggleSlider {...styledLogicProps} />
        </StyledToggleSwitch>
      </StyledToggle>
    )
  }
}
