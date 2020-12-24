import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import get from 'lodash/get'

export default class MockReuxFormField extends PureComponent {
  static propTypes = {
    children: PropTypes.element
  }

  constructor(props) {
    const childProps = props.children.props
    super(props)

    this.state = {
      input: {
        // TODO: set default value to boolean if child is a Checkbox like object
        value: get(childProps, 'input.value', '')
      },
      meta: {
        active: get(childProps, 'meta.active', false),
        touched: get(childProps, 'meta.touched', false),
        visited: get(childProps, 'meta.visited', false)
      }
    }
  }

  handleChange = event => {
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value

    this.setState(prevState => ({
      input: {
        ...prevState.input,
        value
      }
    }))
  }

  handleFocus = () => {
    this.setState(prevState => ({
      meta: {
        ...prevState.meta,
        active: true,
        visited: true
      }
    }))
  }

  handleBlur = () => {
    this.setState(prevState => ({
      meta: {
        ...prevState.meta,
        active: false,
        touched: true
      }
    }))
  }

  render() {
    const { children } = this.props
    const inputProps = children.props.input
    const metaProps = children.props.meta || {}
    const nextProps = {
      input: {
        ...inputProps,
        ...this.state.input,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      },
      meta: {
        ...metaProps,
        ...this.state.meta
      }
    }
    return React.cloneElement(children, nextProps)
  }
}
