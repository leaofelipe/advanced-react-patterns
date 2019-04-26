import React from 'react'

const CompoundContext = React.createContext()

class CompoundFlexible extends React.Component {
  static On = ({children}) =>
    <CompoundContext.Consumer>
    {(context) => (context.on ? children : null)}
    </CompoundContext.Consumer>

  static Off = ({children}) =>
    <CompoundContext.Consumer>
    {(context) => (context.on ? null : children)}
    </CompoundContext.Consumer>

  static Button = (props) => 
    <CompoundContext.Consumer>
      {({toggle}) => (
        <button onClick={toggle} {...props}>Toggle</button>
      )}
    </CompoundContext.Consumer>

  toggle = () => {
    this.setState(
      ({on}) => ({on: !on}),
      () => this.props.onToggle(this.state.on)
    )
  }

  state = {on: false, toggle: this.toggle}
  render () {
    return (
      <CompoundContext.Provider value={this.state}>
        {this.props.children}
      </CompoundContext.Provider>
    )
  }
}

export default CompoundFlexible