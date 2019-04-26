import React from 'react'

class RenderProps extends React.Component {
  state = {on: false}

  toggle = () => {
    this.setState(({on}) => ({on: !on}), this.props.onToggle(this.state.on))
  }

  render () {
    return this.props.children({on: this.state.on, toggle: this.toggle})
    // return React.Children.map(this.props.children, (childElm) => {
    //   return React.cloneElement(childElm, {
    //     on: this.state.on,
    //     toggle: this.toggle
    //   })
    // })
  }
}

export default RenderProps