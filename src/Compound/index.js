import React from 'react'

class Compound extends React.Component {
  state = {on: false}
  static On = ({on, children}) => on ? children : null 
  static Off = ({on, children}) => on ? null : children
  static Button = ({toggle}) => <button onClick={toggle}>Toggle</button>

  toggle = () => {
    this.setState(({on}) => ({on: !on}), this.props.onToggle(this.state.on))
  }

  render () {
    return React.Children.map(this.props.children, (childElm) => {
      return React.cloneElement(childElm, {
        on: this.state.on,
        toggle: this.toggle
      })
    })
  }
}

export default Compound